import { Link } from "react-router-dom";
import { Img } from "react-image";
import iconilena from "../assets/img/logoilenainterior.png";
import { FaFacebookF, FaInstagram, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#080808] pt-16 pb-6 border-t border-white/10 relative z-20">
            <div className="container mx-auto px-6 md:px-12">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mb-12">

                    {/* Brand */}
                    <div className="flex flex-col gap-4">
                        <Link to="/">
                            <Img src={iconilena} alt="Logo Ilena Interior Studio" width={140} className="brightness-0 invert opacity-90" />
                        </Link>
                        <h3 className="text-base font-bold text-white tracking-wider uppercase">ILENA INTERIOR STUDIO</h3>
                        <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                            Mewujudkan ruang impian setiap client dengan baik dan terarah, dari hati untuk memberikan kenyamanan maksimal.
                        </p>
                        <div className="flex gap-3 mt-1">
                            {[
                                { icon: <FaFacebookF size={13} />, href: "#" },
                                { icon: <FaInstagram size={13} />, href: "#" },
                                { icon: <FaWhatsapp size={13} />, href: "https://wa.me/628112938158" },
                            ].map((s, i) => (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#e63946] hover:border-[#e63946] transition-all duration-300"
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">
                            Kontak Kami
                            <div className="w-8 h-[2px] bg-[#e63946] mt-2"></div>
                        </h4>
                        <div className="flex flex-col gap-4 mt-2 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <FaMapMarkerAlt className="mt-0.5 text-[#e63946] flex-shrink-0" />
                                <p>Semarang, Jawa Tengah,<br />Indonesia</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#e63946] flex-shrink-0" />
                                <a href="https://wa.me/628112938158" className="hover:text-white transition-colors">
                                    +62 811 2938 158
                                </a>
                            </div>
                            <div className="flex items-center gap-3">
                                <FaEnvelope className="text-[#e63946] flex-shrink-0" />
                                <a href="mailto:ilenacbm@gmail.com" className="hover:text-white transition-colors break-all text-xs md:text-sm">
                                    ilenacbm@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Maps */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-sm font-bold text-white uppercase tracking-widest mb-1">
                            Lokasi
                            <div className="w-8 h-[2px] bg-[#e63946] mt-2"></div>
                        </h4>
                        <div className="mt-2 w-full h-44 rounded-xl overflow-hidden border border-white/10             shadow-[0_0_20px_rgba(230,57,70,0.08)]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126715.79606115865!2d110.33982531640624!3d-7.0247246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Semarang%20City%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1711234567890!5m2!1sen!2sid"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Lokasi Ilena Interior Studio"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Ilena Interior Studio. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link to="/" className="hover:text-[#e63946] transition-colors">Home</Link>
                        <Link to="/about" className="hover:text-[#e63946] transition-colors">Tentang Kami</Link>
                        <Link to="/project" className="hover:text-[#e63946] transition-colors">Project</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
