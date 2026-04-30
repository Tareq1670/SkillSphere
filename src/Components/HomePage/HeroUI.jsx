"use client";
import { Button } from "@heroui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const HeroUI = ({ banner }) => {
    return (
        <div className="my-5 rounded-2xl overflow-hidden shadow-2xl mx-1 md:mx-2">
            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                loop={true}
                className="h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full"
            >
                {banner.map((data) => (
                    <SwiperSlide key={data.id}>
                        <div
                            className="relative h-full w-full bg-cover bg-center bg-no-repeat transition-transform duration-700"
                            style={{ backgroundImage: `url("${data.image}")` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex items-center">
                                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                                    <div className="max-w-4xl space-y-3 md:space-y-6">
                                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow-lg">
                                            {data.title}
                                        </h2>

                                        <p className="text-gray-200 text-base text-[14px] md:text-[16px]  max-w-lg leading-relaxed backdrop-blur-sm bg-white/5 p-2 md:p-4 rounded-lg border-l-4 border-primary">
                                            {data.description}
                                        </p>

                                        <div className="">
                                            <Button
                                                size="lg"
                                                radius="full"
                                                
                                                className="text-white shadow-lg px-4 md:px-6 lg:px-8 py-3 md:py-5 lg:py-6 text-[16px] text-lg font-semibold hover:translate-y-[-2px] transition-transform"
                                                style={{ backgroundColor: data.button_color }}
                                            >
                                                {data.button_text}
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroUI;
