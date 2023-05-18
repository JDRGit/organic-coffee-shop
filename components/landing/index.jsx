
import coffeecover from "../../assets/coffeecover.png";

const LandingSection = () => {
  return (
    <section
      className="h-screen w-screen flex justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: `url('${coffeecover.src}')` }}
    >
      <div className="mt-16 h-screen w-full absolute top-0 left-0 flex justify-center items-center bg-gray-900 bg-opacity-80">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-white">
          <div className="w-full md:w-1/2 md:mr-8">
            <h2 className="text-4xl font-bold mb-4 text-cyan-500">
            Jaime's Organic C<span className="emoji">☕️</span>ffee Shop
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Experience the unique taste and aroma of organically grown coffee
              at Jaime's Organic Coffee Shop. Our coffee beans are sourced from
              some of the finest farms around the world, ensuring you enjoy a
              cup that's not only flavorful and rich, but also ethically
              produced and eco-friendly.
            </p>
            <div className="flex flex-col md:flex-row">
              <a
                href="/keyboards"
                className="bg-cyan-500 hover:bg-cyan-600 text-white py-3 px-6 rounded-md font-bold text-lg mr-0 md:mr-4 mb-4 md:mb-0 transition duration-300 ease-in-out"
              >
                Explore Coffee Origins
              </a>
              <a
                href="/register"
                className="border border-gray-400 hover:border-gray-500 text-gray-300 py-3 px-6 rounded-md font-bold text-lg transition duration-300 ease-in-out"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { LandingSection };
