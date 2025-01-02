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
    <section className="py-16 bg-white overflow-hidden mb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-12 rounded-full border border-gray-300 text-sm font-medium text-[#004CD3] ">
            Testimonials
          </div>
          <h2 className="text-5xl font-medium tracking-tight mb-4">
            Don&apos;t just take our word for it—see
            <br />
            what our clients say about Recruito AI.
          </h2>
        </div>

        <div className="relative">
          <Carousel
            setApi={(api: any) => setApi(api)}
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            className="w-[150%] -ml-[25%] "
          >
            <CarouselContent className="-ml-4 gap-3 border-r-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="p-4 basis-1/3 ">
                  <Card className="border-0 shadow-sm p-2  border border-gray-300">
                    <CardContent className="p-2">
                      <div className="flex items-center gap-4 mb-4">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={40}
                          height={40}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-500 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="bg-gray-50 p-4">
                        <p className="text-gray-700">{testimonial.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              type="button" // Add the type attribute with the value "button"
              onClick={() => (api as any)?.scrollTo(index as any)} // Add 'as any' to cast 'index' to any type
              className={`w-2 h-2 rounded-full transition-all ${
                current === index ? "bg-blue-600 w-8" : "bg-gray-300"
              }`}
              title={`Testimonial ${index + 1}`} // Add the title attribute with a descriptive text
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
