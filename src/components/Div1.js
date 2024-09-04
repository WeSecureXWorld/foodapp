import Image from "next/image";
import img1 from "@/assets/food0.png";

export default function Div1() {
  return (
    <>
      <div className="relative inline-block">
        <Image src={img1} alt="Food Image" />
        <button className="absolute bottom-16 right-16 bg-[#FF7B2A] text-white px-8 py-2 rounded-lg">
          SCAN NOW
        </button>
      </div>
    </>
  );
}
