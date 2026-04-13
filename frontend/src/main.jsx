import React, { Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LazyMotion, domAnimation } from "framer-motion";

// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Project = lazy(() => import("./pages/Project.jsx"));

// Premium Loading Fallback
const PageLoader = () => (
  <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center gap-4">
    <div className="w-12 h-12 border-2 border-[#e63946]/20 border-t-[#e63946] rounded-full animate-spin"></div>
    <p className="text-[#e63946] text-[10px] tracking-[0.3em] font-bold uppercase animate-pulse">Loading Experience</p>
  </div>
);

createRoot(document.getElementById("root")).render(
    <BrowserRouter>
        <LazyMotion features={domAnimation}>
            <Suspense fallback={<PageLoader />}>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="project" element={<Project />} />
                        <Route path="*" element={<div className="min-h-screen text-white flex items-center justify-center">Custom 404: Route Not Found</div>} />
                    </Route>
                </Routes>
            </Suspense>
        </LazyMotion>
    </BrowserRouter>
);
