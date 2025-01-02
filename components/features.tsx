"use client";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Candidate Sourcing & Job Posting",
    description:
      "Recruito automatically posts your position or actively hunts top candidates across multiple platforms. No human intervention needed.",
    icon: "/assets/kalio.jpg",
    align: "left",
  },
  {
    title: "Automated Resume Screening & Filtering",
    description:
      "Our AI instantly sorts and prioritizes resumes, highlighting only the strongest matches and discarding unqualified applicants.",
    icon: "/assets/kalio.jpg",
    align: "right",
  },
  {
    title: "Online Assessment",
    description:
      "Candidates complete a quick skill or behavioral test to validate their capabilities. This process is seamlessly integrated and fully automated.",
    icon: "/assets/kalio.jpg",
    align: "left",
  },
  {
    title: "AI Video Interviews",
    description:
      "An AI-driven virtual interviewer conducts dynamic, adaptive interviews, capturing both technical insights and soft skills.",
    icon: "/assets/kalio.jpg",
    align: "right",
  },
  {
    title: "Final Shortlist for the Line Manager",
    description:
      "Recruito presents a curated list of the top performers, complete with interview recordings and evaluations, so you can make a swift, confident hiring decision.",
    icon: "/assets/kalio.jpg",
    align: "left",
  },
];

export default function Features() {
  return (
    <div className="px-6 py-12 md:py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold sm:text-xl lg:text-5xl mb-6">
          Streamline your recruitment with our advanced features
        </h2>
      </div>

      <div className="space-y-16 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex gap-8 items-center ${
              feature.align === "left" ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={feature.icon}
                alt={feature.title}
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
