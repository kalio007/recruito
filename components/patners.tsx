"use client";

import Marquee from "@/components/ui/marquee";
import Image from "next/image";

const companies = [
  {
    name: "GSK",
    logo: "/path-to-gsk-logo.svg", // Placeholder for GSK logo
  },
  {
    name: "Ogilvy",
    logo: "/path-to-ogilvy-logo.svg", // Placeholder for Ogilvy logo
  },
  {
    name: "Intys",
    logo: "/path-to-intys-logo.svg", // Placeholder for Intys logo
  },
  {
    name: "LinkedIn",
    logo: "../assests/linkedin.svg", // Placeholder for LinkedIn logo
  },
];

const CompanyLogo = ({ logo, name }: { logo: string; name: string }) => {
  return (
    <div className="mx-16 flex items-center justify-center">
      <Image
        src={logo}
        alt={`${name} logo`}
        width={120}
        height={40}
        className="h-8 w-auto object-contain"
      />
    </div>
  );
};

export function Patners() {
  return (
    <div className="mx-40">
      <div className="w-full py-12">
        <h2 className="text-center text-sm font-medium mb-12 text-gray-700">
          Trusted By The World Leading Organisations
        </h2>
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background">
          <Marquee pauseOnHover className="[--duration:30s]">
            {companies.map((company) => (
              <CompanyLogo key={company.name} {...company} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background" />
        </div>
      </div>
    </div>
  );
}
