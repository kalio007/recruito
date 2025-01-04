// features/candidate-sourcing-section.js
import React from "react";
import Image from "next/image";
import Grid from "@/assets/top-grid.png";
import { BadgeCheck } from "lucide-react";

const CandidateCard = ({ image, name, title, skills, isVerified = false }) => (
  <div className="w-[180px] sm:w-[240px] bg-white border border-[#848EA0]/20 rounded-2xl shadow-md py-3 sm:py-4 px-0 relative transform transition-all hover:scale-105">
    <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
      {isVerified && (
        <div className="absolute left-2 top-2">
          <BadgeCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
        </div>
      )}
      <Image
        src={image}
        alt={name}
        width={48}
        height={48}
        className="rounded-full mb-2 sm:mb-3 w-12 h-12 sm:w-[60px] sm:h-[60px]"
      />
      <h4 className="font-semibold text-base sm:text-lg">{name}</h4>
      <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">{title}</p>
      <div className="flex flex-wrap gap-1 justify-center px-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-1.5 sm:px-2 py-0.5 sm:py-1 bg-gray-50 text-gray-600 text-[10px] sm:text-xs rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);
const CandidateSourcingSection = ({ candidates }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
      <div className="flex flex-col justify-center p-2 sm:p-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
          Candidate Sourcing & Job Posting
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Recruito automatically posts your position or actively hunts top
          candidates across multiple platforms. No human intervention needed.
        </p>
      </div>
      <div className="relative h-[300px] sm:h-[400px] flex items-center justify-center border-[#848EA0]/20 border rounded-2xl p-4">
        <div className="absolute top-0 right-0">
          <Image
            src={Grid}
            alt="image"
            width={150}
            height={75}
            className="w-32 sm:w-48 md:w-auto"
          />
        </div>
        <div className="flex justify-center items-center gap-2 relative w-full scale-75 sm:scale-100">
          {candidates.map((candidate, index) => (
            <div
              key={candidate.name}
              className={`absolute transition-all duration-300 ${
                index === 0
                  ? "-translate-x-16 sm:-translate-x-24"
                  : index === 1
                  ? "z-10"
                  : "translate-x-16 sm:translate-x-24"
              }`}
            >
              <CandidateCard {...candidate} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CandidateSourcingSection;
