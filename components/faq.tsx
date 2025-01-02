import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const accordionData = [
    {
      title: "What is an AI Agent?",
      content: (
        <div className="space-y-4">
          <p>
            An AI agent is a software system that understands language, learns
            from data, and takes actions automatically to achieve specific
            goals. In the hiring world, an AI agent can review resumes, interact
            with candidates, and provide recommendations, all without manual
            oversight. Key capabilities include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            {[
              "Natural Language Processing to interpret resumes and candidate responses",
              "Adaptive Learning to improve accuracy and efficiency over time",
              "Task Automation to handle repetitive or time-consuming steps",
              "Data-Driven Insights for better predictions and decisions",
            ].map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ),
    },
    {
      title: "What are the Benefits of Using Recruito's AI Agent?",
      content: "Insert your content for benefits here.",
    },
    {
      title: "Next Steps?",
      content: "Insert your content for next steps here.",
    },
  ];

  return (
    <div className="relative min-h-fit w-full py-24 mb-8">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-white pointer-events-none" />
      <div className="absolute inset-0 bg-dot-black/[0.1]  bg-[size:20px_20px] p-6" />
      {/* Content container */}
      <div className="relative container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1.5 rounded-full border border-gray-300 text-sm font-medium text-[#004CD3] mb-4">
            FAQs
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100">
          <Accordion type="single" collapsible className="divide-y">
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="px-6 py-0 first:pt-2 last:pb-2"
              >
                <AccordionTrigger className="py-4 text-lg font-medium hover:no-underline">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="pb-4">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
