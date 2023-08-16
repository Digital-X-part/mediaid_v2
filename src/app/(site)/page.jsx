import BestSellingProducts from "@/components/pages/home/section/BestSellingProducts";
import FlashSale from "@/components/pages/home/section/FlashSale";
import PushProducts from "@/components/pages/home/section/PushProducts";
import Slider from "@/components/pages/home/slider/Slider";

export const metadata = {
    title: "Mediaid BD | Doctors Need",
    description:
        "An e-commerce build by the doctors, run by the doctors and serve to the doctors",
};

const HomePage = async () => {
    // const fetchData = await fetcher("https://dummyjson.com/products")

    return (
        <div>
            {/* all home page components will be place here */}
            <div className="md:flex gap-4">
                <div className="w-full md:w-[70%] ">
                    <Slider />
                    {/* <MiniSlider /> */}
                </div>
                <div className="w-full md:w-[28%] max-h-[400px]">
                    <PushProducts />
                </div>
            </div>
            <FlashSale />
            {/* <BrandAdv /> */}
            <BestSellingProducts />
            {/* <OurBrands /> */}
        </div>
    );
};

export default HomePage;


