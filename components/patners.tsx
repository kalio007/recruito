"use client";

import Marquee from "@/components/ui/marquee";
import Image from "next/image";
import linkedIn from "../assets/LinkedIn.png";
import ogilvy from "../assets/Ogilvy.png";
import intys from "../assets/Intys.png";

const companies = [
  {
    name: "Ogilvy",
    logo: ogilvy,
  },
  {
    name: "Intys",
    logo: intys,
  },
  {
    name: "LinkedIn",
    logo: linkedIn,
  },
];

const CompanyLogo = ({ logo, name }: { logo: any; name: string }) => {
  return (
    <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-16 flex items-center justify-center">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={40}
        className="h-6 sm:h-7 md:h-8 w-auto object-contain"
      />
    </div>
  );
};

export default function Partners() {
  return (
    <div className="mx-4 sm:mx-8 md:mx-16 lg:mx-40 mt-2 sm:mt-4">
      <div className="w-full py-4 sm:py-6 md:py-12">
        <h2 className="text-center text-xs sm:text-sm font-medium mb-6 sm:mb-8 md:mb-12 text-gray-700">
          Trusted By The World Leading Organisations
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee
            pauseOnHover
            className="[--duration:20s] sm:[--duration:25s] md:[--duration:30s]"
          >
            {companies.map((company) => (
              <CompanyLogo key={company.name} {...company} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 sm:w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 sm:w-1/3 bg-gradient-to-l from-background" />
        </div>
      </div>
    </div>
  );
}
