import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/Navber.jsx";
import Footer from "../components/shared/Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <Navbar/>
            <Outlet></Outlet>
            <Footer/>
        </>
    );
};

export default MainLayout;