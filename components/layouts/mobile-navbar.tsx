"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface MobileNavbarProps {
  navItems: { label: string; href: string; active: boolean }[];
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({
  navItems,
  isOpen,
  setIsOpen,
}) => {
  return (
    <div
      className={`md:hidden ${
        isOpen ? "block" : "hidden"
      } absolute top-full left-0 w-full bg-white rounded-lg shadow-md mt-2`}
    >
      <ul className="flex flex-col gap-4 p-4">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block ${
                item.active ? "text-blue-600 font-medium" : "text-gray-600"
              } hover:text-blue-700 transition-colors`}
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          </li>
        ))}
        <Button className="bg-gradient-to-r from-teal-400 to-blue-500 text-white rounded-full px-6 hover:opacity-90 transition-opacity md:hidden">
          Contact Us
        </Button>
      </ul>
    </div>
  );
};

export default MobileNavbar;
