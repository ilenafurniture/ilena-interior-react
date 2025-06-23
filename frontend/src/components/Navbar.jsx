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
  const [showSearch, setShowSearch] = useState(false);
  const [cari, setCari] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setShowSearch(!!cari);
  }, [cari]);

  return (
    <>
      <nav className="navbar">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="logo">
            <Img src={iconilena} alt="Logo" width={140} height={40} />
          </Link>

          {/* Toggle (mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-white text-xl"
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Desktop nav */}
          <ul className="nav-links hidden md:flex items-center gap-6">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About Us" },
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

          {/* Search desktop */}
          <div className={`search-container hidden md:flex ${showSearch ? "show" : ""}`}>
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={cari}
              onChange={(e) => setCari(e.target.value)}
            />
            <Tombol
              onClick={() => setShowSearch(!showSearch)}
              icon={<FaSearch />}
              text=""
              className="bg-transparent"
            />
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
            <div className="mobile-menu md:hidden">
                <nav className="flex flex-col gap-4">
                    <Link
                    to="/"
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-link ${pathname === "/" ? "active" : ""}`}
                    >
                    Home
                    </Link>
                    <Link
                    to="/about"
                    onClick={() => setMobileOpen(false)}
                    className={`mobile-link ${pathname === "/about" ? "active" : ""}`}
                    >
                    About Us
                    </Link>
                </nav>

                <div className="mobile-search mt-4">
                    <input
                    type="text"
                    placeholder="Search"
                    value={cari}
                    onChange={(e) => setCari(e.target.value)}
                    />
                    <FaSearch />
                </div>
                </div>

            )}
      </nav>

      {/* Floating Button */}
      <div className="float-btn">
        <Link
          to={"https://api.whatsapp.com/send?phone=6281326025685"}
          className="expand"
        >
          <MdOutlinePhone size={30} />
        </Link>
        <Link to={"mailto:cbmandiri87@yahoo.com"} className="expand">
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
