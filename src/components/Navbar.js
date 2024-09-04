import { FiSearch, FiShoppingCart, FiLogIn } from "react-icons/fi";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav className="bg-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">LOGO</div>
        <div className="hidden md:flex space-x-16">
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            About Us
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Menu
          </Link>
          <Link href="#" className="text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <FiSearch
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
            size={20}
          />
          <FiShoppingCart
            className="text-gray-600 hover:text-gray-900 cursor-pointer"
            size={20}
          />
          <Link
            href="#"
            className="flex items-center border-2 border-orange-500 text-orange-500 px-4 py-1 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            <FiLogIn className="mr-2" size={18} />
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
