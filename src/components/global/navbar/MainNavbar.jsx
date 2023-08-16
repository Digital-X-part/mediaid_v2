'use client'
import { ToggleContext } from "@/provider/contextProvider";
import { useSession } from 'next-auth/react';
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { useContext, useEffect } from "react";
import { CiLocationOn } from "react-icons/Ci";
import { BsCartPlus } from "react-icons/bs";
import Login from "../login/login";
import SearchBar from "../search/SearchBar";
const MainNavbar = () => {
    const { setData } = useContext(ToggleContext)
    const { status } = useSession()

    const query = useSearchParams()
    const isOpen = query.get("signin")

    useEffect(() => {

        if (isOpen === "user" && status === "unauthenticated") {
            window.login_modal_1.showModal()
        }

    }, [isOpen, status])

    return (
        <div className="flex pt-2 pb-4 items-end justify-between gap-4 bg-base-100 lg:px-10">
            <div className="col-span-3 flex justify-center items-center ">
                <div className="mr-10">
                    <Link href="/">
                        <Image
                            className="h-6 w-auto sm:h-10"
                            src="https://i0.wp.com/mediaidbd.net/wp-content/uploads/2021/05/cropped-Mediaid-white-stroke-1.png2_-1.png?resize=200%2C51&ssl=1"
                            alt=""
                            width={200}
                            height={200}
                        />
                    </Link>
                </div>
                <div
                    className=" cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                    <p className="font-semibold text-sm text-slate-600">
                        Deliver to <span className="font-bold text-teal-600">Bulbul</span>
                    </p>
                    <div className="flex items-center">
                        <CiLocationOn size="1.5em" />
                        <p className="font-bold text-sm text-teal-500">
                            Gopalganj, Dhaka...
                        </p>
                    </div>
                </div>
            </div>
            <div className="grow">
                <SearchBar />
            </div>
            <div className="col-span-3 flex gap-4 justify-center items-center">
                <Link onClick={() => window.login_modal_1.showModal()} href={{ pathname: "/", query: { signin: "user" } }}
                    className="cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                    <p className="font-semibold text-sm text-slate-600">Hello, Bulbul</p>

                    <p className="font-bold text-base text-teal-500">Account & Lists</p>
                </Link>
                <Link
                    href=""
                    className=" cursor-pointer hover:outline rounded-sm outline-teal-400 p-[2px] ">
                    <p className="font-semibold text-sm text-slate-600">Returns</p>

                    <p className="font-bold text-base text-teal-500">& Orders</p>
                </Link>
                <div
                    onClick={() => setData(s => ({ ...s, openCart: !s.openCart }))}
                    className="flex items-end cursor-pointer hover:outline rounded-sm outline-teal-400 p-2">
                    <div className="relative">
                        <BsCartPlus size={32} color="teal" />
                        <span className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-600 px-1 text-white font-bold rounded-full text-sm ">
                            12
                        </span>
                    </div>
                    <p className="font-bold text-base text-teal-500 -mb-1">Cart</p>
                </div>
            </div>
            <Login />
        </div>
    );
};

export default MainNavbar;
