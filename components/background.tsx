import Image from "next/image";
import BottomGrid from "../assets/feature-bottom-grid.png";

const Background = () => {
  return (
    <>
      <div className="absolute bottom-0 right-0">
        <Image src={BottomGrid} alt="image" width={500} height={200} />
      </div>
      <div className="absolute bottom-1/2 left-0">
        <Image src={BottomGrid} alt="image" width={500} height={200} />
      </div>
      <div className="absolute bottom-1/2 right-0">
        <Image src={BottomGrid} alt="image" width={500} height={200} />
      </div>
      <div className="absolute bottom-0 left-0">
        <Image src={BottomGrid} alt="image" width={500} height={200} />
      </div>
    </>
  );
};

export default Background;
