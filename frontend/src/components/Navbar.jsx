import { Link, useLocation } from "react-router-dom";
import { Img } from "react-image";
import iconilena from "../assets/img/logoilenainterior.png";
import Tombol from "./Tombol";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import {
  MdOutlineContactSupport,
  MdOutlineMail,
  MdOutlinePhone,
} from "react-icons/md";

const Navbar = () => {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className={`navbar transition-all duration-300 ${scrolled || mobileOpen ? "scrolled" : ""}`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center z-110 relative" onClick={() => setMobileOpen(false)}>
            <Img 
                src={iconilena} 
                alt="Logo" 
                width={140} 
                height={40} 
                className={`transition-all duration-300 ${mobileOpen ? "brightness-0 invert" : ""}`} 
            />
          </Link>

          {/* Toggle (mobile) */}
          <div className="md:hidden z-110 relative">
          <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`text-2xl transition-colors duration-300 text-white`}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop nav */}
          <ul className="nav-links hidden md:flex items-center gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
              { to: "/project", label: "Project" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`nav-link ${
                    pathname === to ? "active" : ""
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Full-screen Mobile Menu Overlay */}
      <div className={`mobile-overlay md:hidden ${mobileOpen ? "open" : ""}`}>
        <div className="nav-links-mobile">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className={pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className={pathname === "/about" ? "active" : ""}
          >
            About Us
          </Link>
          <Link
            to="/project"
            onClick={() => setMobileOpen(false)}
            className={pathname === "/project" ? "active" : ""}
          >
            Project
          </Link>
        </div>

        {/* Contact info in mobile menu */}
        <div className="contact-mobile">
          <a href="https://wa.me/628112938158" className="hover:text-[#e63946] transition-colors">
            📞 +62 811 2938 158
          </a>
          <a href="mailto:ilenacbm@gmail.com" className="hover:text-[#e63946] transition-colors break-all">
            ✉️ ilenacbm@gmail.com
          </a>
        </div>
      </div>

      {/* Floating Button */}
      <div className="float-btn">
        <Link
          to={"https://api.whatsapp.com/send?phone=628112938158"}
          className="expand"
        >
          <MdOutlinePhone size={30} />
        </Link>
        <Link to={"mailto:ilenacbm@gmail.com"} className="expand">
          <MdOutlineMail size={30} />
        </Link>
        <button>
          <MdOutlineContactSupport size={30} />
        </button>
      </div>
    </>
  );
};

export default Navbar;
