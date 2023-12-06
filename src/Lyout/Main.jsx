import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Sgared/Footer";
import Navbar from "../Pages/Home/Home/Navbar";


const Main = () => {
    const location=useLocation()
    console.log(location);
    const headerfotter=location.pathname.includes('login') ||
    location.pathname.includes('regstion')
    return (
        <div>
            {headerfotter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {headerfotter ||<Footer></Footer>}
        </div>
    );
};

export default Main;