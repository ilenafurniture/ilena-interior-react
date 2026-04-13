import { useRef, useEffect, useCallback } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

const TOTAL_FRAMES = 96;
const SCROLL_DISTANCE = 4000;

// Cap DPR at 2 — phones with DPR 3 don't need triple resolution for this effect
const getDeviceDPR = () => Math.min(window.devicePixelRatio || 1, 2);

// requestIdleCallback polyfill for older browsers
const scheduleIdle = typeof window !== 'undefined' && window.requestIdleCallback
  ? (fn) => window.requestIdleCallback(fn, { timeout: 2000 })
  : (fn) => setTimeout(fn, 50);

export default function Scroll3DImage() {
  const canvasRef = useRef(null);
  const imagesRef = useRef(new Array(TOTAL_FRAMES + 1).fill(null));
  const latestFrameRef = useRef(1);
  const dprRef = useRef(getDeviceDPR());
  const rafRef = useRef(null); // requestAnimationFrame handle

  const { scrollY } = useScroll();
  const frameIndex = useTransform(scrollY, [0, SCROLL_DISTANCE], [1, TOTAL_FRAMES]);

  // ─── Draw a frame onto the canvas ─────────────────────────────────────────
  const drawFrame = useCallback((frameNum) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const img = imagesRef.current[frameNum];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = dprRef.current;
    const ctx = canvas.getContext('2d', { alpha: false });
    const cssW = canvas.width / dpr;
    const cssH = canvas.height / dpr;
    const ratio = Math.max(cssW / img.naturalWidth, cssH / img.naturalHeight);
    const dx = (cssW - img.naturalWidth  * ratio) / 2;
    const dy = (cssH - img.naturalHeight * ratio) / 2;

    ctx.fillStyle = '#0A0A0A';
    ctx.fillRect(0, 0, cssW, cssH);
    ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight,
      dx, dy, img.naturalWidth * ratio, img.naturalHeight * ratio);
  }, []);

  const scheduleDraw = useCallback((frameNum) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => drawFrame(frameNum));
  }, [drawFrame]);

  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = getDeviceDPR();
    dprRef.current = dpr;
    const cssW = document.documentElement.clientWidth;
    const cssH = document.documentElement.clientHeight;
    canvas.width  = Math.round(cssW * dpr);
    canvas.height = Math.round(cssH * dpr);
    canvas.style.width  = cssW + 'px';
    canvas.style.height = cssH + 'px';
    drawFrame(latestFrameRef.current);
  }, [drawFrame]);

  // ─── Progressive frame loading ─────────────────────────────────────────────
  const loadImage = useCallback((i, priority = false, onLoad) => {
    const img = new Image();
    const padded = String(i).padStart(3, '0');
    img.decoding = 'async';
    if (priority) {
      img.fetchPriority = 'high';
    }
    
    img.onload = () => {
      imagesRef.current[i] = img;
      if (onLoad) onLoad(i, img);
    };
    img.src = `/sequence/ezgif-frame-${padded}.webp`;
  }, []);

  useEffect(() => {
    const ro = new ResizeObserver(() => handleResize());
    ro.observe(document.documentElement);
    handleResize();

    // ─ Phase 1: Load frame 1 immediately (HIGH PRIORITY)
    loadImage(1, true, () => {
      drawFrame(1);
    });

    // ─ Phase 2: Load rough sequence
    const phase2Timer = setTimeout(() => {
      for (let i = 2; i <= TOTAL_FRAMES; i += 8) {
        loadImage(i);
      }
    }, 150);

    // ─ Phase 3: Load all remaining frames
    const phase3Timer = setTimeout(() => {
      scheduleIdle(() => {
        let i = 2;
        const loadNext = () => {
          if (i > TOTAL_FRAMES) return;
          if (!imagesRef.current[i]) {
            loadImage(i, false, (idx) => {
              if (idx === latestFrameRef.current) scheduleDraw(idx);
            });
          }
          i++;
          scheduleIdle(loadNext);
        };
        loadNext();
      });
    }, 600);

    return () => {
      ro.disconnect();
      clearTimeout(phase2Timer);
      clearTimeout(phase3Timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      // Nullify references for GC
      imagesRef.current.forEach((img, idx) => {
        if (img) {
          img.src = "";
          imagesRef.current[idx] = null;
        }
      });
    };
  }, [drawFrame, handleResize, loadImage, scheduleDraw]);

  useMotionValueEvent(frameIndex, 'change', (latest) => {
    const frame = Math.min(TOTAL_FRAMES, Math.max(1, Math.round(latest)));
    latestFrameRef.current = frame;
    scheduleDraw(frame);
  });

  return (
    <div className="fixed inset-0 z-0 bg-[#0A0A0A]">
      <canvas ref={canvasRef} style={{ display: 'block' }} />
    </div>
  );
}
