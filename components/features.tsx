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

const DocumentCard = ({ color = "#22c55e" }) => (
  <div className="relative transform transition-all duration-300 hover:-translate-y-1">
    <div className="bg-white rounded-lg shadow-md p-4 mb-3">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-lg bg-gray-50">
          <File className="w-5 h-5" style={{ color }} />
        </div>
        <div className="flex-1">
          <div className="h-2 bg-gray-200 rounded-full w-3/4 mb-2" />
          <div className="h-2 bg-gray-100 rounded-full w-1/2" />
        </div>
      </div>
    </div>
  </div>
);

const CandidateCard = ({
  image,
  name,
  title,
  skills,
  isVerified = false,
}: {
  image: any;
  name: string;
  title: string;
  skills: string[];
  isVerified?: boolean;
}) => (
  <div className="bg-white rounded-2xl shadow-md p-2 relative transform transition-all hover:scale-105">
    <div className="flex flex-col items-center text-center mb-4">
      {isVerified && (
        <div className="absolute left-2 top-2">
          <CheckCircle2 className="w-5 h-5 text-green-500" />
        </div>
      )}
      <Image
        src={image}
        alt={name}
        width={60}
        height={60}
        className="rounded-full mb-3"
      />
      <h4 className="font-semibold text-lg">{name}</h4>
      <p className="text-gray-600 text-sm mb-3">{title}</p>
      <div className="flex flex-wrap gap-1 justify-center">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full"
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
    <div className="px-6 py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16">
          Streamline your recruitment with our advanced features
        </h2>

        <div className="space-y-24">
          {/* Candidate Sourcing Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-5xl font-bold mb-6">
                Candidate Sourcing & Job Posting
              </h3>
              <p className="text-gray-600 text-lg">
                Recruito automatically posts your position or actively hunts top
                candidates across multiple platforms. No human intervention
                needed.
              </p>
            </div>
            <div className="relative">
              <div className="flex justify-center items-center gap-2 relative">
                {candidates.map((candidate, index) => (
                  <div
                    key={candidate.name}
                    className={`w-1/2  absolute transition-all duration-300 ${
                      index === 0
                        ? "-translate-x-40"
                        : index === 1
                        ? "z-10"
                        : "translate-x-40"
                    }`}
                  >
                    <CandidateCard {...candidate} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Screening Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="max-w-md mx-auto md:mx-0">
                <div className="relative space-y-4">
                  <DocumentCard color="#22c55e" />
                  <DocumentCard color="#eab308" />
                  <DocumentCard color="#94a3b8" />
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-5xl font-bold mb-4">
                Automated Resume Screening & Filtering
              </h3>
              <p className="text-gray-600 mb-8 text-lg">
                Our AI instantly sorts and prioritizes resumes, highlighting
                only the strongest matches and discarding unqualified
                applicants.
              </p>
            </div>
          </div>

          {/* Online Assessment Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-5xl font-bold mb-4">Online Assessment</h3>
              <p className="text-gray-600 text-lg">
                Candidates complete a quick skill or behavioral test to validate
                their capabilities. This process is seamlessly integrated and
                fully automated.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src={online}
                alt="Online Assessment"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* AI Video Interviews Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="order-2 md:order-1">
              <div className="relative">
                <Image
                  src={image}
                  alt="Video Interview"
                  width={400}
                  height={300}
                  className="rounded-lg"
                />
                <Image
                  src={interview_overlay}
                  alt="Cutomer"
                  className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-40 "
                />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-5xl font-bold mb-4">AI Video Interviews</h3>
              <p className="text-gray-600 text-lg">
                An AI-driven virtual interviewer conducts dynamic, adaptive
                interviews, capturing both technical insights and soft skills.
                Everything is entirely hands-free.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
