import { products } from "../mock-data/products";

export default function Products() {
  return (
    <div className="p-4 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div>
            <h2>{product.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}