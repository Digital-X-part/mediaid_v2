"use client"
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import FlashSellingProduct from "../product/FlashSellingProduct";

const FlashSale = () => {
  const FlashSaleDisplayProduct = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11];
  return (
    <div className="px-1 my-8">
      <div className="flex items-end justify-between">
        <div className="flex gap-2">
          <h4 className="font-extrabold text-2xl text-slate-700 tracking-wide">
            Flash <span className="text-[#FD3851]">Sale</span>
          </h4>
          <div className="flex items-end text-center gap-1 font-mono text-lg font-bold text-yellow-500 cursor-pointer">
            {/* <p>{time.days < 10 ? "0" + time.days : time.days}</p> <span>:</span>
            <p>{time.hours < 10 ? "0" + time.hours : time.hours}</p>{" "}
            <span>:</span>
            <p>{time.minutes < 10 ? "0" + time.minutes : time.minutes}</p>{" "}
            <span>:</span>
            <p>{time.seconds < 10 ? "0" + time.seconds : time.seconds}</p> */}
          </div>
        </div>
        <p className="text-sm tracking-wide mr-1">View All</p>
      </div>

      <Swiper
        // breakpoints={{
        //   // when window width is >= 640px
        //   200: {
        //     slidesPerView: 2.5,
        //   },
        //   640: {
        //     slidesPerView: 4,
        //   },
        //   // when window width is >= 768px
        //   768: {
        //     slidesPerView: 6,
        //   },
        // }}
        slidesPerView={6}
        spaceBetween={10}
        className="mySwiper">
        {FlashSaleDisplayProduct.map((item, i) => (
          <SwiperSlide key={i}>
            <FlashSellingProduct item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FlashSale;
