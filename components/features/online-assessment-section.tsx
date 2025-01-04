"use client";

import React from "react";
import { Check } from "lucide-react";

export default function OnlineAssessmentSection() {
  const assessmentItems = [
    { id: 1, text: "Creative Design Skills Test", completed: true },
    { id: 2, text: "UX/UI Design Challenge", completed: true },
    { id: 3, text: "Problem Solving Task", completed: true },
    { id: 4, text: "Trends Awareness Quiz Test", completed: false },
  ];

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

      <div className="min-h-[300px] sm:h-[400px] flex items-center justify-center border-[#848EA0]/20 border rounded-2xl p-4 sm:p-10">
        <div className="w-full h-full border-[#848EA0]/20 border rounded-2xl p-3 sm:p-4 shadow-md">
          <div className="flex flex-col gap-3 sm:gap-4 h-full justify-center">
            {assessmentItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 p-3 sm:p-4 bg-white rounded-xl border border-[#E6E8EC] shadow-sm"
              >
                <div
                  className={`flex-shrink-0 ${
                    item.completed ? "bg-[#5ED028]" : "border border-gray-200"
                  } w-5 h-5 sm:w-6 sm:h-6 rounded-md flex items-center justify-center`}
                >
                  {item.completed && (
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  )}
                </div>
                <span
                  className={`text-sm sm:text-base md:text-lg ${
                    item.completed
                      ? "text-gray-400 line-through"
                      : "text-gray-900"
                  }`}
                >
                  {item.id}- {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
