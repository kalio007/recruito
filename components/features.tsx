"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, File } from "lucide-react";
import image from "../assets/image.png";
import interview_overlay from "../assets/interview_overlay.png";
import online from "../assets/online.png";
import Ryan from "../assets/Ryan.png";
import Alex from "../assets/Alex.png";
import Rivera from "../assets/Rivera.png";
import Sparks from "../assets/sparks.png";
import Grid from "../assets/top-grid.png";
import Lens from "../assets/solar_magnifer-outline.png";
import Background from "./background";

const DocumentCard = ({ color = "#22c55e" }) => (
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

const CandidateCard = ({ image, name, title, skills, isVerified = false }) => (
  <div className="w-[180px] sm:w-[240px] bg-white border border-[#848EA0]/20 rounded-2xl shadow-md py-3 sm:py-4 px-0 relative transform transition-all hover:scale-105">
    <div className="flex flex-col items-center text-center mb-3 sm:mb-4">
      {isVerified && (
        <div className="absolute left-2 top-2">
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
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

export default function Features() {
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
    <div className="relative px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24 bg-white">
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

        <div className="space-y-12 sm:space-y-16 md:space-y-24 bg-white">
          <div className="grid grid-cols-1 gap-12 sm:gap-16 md:gap-24">
            {/* Candidate Sourcing Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="flex flex-col justify-center p-2 sm:p-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
                  Candidate Sourcing & Job Posting
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Recruito automatically posts your position or actively hunts
                  top candidates across multiple platforms. No human
                  intervention needed.
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

            {/* Resume Screening Section */}
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
                  Our AI instantly sorts and prioritizes resumes, highlighting
                  only the strongest matches and discarding unqualified
                  applicants.
                </p>
              </div>
            </div>

            {/* Online Assessment Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="flex flex-col justify-center p-2 sm:p-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
                  Online Assessment
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Candidates complete a quick skill or behavioral test to
                  validate their capabilities. This process is seamlessly
                  integrated and fully automated.
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

            {/* AI Video Interviews Section */}
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
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
                <Image
                  src={image}
                  alt="Video Interview"
                  width={400}
                  height={400}
                  className="object-contain scale-75 sm:scale-100"
                />
                <Image
                  src={interview_overlay}
                  alt="Customer"
                  className="absolute right-2 sm:right-5 top-1/2 -translate-y-1/2 z-10 w-24 sm:w-32 md:w-40"
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

            {/* Final Shortlist Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
              <div className="flex flex-col justify-center p-2 sm:p-6">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 sm:mb-6">
                  Final Shortlist for the Line Manager
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Recruito presents a curated list of the top performers,
                  complete with interview recordings and evaluations, so you can
                  make a swift, confident hiring decision.
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
                <div className="space-y-3 sm:space-y-4 max-w-md mx-auto w-full px-4 sm:px-6">
                  {[
                    { name: "Alex Martin", rank: "#1", score: "95%" },
                    { name: "Emma Rivera", rank: "#2", score: "89%" },
                    { name: "Ryan Lee", rank: "#3", score: "88%" },
                  ].map((candidate, index) => (
                    <div key={candidate.name}>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <Image
                          src={candidates[index].image}
                          alt={candidate.name}
                          width={40}
                          height={40}
                          className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
                        />
                        <div className="w-full rounded-2xl shadow-xl p-2 sm:p-4 flex items-center justify-between relative transform transition-all hover:-translate-y-1">
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
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
