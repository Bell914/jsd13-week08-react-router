import { useParams, Link } from "react-router-dom";
import { products } from "../mock-data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-sm text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product not found.</h2>
        <Link to="/products" className="text-[#2bbbad] hover:underline text-sm font-medium">
          ← Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm max-w-lg mx-auto w-full">
      <Link to="/products" className="text-[#2bbbad] hover:underline text-sm font-medium mb-4 inline-block">
        ← Back to Products
      </Link>
      <h1 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h1>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <p className="text-2xl font-bold text-teal-700 mb-6">${product.price.toFixed(2)}</p>
      <button className="bg-[#2bbbad] hover:bg-[#26a69a] text-white px-6 py-2.5 rounded font-medium text-sm transition-colors shadow-sm">
        Buy Now
      </button>
    </div>
  );
}