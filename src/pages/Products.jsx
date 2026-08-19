import { useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

export default function Products() {
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-100 rounded-lg p-5 flex flex-col justify-between bg-gray-50/50 hover:shadow-md transition-shadow"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
              <p className="text-gray-600 text-sm mt-1 mb-3">{product.description}</p>
            </div>
            <div>
              <p className="text-teal-700 font-bold text-lg mb-3">
                ${product.price.toFixed(2)}
              </p>
              <button
                onClick={() => handleViewDetails(product.id)}
                className="w-full text-white bg-[#2bbbad] hover:bg-[#26a69a] px-4 py-2 rounded text-sm font-medium transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}