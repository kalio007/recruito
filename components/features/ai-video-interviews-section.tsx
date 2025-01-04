"use client";

import React from "react";
import Image from "next/image";
import Grid from "@/assets/top-grid.png";
import image from "@/assets/image.png";
import interview_overlay from "@/assets/interview_overlay.png";

export default function AIVideoInterviewsSection() {
  return (
    <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center ">
      <div className="hidden sm:block absolute top-0 left-0">
        <Image
          src={Grid}
          alt="image"
          width={150}
          height={75}
          className="w-32 sm:w-48 md:w-auto"
        />
      </div>

      <div className="order-2 md:order-1 h-[300px] sm:h-[400px] flex items-center justify-center relative border-[#848EA0]/20 border rounded-2xl">
        <div className="rounded-xl relative max-w-[460px]">
          <Image
            src={image}
            width={400}
            height={400}
            alt="Video Interview"
            className=" object-contain scale-75 sm:scale-100 border rounded-2xl [filter:drop-shadow(-4px_2px_10px_rgba(0,0,0,0.1))_drop-shadow(-16px_9px_18px_rgba(0,0,0,0.09))] max-w-full max-h-full"
          />
        </div>

        <Image
          src={interview_overlay}
          alt="Customer"
          className="absolute  right-0 sm:right-5 top-1/2 -translate-y-1/2 md:translate-x-[20px] z-10 w-16 sm:w-32 md:w-40"
        />
      </div>

      <div className="order-1 md:order-2 flex flex-col justify-center p-2 sm:p-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
          AI Video Interviews
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          An AI-driven virtual interviewer conducts dynamic, adaptive
          interviews, capturing both technical insights and soft skills.
          Everything is entirely hands-free.
        </p>
      </div>
    </div>
  );
}
