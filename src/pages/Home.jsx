import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start pt-6 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        Welcome to Our App
      </h1>

      <Link to="/about">
        <button className="bg-[#2bbbad] hover:bg-[#26a69a] text-white font-medium px-5 py-2 rounded text-sm transition-colors shadow-sm">
          Go to About
        </button>
      </Link>

      <Link
        to="/contact"
        className="mt-4 text-[#2bbbad] hover:text-[#26a69a] underline text-sm font-medium">
        Go to Contact
      </Link>
    </div>
  );
}