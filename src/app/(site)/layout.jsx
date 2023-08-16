'use client'
import Footer from "@/components/footer/footer"
import BottomNavbar from "@/components/global/navbar/BottomNavbar"
import MainNavbar from "@/components/global/navbar/MainNavbar"
import SubNav from "@/components/global/navbar/SubNav"
import MobileNav from "@/components/mobile/MobileNav"
import AbsoluteCart from "@/components/pages/cart/AbsoluteCart"
import AbsoluteCartDetails from "@/components/pages/cart/AbsoluteCartDetails"
import Sidebar from "@/components/sidebar/Sidebar"
import { ToggleContext } from "@/provider/contextProvider"
import { useContext } from "react"

function Layout({ children }) {
    const { data, setData } = useContext(ToggleContext)

    return (
        <>
            {/* Top-bar */}
            <div className="md:sticky top-0 z-50">
                {/* for desktop view */}
                <div className="hidden md:block">
                    <MainNavbar />
                    {/* Sub Nav */}
                    <SubNav />
                </div>
                {/* for render only mobile devices */}
                <div className="md:hidden">
                    <MobileNav />
                </div>
            </div>
            <BottomNavbar />
            <div className="right-0 fixed flex top-2/4 mr-2 z-50">
                <AbsoluteCart />
            </div>
            <div className="right-0 fixed mr-2 z-50 top-24 ">
                <AbsoluteCartDetails />
            </div>
            {/*  Side bar and Body */}
            <>
                <div className="flex">
                    <div
                        className={`${data.sidebarCollapse ? "w-[80px]" : "w-[230px]"} min-h-screen transition-all  shadow-md relative overflow-hidden hidden lg:block`}
                    // className={`${"sidebarOpen"
                    //     ? "lg:col-start-1 lg:col-end-3"
                    //     : "lg:col-start-1 lg:col-end-2"
                    //     } hidden lg:inline-block h-screen relative`}
                    >
                        <Sidebar />
                    </div>
                    <div className={` ${data.sidebarCollapse ? "lg:w-[calc(100%-80px)]" : "lg:w-[calc(100%-230px)]"} transition-all  w-full`}
                    // className={`${"sidebarOpen"
                    //     ? "lg:col-start-3 lg:col-end-13"
                    //     : "lg:col-start-2 lg:col-end-13"
                    //     }`}
                    >
                        {children}
                        <Footer />
                    </div>
                </div>
            </>
        </>
    )
}

export default Layout