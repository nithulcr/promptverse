"use client";
import React from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

interface Card {
  id: number;
  title: string;
  description: string;
  tags: string[];
}

const ScrollCards: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const cards: Card[] = [
    {
      id: 1,
      title: "Enhance Your Projects with Ultra-Realistic AI Voices",
      description:
        "Create engaging voice content with unique AI Voices perfect for your audience. Generate conversational, long-form, or short-form voice content with consistent quality and performance.",
      tags: [
        "Train voice models",
        "Text-to-speech",
        "AI voice generation",
        "AI music production",
      ],
    },
    // {
    //   id: 2,
    //   title: "Bring Music to Life with AI Sound Design",
    //   description:
    //     "Use AI to craft immersive soundscapes and dynamic soundtracks for your creative projects. Blend voices, instruments, and effects effortlessly.",
    //   tags: ["AI composition", "Sound mixing", "Voice blending", "Dynamic mastering"],
    // },
    // {
    //   id: 3,
    //   title: "Transform Text into Lifelike Audio",
    //   description:
    //     "Instantly generate high-quality voiceovers from text using state-of-the-art AI synthesis models. Ideal for podcasts, videos, and e-learning.",
    //   tags: ["Real-time voices", "Narration", "Podcast creation", "Speech enhancement"],
    // },
    // {
    //   id: 4,
    //   title: "Create Natural Conversations with AI Dialogue",
    //   description:
    //     "Simulate authentic dialogues for training, entertainment, and storytelling. Customize tone, emotion, and delivery to match your context.",
    //   tags: ["Dialogue design", "Character voices", "Script automation", "Speech cloning"],
    // },
  ];

  return (
    <>
      {/* Header Section */}
      <section className="w-full bg-black text-white flex flex-col items-center justify-center px-6 md:px-[200px] pt-[124px] pb-16 text-center">
        <h1 className="font-normal text-[42px] md:text-[58px] leading-[120%] mb-[28px]">
          Generate Audio and Music
        </h1>
        <p className="text-[#FFFFFF99] text-base md:text-lg leading-relaxed max-w-3xl">
          Discover endless creativity with Promptverse. Generate diverse content
          effortlessly using prompts. Stay updated with real-time topics,
          actionable tasks, and relevant insights — all in one space.
        </p>
      </section>

      <section className="w-full bg-black  items-center justify-center cmpad mb-40">
        <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl items-stretch">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between text-left">
            {/* Top part — Heading + Description */}
            <div>
              <h2 className="font-medium text-[36px] leading-[120%] tracking-[0] text-white">
                Enhance Your Projects with Ultra-Realistic AI Voices
              </h2>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Generate conversational, long-form, or short-form voice content
                with consistent quality and performances.
              </p>
            </div>

            {/* Bottom part — Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
              ].map((tag, i) => (
                <button
                  key={i}
                  className="group bg-black relative flex items-center justify-center gap-2 px-[34px] py-[15px] rounded-[50px] border border-white text-white text-lg font-medium font-poppins overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-h-[610px] h-full overflow-hidden rounded-xl flex">
            <img
              src="/icons/audioImage.jpg"
              alt="AI Voice Preview"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                <img src="icons/icon1.svg" alt="Play Icon" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
         <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl items-stretch mt-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between text-left">
            {/* Top part — Heading + Description */}
            <div>
              <h2 className="font-medium text-[36px] leading-[120%] tracking-[0] text-white">
                Enhance Your Projects with Ultra-Realistic AI Voices
              </h2>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Generate conversational, long-form, or short-form voice content
                with consistent quality and performances.
              </p>
            </div>

            {/* Bottom part — Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
              ].map((tag, i) => (
                <button
                  key={i}
                  className="group bg-black relative flex items-center justify-center gap-2 px-[34px] py-[15px] rounded-[50px] border border-white text-white text-lg font-medium font-poppins overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-h-[610px] h-full overflow-hidden rounded-xl flex">
            <img
              src="/icons/audioImage.jpg"
              alt="AI Voice Preview"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                <img src="icons/icon1.svg" alt="Play Icon" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
         <div className="w-full bg-[#0E0E0E] grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 p-[24px] sm:p-[32px] md:px-[48px] md:py-[48px] rounded-2xl items-stretch mt-8">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-between text-left">
            {/* Top part — Heading + Description */}
            <div>
              <h2 className="font-medium text-[36px] leading-[120%] tracking-[0] text-white">
                Enhance Your Projects with Ultra-Realistic AI Voices
              </h2>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Create engaging voice content with unique AI Voices perfect for
                your audience.
              </p>
              <p className="font-light text-[18px] leading-[28px] text-white/60 mt-6">
                Generate conversational, long-form, or short-form voice content
                with consistent quality and performances.
              </p>
            </div>

            {/* Bottom part — Buttons */}
            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Train voice models",
                "Text-to-speech",
                "AI voice generation",
                "AI music production",
              ].map((tag, i) => (
                <button
                  key={i}
                  className="group bg-black relative flex items-center justify-center gap-2 px-[34px] py-[15px] rounded-[50px] border border-white text-white text-lg font-medium font-poppins overflow-hidden transition-all duration-300 hover:bg-white hover:text-black"
                >
                  <span>{tag}</span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative w-full max-h-[610px] h-full overflow-hidden rounded-xl flex">
            <img
              src="/icons/audioImage.jpg"
              alt="AI Voice Preview"
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full backdrop-blur-md transition-all duration-300">
                <img src="/icons/icon1.svg" alt="Play Icon" width={28} height={28} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ScrollCards;
