"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    id: 2,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
  {
    id: 3,
    name: "Alex Martin",
    role: "Company, HR",
    content:
      "Recruito has transformed our hiring process! We save countless hours each week The quality of candidates has significantly improved since we started using Recruito",
  },
];

const TestimonialsSection = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="py-16 bg-white overflow-hidden mb-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-blue-600 mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            Don't just take our word for it—see
            <br />
            what our clients say about Recruito AI.
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
            className="w-[150%] -ml-[25%]"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-4 basis-1/3">
                  <Card className="border-0 shadow-sm mx-4">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 mb-4">
                        <img
                          src="/api/placeholder/40/40"
                          alt={testimonial.name}
                          className="w-10 h-10 rounded-full"
                        />
                        <div>
                          <h3 className="font-semibold">{testimonial.name}</h3>
                          <p className="text-gray-500 text-sm">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700">{testimonial.content}</p>
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
              onClick={() => (api as any)?.scrollTo(index)} // Add 'as any' to cast 'api' to any type
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
