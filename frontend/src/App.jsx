import { Outlet } from "react-router-dom";
import './styles/base.scss';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <div className="flex flex-col" style={{ minHeight: "100svh" }}>
                <div style={{ flex: 1 }}>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </>
    );
}

export default App;
