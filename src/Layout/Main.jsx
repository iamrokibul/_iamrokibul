import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";
import Sidebar from "../Shared/Sidebar/Sidebar";
import Header from "../Shared/Header/Header";

const Main = () => {
    return (
        <div className="lg:w-10/12 w-11/12 mx-auto font-Inter py-5">
            <div className="lg:hidden">
                <Header></Header>
            </div>
            <div className="lg:flex lg:gap-5 space-y-5 lg:space-y-0">
                <div className="lg:w-3/12 w-full h-full lg:sticky md:top-5">
                    <Sidebar></Sidebar>
                </div>
                <div className="lg:w-9/12 w-full">
                    <div>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            <div className="mt-5 text-center border border-[#222222] px-6 py-5 bg-gradient-to-r from-[#202020] tracking-wider p-3 rounded-lg shadow-2xl">
                <Footer></Footer>
            </div>
            
        </div>
    );
};

export default Main;