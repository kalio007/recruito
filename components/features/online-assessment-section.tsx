"use client";

import React from "react";
import Image from "next/image";
import online from "@/assets/online.png";

export default function OnlineAssessmentSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
      <div className="flex flex-col justify-center p-2 sm:p-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
          Online Assessment
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Candidates complete a quick skill or behavioral test to validate their
          capabilities. This process is seamlessly integrated and fully
          automated.
        </p>
      </div>

      <div className="h-[300px] sm:h-[400px] flex items-center justify-center border-[#848EA0]/20 border rounded-2xl pt-4">
        <div className="w-full h-full">
          <Image
            src={online}
            alt="Online Assessment"
            width={400}
            height={400}
            className="object-contain scale-75 sm:scale-100"
            priority
          />
        </div>
      </div>
    </div>
  );
}
