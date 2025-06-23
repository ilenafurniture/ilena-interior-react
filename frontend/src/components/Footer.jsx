import { Link } from "react-router-dom";
import { Img } from "react-image";
import iconilena from "../assets/img/logoilenainterior.png";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            {/* <div className="container my-6 mx-6">
                <div className="flex justify-between items-center py-4">
                    <div className="flex gap-4">
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <div className="flex flex-col">
                        <Img
                            src={iconilena}
                            alt="Logo"
                            width={150}
                            height={200}
                        />
                    </div>
                </div>
                <hr
                    style={{
                        opacity: "0.5",
                        width: "100%",
                    }}
                />
                <div className="flex justify-between items-center py-4">
                    <div className="flex gap-2">
                        <Link to="/">
                            <FaFacebookF style={{ fontSize: "18px" }} />
                        </Link>
                        <Link to="/">
                            <FaInstagram style={{ fontSize: "18px" }} />
                        </Link>
                        <Link to="/">
                            <FaTwitter style={{ fontSize: "18px" }} />
                        </Link>
                    </div>
                    <div
                        className="flex gap-2 text-sm"
                        style={{ opacity: "0.7" }}
                    >
                        <Link to="/">Terms & Conditions</Link>
                        <Link to="/">Privacy Policy</Link>
                    </div>
                </div>
            </div>
            <p
                className="text-center mb-4"
                style={{
                    opacity: "0.5",
                    fontSize: "14px",
                }}
            >
                Copyright &copy;{" Ilenafurniture"} {new Date().getFullYear()}
            </p> */}

            <div className="container mx-auto py-6 px-4">
                <div className="flex justify-between gap-8 items-center">
                    <div className=" flex flex-col gap-4" style={{ flex: 4 }}>
                        <div className="flex justify-start items-center gap-6">
                            <Link to="/">
                                <Img
                                    src={iconilena}
                                    alt="Logo"
                                    width={100}
                                    height={30}
                                />
                            </Link>
                            <div className="flex flex-col gap-0.5">
                                <h3 className="text-lg font-bold text-white">
                                    ILENA INTERIOR STUDIO
                                </h3>
                                <p
                                    className="text-sm text-white"
                                    style={{ opacity: "0.7" }}
                                >
                                    Semarang, Jawa Tengah, Indonesia
                                </p>
                            </div>
                        </div>
                        <hr
                            style={{
                                opacity: "0.5",
                                width: "100%",
                            }}
                        />
                        <div className="flex gap-2 text-sm justify-between">
                            <div>
                                <Link
                                    className="flex gap-2 items-center justify-center"
                                    to="https://wa.me/6281329978697"
                                >
                                    <span className="text-white">
                                        <img
                                            src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                                            alt="whatsapp"
                                            width={14}
                                            height={14}
                                        />
                                    </span>
                                    <p
                                        className="text-sm text-white"
                                        style={{ opacity: "0.7" }}
                                    >
                                        +62 813-2997-8697
                                    </p>
                                </Link>
                            </div>
                            <div className="flex gap-2">
                                <Link to="/">
                                    <FaFacebookF style={{ fontSize: "14px" }} />
                                </Link>
                                <Link to="/">
                                    <FaInstagram style={{ fontSize: "14px" }} />
                                </Link>
                                <Link to="/">
                                    <FaTwitter style={{ fontSize: "14px" }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-6" style={{ flex: 1 }}>
                        <div className="flex flex-col gap-1">
                            <h1
                                className="font-bold"
                                style={{ fontSize: "14px" }}
                            >
                                Menu
                            </h1>
                            <div className="flex flex-col">
                                <Link to="/">Home</Link>
                                <Link to="/about">About Us</Link>
                            </div>
                        </div>
                        {/* <div className="flex flex-col">
                            <div className="flex flex-col gap-1">
                                <h1
                                    className="font-bold"
                                    style={{ fontSize: "14px" }}
                                >
                                    Projects
                                </h1>
                                <Link to="/project">Projects</Link>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
