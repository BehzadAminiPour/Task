import Link from "next/link";
const Products = ({ productName, price }) => {
  return (
    <div className="border-2 flex-col p-2 m-2">
      <h2>{productName}</h2>
      <p>{price}</p>
      <Link href="/login" className="text-red-400">
        Buy
      </Link>
    </div>
  );
};

export default Products;
