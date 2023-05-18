import Link from "next/link";
import { Rating } from "../rating";
import coffee1 from "../../assets/coffee1.png";
import coffee2 from "../../assets/coffee2.png";
import coffee3 from "../../assets/coffee3.png";
import coffee4 from "../../assets/coffee4.png";
import coffee5 from "../../assets/coffee5.png";
import coffee6 from "../../assets/coffee6.png";


const products = [
  {
    id: 1,
    name: "Colombian Coffee",
    imageSrc: coffee1.src,
    rating: 5,
    numReviews: 10,
    price: 99.99,
  },
  {
    id: 2,
    name: "Brazilian Coffee",
    imageSrc: coffee2.src,
    rating: 5,
    numReviews: 8,
    price: 129.99,
  },
  {
    id: 3,
    name: "Ethiopian Coffee",
    imageSrc: coffee3.src,
    rating: 5,
    numReviews: 6,
    price: 79.99,
  },
  {
    id: 4,
    name: "Kenyan Coffee",
    imageSrc: coffee4.src,
    rating: 5,
    numReviews: 12,
    price: 149.99,
  },
  {
    id: 5,
    name: "Costa Rican Coffee",
    imageSrc: coffee5.src,
    rating: 5,
    numReviews: 9,
    price: 119.99,
  },
  {
    id: 6,
    name: "Guatemalan Coffee",
    imageSrc: coffee6.src,
    rating: 5,
    numReviews: 7,
    price: 89.99,
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col cursor-pointer">
      <div className="w-full aspect-w-1 aspect-h-1">
        <img
          src={product.imageSrc}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <div className="flex items-center mt-1 mb-2">
          <Rating value={product.rating} />
          <span className="ml-2 text-gray-500">
            {product.numReviews} reviews
          </span>
        </div>
        <p className="text-black font-medium text-lg mt-auto">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const Products = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-8 px-4">
      <h2 className="text-3xl font-bold text-black mb-12">New arrivals</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Link href="/products" legacyBehavior>
          <a className="bg-black text-white py-2 px-4 rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300">
            View All
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Products;
