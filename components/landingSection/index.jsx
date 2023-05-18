import Image from "next/image";
import coffeecover from "../../assets/coffeecover.png";

const LandingSection = () => {
  return (
    <section className="flex flex-row justify-center items-center py-16 px-6">
      <div className="flex flex-col justify-center items-center mr-6">
        <h1 className="text-4xl font-bold text-gray-900">
        Jaime's Organic C<span className="emoji">☕️</span>ffee Shop
        </h1>
        <h2 className="text-lg text-gray-700 mb-8">
          Pick the Right organic coffee for you
        </h2>
        <div className="flex flex-col gap-4">
          <button className="px-4 py-2 bg-cyan-500 text-white rounded-md">
            Coffee
          </button>
          <button className="px-4 py-2 border border-cyan-500 text-cyan-500 rounded-md">
            Flavors
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Image
          src={coffeecover}
          alt="Keyboard illustration"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default LandingSection;
