import { useNavigate } from "react-router-dom";
import { products } from "../mock-data/products";

export default function Products() {
  const navigate = useNavigate();

  const handleViewDetails = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto w-full mt-2">
      <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-5">
        Products
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="border border-gray-900 rounded-md p-4 flex flex-col justify-between bg-white"
          >
            <div>
              <h2 className="text-base font-bold text-gray-900 mb-1.5">
                {product.name}
              </h2>
              <p className="text-gray-600 text-xs sm:text-sm mb-4">
                {product.description}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleViewDetails(product.id)}
                className="bg-[#1faea4] hover:bg-[#19948c] text-white font-medium px-3.5 py-1.5 rounded text-xs sm:text-sm transition-colors shadow-sm"
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