import Link from "next/link";
import Products from "../components/Products";
export default function Home() {
  const products = [
    { productName: "Product one", price: "199$", id: 1 },
    { productName: "Product two", price: "399$", id: 2 },
    { productName: "Product three", price: "299$", id: 3 },
  ];

  return (
    <main>
      <h1 className="text-center my-5">Welcome to our shop</h1>
      <div className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <Products
            productName={product.productName}
            price={product.price}
            key={product.id}
          />
        ))}
      </div>
    </main>
  );
}
