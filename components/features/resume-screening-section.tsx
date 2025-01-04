"use client";

import React from "react";
import Image from "next/image";
import { File } from "lucide-react";
import Lens from "@/assets/solar_magnifer-outline.png";

interface DocumentCardProps {
  color?: string;
}

const DocumentCard = ({ color = "#22c55e" }: DocumentCardProps) => (
  <div className="relative transform transition-all duration-300 hover:-translate-y-1">
    <div className="bg-white rounded-lg shadow-md p-3 sm:p-4 mb-2 sm:mb-3">
      <div className="flex items-center gap-2 sm:gap-3">
        <div className="p-1.5 sm:p-2 rounded-lg bg-gray-50">
          <File className="w-4 h-4 sm:w-5 sm:h-5" style={{ color }} />
        </div>
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2" />
          <div className="h-2 bg-gray-100 rounded-full w-1/2" />
        </div>
      </div>
    </div>
  </div>
);

export default function ResumeScreeningSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
      <div className="relative order-2 md:order-1 h-[300px] sm:h-[400px] flex items-center border-[#848EA0]/20 border rounded-2xl">
        <div className="absolute bottom-0 right-0">
          <Image
            src={Lens}
            alt="image"
            width={150}
            height={150}
            className="w-32 sm:w-48 md:w-auto"
          />
        </div>
        <div className="w-full mx-auto md:mx-0 p-6 sm:p-10">
          <div className="relative space-y-3 sm:space-y-4 max-w-md">
            <DocumentCard color="#22c55e" />
            <DocumentCard color="#eab308" />
            <DocumentCard color="#94a3b8" />
          </div>
        </div>
      </div>

      <div className="order-1 md:order-2 flex flex-col justify-center p-2 sm:p-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
          Automated Resume Screening & Filtering
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Our AI instantly sorts and prioritizes resumes, highlighting only the
          strongest matches and discarding unqualified applicants.
        </p>
      </div>
    </div>
  );
}
