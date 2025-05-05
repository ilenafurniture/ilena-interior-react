import { Img } from "react-image";
import benner from "../assets/img/benner.jpg";
import Tombol from "../components/Tombol";
import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Home = () => {
    const apikey = import.meta.env.VITE_IMG_APIKEY;
    // console.log(apikey);
    const containerRef = useRef(null);
    const [widthScroll, setWidthScroll] = useState(0);

    useEffect(() => {
        setWidthScroll(containerRef.current.clientWidth);
        document.title = "Home";
        const scrollInterval = setInterval(() => {
            if (containerRef.current) {
                containerRef.current.scrollBy({
                    left: 1,
                });
            }
            const scrollLeft = containerRef.current.scrollLeft;
            const scrollWidth = containerRef.current.scrollWidth;
            if (scrollLeft + widthScroll >= scrollWidth) {
                containerRef.current.scrollTo({
                    left: 0,
                });
            }
        }, 20);
        return () => clearInterval(scrollInterval);
    }, []);

    return (
        <>
            <Img
                src={benner}
                alt="Logo"
                style={{
                    width: "100%",
                    height: "100svh",
                    maxHeight: 700,
                    objectFit: "cover",
                }}
            />
            <div className="container mx-auto">
                <div className="container py-6">
                    <h3>ABOUT</h3>
                    <h1 className="text-sm text-gray-400">
                        We are the best interior design studio in the world
                    </h1>
                    <p style={{ width: "50%" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Aspernatur vero corrupti blanditiis sunt, repellat
                        obcaecati? Fugit quisquam quaerat ducimus aperiam?
                    </p>
                </div>
                <div className="container">
                    <div
                        className="flex gap-4"
                        style={{ height: "70svh", maxHeight: 600 }}
                    >
                        <div
                            className="flex gap-4"
                            style={{ flex: 1, height: "100%" }}
                        >
                            <div style={{ flex: 1 }} className="w-full h-full">
                                <img
                                    className="w-full h-full"
                                    style={{ objectFit: "cover" }}
                                    src={`https://img.ilenafurniture.com/image/1742449295384.png/?apikey=${apikey}`}
                                    alt=""
                                />
                            </div>
                            <div style={{ flex: 1 }} className="w-full h-full">
                                <img
                                    className="w-full h-full"
                                    style={{ objectFit: "cover" }}
                                    src={`https://img.ilenafurniture.com/image/1742449142002.png/?apikey=${apikey}`}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex flex-col " style={{ flex: 1 }}>
                            <div className="flex" style={{ height: "50%" }}>
                                <img
                                    style={{
                                        aspectRatio: "1/1",
                                        objectFit: "cover",
                                        borderRadius: "0px 50px 0px 0px",
                                    }}
                                    src={`https://img.ilenafurniture.com/image/1742448909605.png/?apikey=${apikey}`}
                                    alt=""
                                />
                                <div
                                    className="flex justify-end items-end tombol-mobile"
                                    style={{ flex: 1 }}
                                >
                                    <Tombol
                                        text="LEARN MORE"
                                        style="lonjong hitam"
                                    />
                                </div>
                            </div>
                            <div
                                style={{ height: "50%" }}
                                className="flex gap-8 justify-center items-center mt-16"
                            >
                                <div>
                                    <h2 style={{ fontSize: "2rem" }}>2K+</h2>
                                    <p>PROJECTS DONE</p>
                                </div>
                                <div>
                                    <h2 style={{ fontSize: "2rem" }}>20+</h2>
                                    <p>PRO TEAMS</p>
                                </div>
                                <div>
                                    <h2 style={{ fontSize: "2rem" }}>300+</h2>
                                    <p>GLOBAL CLIENTS</p>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div
                    className="bg-gray-200 my-6 flex justify-center gap-6 container"
                    style={{ borderRadius: "20px 20px 0px 20px" }}
                >
                    <div>
                        <img
                            style={{
                                objectFit: "cover",
                                width: "100%",
                                height: "100%",
                                borderRadius: "20px 0px 0px 20px",
                            }}
                            src={`https://ilenafurniture.com/img/barang/300/BA100000.webp`}
                            alt=""
                        />
                    </div>

                    <div className="container mx-6 flex flex-col">
                        <div className="flex flex-col justify-center my-6">
                            <h3 style={{ fontSize: "2.5rem" }}>
                                We are the best interior design studio in the
                                world
                            </h3>
                            <p style={{ fontSize: "1.5rem" }}>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Aspernatur vero corrupti
                                blanditiis sunt, repellat obcaecati? Fugit
                                quisquam quaerat ducimus aperiam?
                            </p>
                        </div>
                        <Tombol style="lonjong hitam" text="LEAN ABOUT" />
                    </div>
                </div>
                <div className="container flex gap-2 mobile-tengah">
                    <div style={{ flex: 1 }}>
                        <h3>ABOUT</h3>
                        <h1 className="text-sm text-gray-400">
                            We are the best interior design studio in the world
                        </h1>
                        <p className="my-4">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Aspernatur vero corrupti blanditiis sunt,
                            repellat obcaecati? Fugit quisquam quaerat ducimus
                            aperiam?
                        </p>
                    </div>
                    <div style={{ flex: 1 }} className="gap-2 flex flex-col">
                        <div className="flex gap-2">
                            <img
                                className="w-1/2 h-48"
                                style={{ objectFit: "cover" }}
                                src={`https://img.ilenafurniture.com/image/1742445399641.webp/?apikey=${apikey}`}
                                alt=""
                            />
                            <img
                                className="w-1/2 h-48"
                                style={{ objectFit: "cover" }}
                                src={`https://img.ilenafurniture.com/image/1742449295384.png/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div className="flex gap-2 items-center">
                            <div
                                className="flex justify-center items-center"
                                style={{ flex: 1 }}
                            >
                                <Tombol
                                    text="LEARN MORE"
                                    style="lonjong hitam"
                                />
                            </div>
                            <img
                                className="w-1/2 h-48"
                                style={{
                                    objectFit: "cover",
                                    borderRadius: "0px 0px 50px 0px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742445431983.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="py-6 my-6 hidden-scrollbar"
                    ref={containerRef}
                    style={{ overflowX: "scroll" }}
                >
                    <div
                        className="flex items-center"
                        style={{
                            top: 0,
                            left: 0,
                            width: "fit-content",
                            gap: "30px",
                        }}
                    >
                        <div></div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    height: "60px",
                                    width: "200px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450163897.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    height: "60px",
                                    width: "200px",
                                    display: "block",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450190985.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450222588.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450249426.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    height: "60px",
                                    width: "200px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450163897.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    height: "60px",
                                    width: "200px",
                                    display: "block",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450190985.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450222588.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                        <div style={{ width: `${widthScroll / 4 - 30}px` }}>
                            <img
                                style={{
                                    objectFit: "cover",
                                    width: "200px",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742450249426.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="gallery">
                <div className="bapake-gallery">
                    <div className="anakke1">
                        <div className="anakke1-1"></div>
                        <div className="anakke1-2"></div>
                    </div>
                    <div className="anakke2"></div>
                    <div className="anakke3">
                        <div className="anakke3-1"></div>
                        <div className="anakke3-2">
                            <div className="anakke3-2-1"></div>
                            <div className="anakke3-2-2"></div>
                        </div>
                    </div>
                    <div className="anakke4">
                        <div className="anakke4-1">
                            <div className="anakke4-1-1"></div>
                            <div className="anakke4-1-2"></div>
                        </div>
                        <div className="anakke4-2"></div>
                    </div>
                    <div className="anakke5"></div>
                    <div className="anakke6"></div>
                </div>
                <div className="bapake-gallery2">
                    <div className="anakbapakke1"></div>
                    <div className="anakbapakke2">
                        <div className="anakbapakke2-1"></div>
                        <div className="anakbapakke2-2"></div>
                    </div>
                    <div className="anakbapakke3"></div>
                    <div className="anakbapakke4"></div>
                    <div className="anakbapakke5">
                        <div className="anakbapakke5-1">
                            <div className="anakbapakke5-1-1"></div>
                            <div className="anakbapakke5-1-2"></div>
                        </div>
                        <div className="anakbapakke5-2"></div>
                    </div>
                    <div className="anakbapakke6"></div>
                </div>
            </div>

            <div className="w-full bg-gray-200 py-6 flex justify-center items-center flex-col gap-10">
                <div className="container flex justify-between my-5">
                    <div
                        className="container  flex items-center"
                        style={{ flex: 1 }}
                    >
                        <h1 className="textbesar text-start">
                            01.Interior Design
                        </h1>
                    </div>
                    <div className=" flex flex-col my-6" style={{ flex: 1 }}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aliquam rem est ipsum in expedita, harum vel
                            nesciunt unde nobis, placeat libero odit, reiciendis
                            vitae a ullam voluptatibus animi laborum? Ut.
                        </p>
                        <div className="flex justify-start">
                            <Tombol
                                text="LEARN MORE"
                                icon={<FaArrowRight />}
                                style="transparan"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <div className="container flex justify-between my-5">
                    <div
                        className="container flex items-center"
                        style={{ flex: 1 }}
                    >
                        <h1 className="textbesar text-start">
                            02.Furniture Design
                        </h1>
                    </div>
                    <div className=" flex flex-col my-6" style={{ flex: 1 }}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aliquam rem est ipsum in expedita, harum vel
                            nesciunt unde nobis, placeat libero odit, reiciendis
                            vitae a ullam voluptatibus animi laborum? Ut.
                        </p>
                        <div className="flex justify-start">
                            <Tombol
                                text="LEARN MORE"
                                icon={<FaArrowRight />}
                                style="transparan"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
                <div className="container flex justify-between my-5">
                    <div
                        className="container flex items-center"
                        style={{ flex: 1 }}
                    >
                        <h1 className="textbesar text-start">
                            03.Lanscape Design
                        </h1>
                    </div>
                    <div className=" flex flex-col my-6" style={{ flex: 1 }}>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Aliquam rem est ipsum in expedita, harum vel
                            nesciunt unde nobis, placeat libero odit, reiciendis
                            vitae a ullam voluptatibus animi laborum? Ut.
                        </p>
                        <div className="flex justify-start">
                            <Tombol
                                text="LEARN MORE"
                                icon={<FaArrowRight />}
                                style="transparan"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex" style={{ height: "100svh" }}>
                <div style={{ flex: 1, position: "relative" }}>
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                        }}
                    >
                        <div
                            style={{
                                width: "100%",
                                height: "100%",
                                position: "absolute",
                            }}
                        >
                            <div className="flex flex-col align-start justify-end h-full ms-6">
                                <p
                                    style={{
                                        color: "white",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontStyle: "italic",
                                        textDecorationColor: "white",
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "wavy",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet
                                </p>
                                <h3
                                    style={{
                                        color: "white",
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontStyle: "italic",
                                        textDecorationColor: "white",
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "wavy",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    Furniture Pakage
                                </h3>
                            </div>
                        </div>
                        <div style={{ width: "100%", height: "100%" }}>
                            <img
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    objectFit: "cover",
                                }}
                                src={`https://img.ilenafurniture.com/image/1742445431983.webp/?apikey=${apikey}`}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col" style={{ flex: 1 }}>
                    <div style={{ height: "50%", position: "relative" }}>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div className="flex flex-col align-start justify-end h-full ms-6">
                                <p
                                    style={{
                                        color: "white",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontStyle: "italic",
                                        textDecorationColor: "white",
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "wavy",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet
                                </p>
                                <h3
                                    style={{
                                        color: "white",
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontStyle: "italic",
                                        textDecorationColor: "white",
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "wavy",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    Furniture Pakage
                                </h3>
                            </div>
                        </div>
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                            src={`https://img.ilenafurniture.com/image/1742445431983.webp/?apikey=${apikey}`}
                            alt=""
                        />
                    </div>
                    <div style={{ height: "50%", position: "relative" }}>
                        <div
                            style={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                            }}
                        >
                            <div className="flex flex-col align-start justify-end h-full ms-6">
                                <p
                                    style={{
                                        color: "white",
                                        fontSize: "1.5rem",
                                        fontWeight: "bold",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontStyle: "italic",
                                        textDecorationColor: "white",
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "wavy",
                                    }}
                                >
                                    Lorem ipsum dolor sit amet
                                </p>
                                <h3
                                    style={{
                                        color: "white",
                                        fontSize: "2.5rem",
                                        fontWeight: "bold",
                                        textShadow:
                                            "2px 2px 4px rgba(0, 0, 0, 0.5)",
                                        textTransform: "uppercase",
                                        letterSpacing: "0.1em",
                                        fontStyle: "italic",
                                        textDecorationColor: "white",
                                        textDecorationThickness: "2px",
                                        textDecorationStyle: "wavy",
                                        marginBottom: "2rem",
                                    }}
                                >
                                    Furniture Pakage
                                </h3>
                            </div>
                        </div>
                        <img
                            style={{
                                height: "100%",
                                width: "100%",
                                objectFit: "cover",
                            }}
                            src={`https://img.ilenafurniture.com/image/1742445431983.webp/?apikey=${apikey}`}
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
