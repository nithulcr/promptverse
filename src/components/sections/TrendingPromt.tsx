import React from "react";
import promtImg from "@/assets/images/promt.png";

const TrendingPromt: React.FC = () => {
  return (
    <>
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-[350px] py-16 pt-[124px]">
        <div className="max-w-3xl text-center mb-12">
          <h1 className="font-normal text-[58px] leading-[120%] tracking-[0] text-center text-white mb-[28px]">
            See Trending Prompts
          </h1>
          <p className="text-[#FFFFFF99] text-base md:text-base leading-relaxed text-opacity-60 mb-8">
            Discover endless creativity with Promptverse. Generate diverse
            content effortlessly using prompts. Stay updated with real-time
            topics, actionable tasks, and relevant insights from any document or
            URL — all in one space. Smarter design. Content more efficiently.
          </p>
          <div className="flex justify-center space-x-4">
            <button className="group bg-black relative flex items-center justify-center gap-2 px-[34px] py-[15px] rounded-[50px] border border-white  text-white text-lg font-medium font-poppins overflow-hidden transition-all duration-300 hover:bg-white hover:text-black">
              <span className="inline-block ">Start Generating</span>

              {/* Icon (stays visible) */}
              <img
                src="/icons/mdi_wand.svg"
                alt="magic wand"
                width={20}
                height={20}
                className="transition-transform duration-300 group-hover:rotate-12"
              />
            </button>
            <button className="bg-[#FFFFFF] text-[#000000] font-poppins font-medium text-[16px] leading-[100%] tracking-[0] text-center px-[34px] py-[15px] rounded-[50px] hover:bg-gray-200 transition-all duration-300">
              Download
            </button>
          </div>
        </div>
      </section>
      {/* <section className="relative w-full overflow-hidden bg-black cmpad">
        <img
          src={promtImg}
          alt="Promptverse preview"
          className="w-full h-auto object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none"></div>
      </section> */}
      <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-black cmpad">
  <img
    src="/images/promt.png"
    alt="Promptverse preview"
    className="w-full  object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-transparent pointer-events-none"></div>
</section>
    </>
  );
};

export default TrendingPromt;
