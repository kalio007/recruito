import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import video_thumbnail from "../assets/video_thumbnail.jpg";
import Customers from "../assets/Customers.png";
import FeaturedProduct from "../assets/FeaturedProduct.png";
import Image from "next/image";

export function HeroVideo() {
  return (
    <div className="relative px-40 ">
      {/* <div> */}
      <Image
        src={FeaturedProduct}
        alt="Cutomer"
        className="absolute left-10 bottom-[-100px] -translate-y-1/2   w-64 z-10"
      />
      <div className="">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
          thumbnailSrc={video_thumbnail.src}
          thumbnailAlt="Hero Video"
        />
      </div>

      <Image
        src={Customers}
        alt="Cutomer"
        className="absolute right-10 top-1/2 -translate-y-1/2 z-10 w-64"
      />
    </div>
  );
}
