
import { FiSearch, FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <div className="w-full bg-white rounded-xl shadow-sm px-6 py-3 flex items-center justify-between">
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-lg w-105">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search tickets, customers..."
          className="bg-transparent outline-none w-full text-sm"
        />
      </div>
      <div className="flex items-center gap-6">
        <div className="relative cursor-pointer">
          <FiBell className="text-xl text-gray-600" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
            3
          </span>
        </div>
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
}
