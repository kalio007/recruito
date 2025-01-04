"use client";

import React from "react";
import Image from "next/image";

import Ryan from "../assets/Ryan.png";
import Alex from "../assets/Alex.png";
import Rivera from "../assets/Rivera.png";
import Sparks from "../assets/sparks.png";
import Background from "./background";
import FinalShortlistSection from "./features/final-shortlist-section";
import AIVideoInterviewsSection from "./features/ai-video-interviews-section";
import OnlineAssessmentSection from "./features/online-assessment-section";
import ResumeScreeningSection from "./features/resume-screening-section";
import CandidateSourcingSection from "./features/canidate-sourcing-section";

interface FeaturesProps {
  id?: string;
}

export default function Features({ id }: FeaturesProps) {
  const candidates = [
    {
      image: Ryan,
      name: "Ryan",
      title: "Senior Graphic Designer",
      skills: ["Creative Suite", "Marketing", "canva"],
      isVerified: false,
    },
    {
      image: Alex,
      name: "Alex Martin",
      title: "Senior Graphic Designer",
      skills: ["Adobe Creative Suite", "Figma", "After Effects"],
      isVerified: true,
    },
    {
      image: Rivera,
      name: "Rivera",
      title: "Senior Graphic Designer",
      skills: ["Creative Suite", "Illustrator", "canva"],
      isVerified: false,
    },
  ];

  return (
    <div
      id={id}
      className="relative px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24 bg-white"
    >
      <Background />
      <div className="max-w-6xl mx-auto relative">
        <div className="hidden sm:block absolute top-0 right-0">
          <Image src={Sparks} alt="image" width={50} height={50} />
        </div>
        <div className="hidden sm:block absolute top-40 left-0">
          <Image src={Sparks} alt="image" width={50} height={50} />
        </div>
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-gray-300 text-xs sm:text-sm font-medium text-[#004CD3] mb-3 sm:mb-4">
            Features
          </div>
        </div>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium text-center tracking-tight mb-8 sm:mb-16 px-4">
          Streamline your recruitment with{" "}
          <span className="block sm:inline">our advanced features</span>
        </h2>

        <div className="space-y-6 sm:space-y-2 md:space-y-2 bg-white">
          <div className="grid grid-cols-1 gap-6 sm:gap-16 md:gap-2">
            {/* Candidate Sourcing Section */}
            <CandidateSourcingSection candidates={candidates} />
            {/* Resume Screening Section */}
            <ResumeScreeningSection />
            {/* Online Assessment Section */}
            <OnlineAssessmentSection />
            {/* AI Video Interviews Section */}
            <AIVideoInterviewsSection />
            {/* Final Shortlist Section */}
            <FinalShortlistSection />
          </div>
        </div>
      </div>
    </div>
  );
}
