import { useParams } from "react-router-dom";
import { products } from "../mock-data/products";

export default function ProductDetail() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto w-full mt-2">
        <h2 className="text-xl font-bold text-gray-900">Product not found.</h2>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sm:p-8 max-w-4xl mx-auto w-full mt-2">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
        {product.name}
      </h1>
      <p className="text-gray-700 text-sm sm:text-base mb-3">
        {product.description}
      </p>
      <p className="text-gray-500 text-sm">
        Product ID: {productId}
      </p>
    </div>
  );
}