import Image from "next/image";
import foodImage from "@/assets/food3.png";
import { FaStar } from "react-icons/fa";

export default function FoodCard() {
  const foodItems = [
    {
      title: "Cheeseburger",
      description: "Wendy's Burger",
      price: "200",
      originalPrice: "300",
      rating: "4.9",
      image: foodImage,
    },
    {
      title: "Pepperoni Pizza",
      description: "Domino's Pizza",
      price: "400",
      originalPrice: "500",
      rating: "4.8",
      image: foodImage,
    },
    {
      title: "Sushi",
      description: "Tokyo Sushi",
      price: "600",
      originalPrice: "800",
      rating: "4.7",
      image: foodImage,
    },
  ];
  return (
    <>
      <div className="p-8">
        <h1 className="text-4xl font-semibold">All Categories </h1>
      </div>
      <div className="px-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((foodItem, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-2xl p-4 flex items-center justify-between w-[400px]"
          >
            <div className="flex items-start">
              <div>
                <div className="w-6 h-6 border-2 border-green-600 flex items-center justify-center">
                  <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold mt-4">{foodItem.title}</h3>
                <p className="text-gray-500">{foodItem.description}</p>
                <div className="flex items-center mt-2">
                  <span className="text-gray-400 line-through mr-2">
                    ₹{foodItem.originalPrice}
                  </span>
                  <span className="text-black text-2xl font-bold">
                    ₹{foodItem.price}
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <span className="text-[#FF9633] mr-1">
                    <FaStar />
                  </span>
                  <span className="text-black">{foodItem.rating}</span>
                </div>
              </div>
            </div>
            <div className="w-32 h-32">
              <Image src={foodItem.image} alt={foodItem.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
