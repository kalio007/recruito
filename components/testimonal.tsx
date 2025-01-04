"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Ryan from "../assets/Ryan.png";
import Alex from "../assets/Alex.png";
import Rivera from "../assets/Rivera.png";

const testimonials = [
  {
    id: 1,
    image: Alex,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    id: 2,
    image: Ryan,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    id: 3,
    image: Rivera,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    id: 4,
    image: Rivera,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api?.on("select", () => {
      setCurrent(api?.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-8 md:py-16 bg-white overflow-hidden mb-6 md:mb-10 md:mx-40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-12 rounded-full border border-gray-300 text-xs md:text-sm font-medium text-[#004CD3]">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-4 px-2">
            <span className="block md:inline">
              Don&apos;t just take our word for it—
            </span>
            <span className="block md:inline">
              see what our clients say about Recruito AI.
            </span>
          </h2>
        </div>

        <div className="relative">
          <Carousel
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-full md:w-[150%] md:-ml-[25%]"
          >
            <CarouselContent className="-ml-4 gap-3">
              {testimonials.map((testimonial) => (
                <CarouselItem
                  key={testimonial.id}
                  className="p-2 md:p-4 basis-full md:basis-1/3"
                >
                  <Card className="border-0 shadow-sm p-2 border-gray-300">
                    <CardContent className="p-2">
                      <div className="flex items-center gap-3 md:gap-4 mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold text-sm md:text-base">
                            {testimonial.name}
                          </h3>
                          <p className="text-gray-500 text-xs md:text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                        <p className="text-gray-700 text-sm md:text-base">
                          {testimonial.content}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex justify-center gap-2 mt-6 md:mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => api?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? "bg-blue-600 w-6 md:w-8" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
