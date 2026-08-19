import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#2bbbad] py-3.5 flex justify-center space-x-6 shadow-sm">
      <Link to="/" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Home</Link>
      <Link to="/about" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">About</Link>
      <Link to="/contact" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Contact</Link>
      <Link to="/products" className="text-white text-sm font-medium hover:opacity-80 transition-opacity">Products</Link>
    </nav>
  );
}