import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-start pt-6 text-center">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
        About
      </h1>
      <Link
        to="/"
        className="text-[#2bbbad] hover:text-[#26a69a] underline text-sm font-medium">
        Go to Home
      </Link>
    </div>
  );
}