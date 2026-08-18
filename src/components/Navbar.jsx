import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-[#EF6905] py-4 flex justify-center space-x-6">
      <Link to="/" className="text-white font-medium hover:opacity-80">Home</Link>
      <Link to="/about" className="text-white font-medium hover:opacity-80">About</Link>
      <Link to="/contact" className="text-white font-medium hover:opacity-80">Contact</Link>
      <Link to="/products" className="text-white font-medium hover:opacity-80">Products</Link>
    </nav>
  );
}