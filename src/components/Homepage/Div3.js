import Image from "next/image";
import img from "@/assets/demo.jpeg";

export default function Div3() {
  
  const menuItems = [
    {
      id: 1,
      image: img,
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean consectetur.",
    },
    {
      id: 2,
      image: img,
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean consectetur.",
    },
    {
      id: 3,
      image: img,
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean consectetur.",
    },
    {
      id: 4,
      image: img,
      description:
        "Lorem ipsum dolor sit amet consectetur. Aenean consectetur.",
    },
  ];

  return (
    <div className="mt-12 flex justify-around py-10 bg-gray-100">
      {menuItems.map((item) => (
        <div
          key={item.id}
          className="relative w-64  rounded-xl shadow-lg p-4 m-4 text-center border border-black"
        >
          <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              src={item.image}
              alt="Dish"
              className="object-cover bg-black w-full h-full"
              width={128}
              height={128}
            />
          </div>
          <div className="mt-12">
            {item.description && (
              <p className="text-gray-600 text-sm mb-4 px-4">
                {item.description}
              </p>
            )}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full hover:bg-orange-600 transition duration-300">
              Order
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
