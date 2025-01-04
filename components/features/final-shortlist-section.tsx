"use client";

import React from "react";
import Image from "next/image";
import Grid from "@/assets/top-grid.png";
import Ryan from "@/assets/Ryan.png";
import Alex from "@/assets/Alex.png";
import Rivera from "@/assets/Rivera.png";
import { cn } from "@/lib/utils";

interface Candidate {
  name: string;
  rank: string;
  score: string;
}

export default function FinalShortlistSection() {
  const candidates = [
    { image: Alex, name: "Alex Martin", rank: "#1", score: "95%" },
    { image: Rivera, name: "Emma Rivera", rank: "#2", score: "89%" },
    { image: Ryan, name: "Ryan Lee", rank: "#3", score: "88%" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
      <div className="flex flex-col justify-center p-2 sm:p-6">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
          Final Shortlist for the Line Manager
        </h3>
        <p className="text-gray-600 text-base sm:text-lg">
          Recruito presents a curated list of the top performers, complete with
          interview recordings and evaluations, so you can make a swift,
          confident hiring decision.
        </p>
      </div>
      <div className="relative h-[300px] sm:h-[400px] flex items-center bg-white border-[#848EA0]/20 border rounded-2xl">
        <div className="hidden sm:block absolute top-0 right-0">
          <Image
            src={Grid}
            alt="image"
            width={150}
            height={75}
            className="w-32 sm:w-48 md:w-auto"
          />
        </div>
        <div className="space-y-6  md:space-y-10 max-w-md md:w-full mx-auto w-full px-4 sm:px-6">
          {candidates.map((candidate, index) => (
            <CandidateListItem
              key={candidate.name}
              candidate={candidate}
              image={candidate.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

interface CandidateListItemProps {
  candidate: Candidate;
  image: any;
  index: number;
}

const CandidateListItem = ({
  candidate,
  image,
  index,
}: CandidateListItemProps) => (
  <div
    className={cn(
      "flex justify-center bg-white sm:gap-3 gap-10 w-full transition-transform duration-300 ease-in-out cursor-pointer h-full my-2 max-h-[424px] md:max-h-[500px]",
      index === 0 && "-rotate-[2deg]",
      index === 1 && "rotate-[1deg]",
      index === 2 && "rotate-[2deg]"
    )}
  >
    <div className="w-full space-x-2 h-full flex items-center  relative transform transition-all hover:rotate-0 hover:-translate-y-1">
      <Image
        src={image}
        alt={candidate.name}
        width={40}
        height={40}
        className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
      />
      <div className="flex w-full border border-[#848EA0]/20 items-center justify-between h-10 sm:h-12 md:h-16 rounded-xl shadow-2xl p-2 sm:p-4  relative transform transition-all hover:rotate-0 hover:-translate-y-1 hover:bg-white">
        <span className="text-gray-600 text-sm sm:text-lg">
          {candidate.name}
        </span>
        <div className="flex items-center gap-2 sm:gap-4">
          <span className="text-gray-500 text-sm sm:text-base">
            {candidate.rank}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-xs sm:text-sm text-green-600">
                {candidate.score}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
