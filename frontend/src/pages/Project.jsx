import React from "react";
import { Img } from "react-image";
import project from "../assets/img/Project.jpg";
const Project = () => {
    return (
        <>
            <div className="w-full h-[30svh] relative">
                <div className="absolute inset-0 bg-black opacity-50">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
                        <h1>Project</h1>
                    </div>
                </div>
                <Img
                    src={project}
                    alt="Logo"
                    style={{
                        width: "100%",
                        height: "30svh",
                        maxHeight: 700,
                        objectFit: "cover",
                    }}
                />
            </div>

            <div chlassName="container mx-auto">
                <h1>about</h1>
                <p>about</p>
            </div>
        </>
    );
};

export default Project;
