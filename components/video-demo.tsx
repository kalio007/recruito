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
        className="absolute left-10 top-1/2 -translate-y-1/2   w-64 z-10"
      />
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc={video_thumbnail.src}
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
        thumbnailSrc={video_thumbnail.src}
        thumbnailAlt="Hero Video"
      />
      <Image
        src={Customers}
        alt="Cutomer"
        className="absolute right-10 top-1/3 -translate-y-1/2 z-10 w-64"
      />
    </div>
  );
}
