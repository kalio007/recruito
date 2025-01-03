import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import video_thumbnail from "../assets/video_thumbnail.jpg";
import Customers from "../assets/Customers.png";
import FeaturedProduct from "../assets/FeaturedProduct.png";
import Image from "next/image";

export function HeroVideo() {
  return (
    <div className="relative px-4 sm:px-8 md:px-16 lg:px-40">
      {/* Featured Product Image - Left Side */}
      <div className="hidden md:block">
        <Image
          src={FeaturedProduct}
          alt="Featured Product"
          className="
            absolute 
            left-8 lg:left-10 
            bottom-[-75px] lg:bottom-[-100px]
            -translate-y-1/2
            w-52 lg:w-64
            z-10
          "
        />
      </div>

      {/* Video Dialog Container */}
      <div className="relative w-full">
        <HeroVideoDialog
          className="dark:hidden block w-full"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc={video_thumbnail.src}
          thumbnailAlt="Hero Video"
        />
      </div>

      {/* Customers Image - Right Side */}
      <div className="hidden md:block">
        <Image
          src={Customers}
          alt="Customers"
          className="
            absolute 
            right-8 lg:right-10
            top-1/2 
            -translate-y-1/2
            w-52 lg:w-64
            z-10
          "
        />
      </div>
    </div>
  );
}
