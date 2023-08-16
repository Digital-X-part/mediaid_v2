
'use client'
import { ToggleContext } from "@/provider/contextProvider";
import Image from "next/image";
import { useContext } from "react";
import { CiSquareRemove } from "react-icons/Ci";
import { BiDotsVerticalRounded } from "react-icons/bi";
import CheckoutModal from "../checkout/checkoutModal";


const AbsoluteCartDetails = () => {
  const { data, setData } = useContext(ToggleContext)
  if (data.openCart) {

    return (
      <div className="h-[80vh] bg-white w-[360px] shadow-2xl duration-500 transition-transform rounded-sm overflow-y-scroll">
        <div className="flex items-center justify-between p-1 bg-teal-700 text-white rounded-t-sm">
          <p className="text-xs">
            Free delivery above $999 order (outside Dhaka){" "}
          </p>
          <button onClick={() => setData(s => ({ ...s, openCart: false }))}>
            <CiSquareRemove size={35} />
          </button>
        </div>
        <p className="text-xs text-gray-700 px-1 mt-2">
          Items not Requiring Prescription (3){" "}
        </p>
        <div className="px-1 pb-20">
          {/* ************** cart list ************** */}

          <div>
            {[1, 3, 4].map((item) => (
              <div
                key={item}
                className="flex justify-start gap-2 w-full p-2 mt-2 shadow-sm rounded-md border">
                <Image
                  className="object-cover rounded-full w-[55px] h-[55px]"
                  src="https://previews.123rf.com/images/marushy/marushy2003/marushy200300448/142433063-a-young-girl-in-the-background-of-a-building-wears-a-face-mask-that-protects-against-the-spread-of.jpg"
                  alt=""
                  width={100}
                  height={100}
                />
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[12px]">
                      KN95 Face Mask 5 Layers Protection
                    </h3>
                    <p className="cursor-pointer hover:text-teal-600 mr-1">✖</p>
                  </div>
                  <div className="flex justify-between mt-1">
                    <div>
                      <p className="text-xs text-gray-600">Maccons Limited</p>
                      <p className="text-xs mt-1 text-gray-700">
                        <span className="text-teal-500 font-bold">1 * </span>{" "}
                        <span className="text-teal-500 font-bold">100</span> s
                        pack
                      </p>
                    </div>
                    <div>
                      <p className="text-sm">
                        <del className="text-xs text-gray-400">৳70</del>
                        <span className="ml-4 text-teal-600">৳63</span>
                      </p>
                      <select className="px-2 border w-full py-[2px] rounded-md cursor-pointer hover:border-teal-500 duration-300">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* ************** address list ************** */}




          {/* <ChangeAddress></ChangeAddress> */}




          <div className="border p-2 rounded-md mb-4">
            <p
              // onClick={() => setIsShowCouponInput(!isShowCouponInput)}
              className="underline text-sm cursor-pointer text-gray-700 hover:text-teal-600 duration-100 w-fit">
              Have a coupon code?
            </p>
            {(
              <form className="flex ">
                <div className="flex items-center outline-dotted mt-2 bg-teal-300 outline-teal-300 rounded-md pl-1">
                  <BiDotsVerticalRounded className="" size={25} color="teal" />
                  <input
                    placeholder="Enter Coupon Code"
                    className="outline-none bg-teal-300 placeholder:text-sm ml-1 mr-2"
                    type="text"
                  />
                  <button className="bg-teal-600 p-2 text-neutral-100 rounded-r-md text-sm tracking-wider hover:bg-teal-500">
                    Apply
                  </button>
                </div>
              </form>
            )}
            <div className="flex items-center mt-4 border-2 border-dotted p-2 border-teal-500 rounded-md bg-teal-500 bg-opacity-5">
              <Image
                src="https://i.ibb.co/MCc6r7k/taka.webp"
                alt=""
                width={20}
                height={20}
              />
              <p className="text-sm ml-1 text-teal-600">
                You are saving{" "}
                <span className="font-bold text-teal-600">৳ 44</span> in this
                order.
              </p>
            </div>
            <div className="mt-4 flex flex-col gap-y-1">
              <div className="flex text-neutral-700 items-center justify-between text-sm">
                <p>Subtotal</p>
                <p className=" text-teal-600 tracking-wide">৳ 230</p>
              </div>
              <div className="flex text-neutral-700 items-center justify-between text-sm">
                <p>Discount applied</p>
                <p className=" text-teal-600 tracking-wide">-৳ 44</p>
              </div>
              <div className="flex text-neutral-700 items-center justify-between text-sm">
                <p>Delivery charge</p>
                <p className=" text-teal-600 tracking-wide">৳ 68</p>
              </div>
              <hr className="mt-1" />
              <div className="flex text-neutral-700 items-center justify-between">
                <p className="font-bold text-sm text-teal-600">Amount Payable</p>
                <p className=" text-teal-600 tracking-wide font-bold">৳ 360</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 w-full bg-white py-3 border-t-2 border-t-teal-600">
          <div className="flex items-center justify-center">
            <p className="px-2 py-2 bg-teal-600 text-white rounded-s-md">৳ 360</p>
            <p
              onClick={() => window.my_modal_4.showModal()}
              className="uppercase ml-[1px] bg-teal-600 px-2 py-2 text-white rounded-e-md cursor-pointer">
              proceed to checkout
            </p>
          </div>
        </div>
        <CheckoutModal />
      </div>
    );
  }
};

export default AbsoluteCartDetails;
