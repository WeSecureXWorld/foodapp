"use client";
import Image from "next/image";
import img1 from "@/assets/food0.png";
import { useRouter } from "next/navigation";
export default function Div1() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/");
  };
  return (
    <>
      <div className="relative inline-block">
        <Image src={img1} alt="Food Image" />
        <button
          onClick={handleClick}
          className="absolute bottom-16 right-16 bg-[#FF7B2A] text-white px-8 py-2 rounded-lg"
        >
          SCAN NOW
        </button>
      </div>
    </>
  );
}
