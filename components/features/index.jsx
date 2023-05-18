import { FaGlobe } from "react-icons/fa";
import { AiOutlineCoffee } from "react-icons/ai";
import { CiCoffeeBean } from "react-icons/ci";
import { SiCoffeescript } from "react-icons/si";

function Features() {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto max-w-screen-xl">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">Features</h2>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col items-center justify-center">
            <AiOutlineCoffee size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Ethically Sourced Coffee
            </h3>
            <p className="text-gray-600 text-center">
              Jaime's Organic Coffee Shop is committed to ethical sourcing. We
              only serve coffee that's grown and harvested under fair trade
              principles, ensuring the farmers who work hard to produce our
              coffee are treated with respect and receive fair compensation.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <CiCoffeeBean size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Organic and Eco-Friendly
            </h3>
            <p className="text-gray-600 text-center">
              Our coffee beans are 100% organic, free of synthetic additives,
              and grown using methods that have a minimal impact on the
              environment. By choosing us, you're choosing to support
              sustainable farming practices.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <SiCoffeescript size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Wide Range of Unique Flavors
            </h3>
            <p className="text-gray-600 text-center">
              At Jaime's, we offer a diverse menu of unique coffee flavors, each
              carefully crafted to deliver a distinct taste profile. Whether you
              prefer your coffee light and fruity or rich and chocolatey, we
              have something to suit your palate.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <FaGlobe size={48} className="text-indigo-500 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Easy Online Shopping Experience
            </h3>
            <p className="text-gray-600 text-center">
              Our e-commerce platform is designed with user-friendliness in
              mind. From browsing our diverse selection of coffees to placing an
              order, every step is straightforward and hassle-free.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Features };
