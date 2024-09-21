import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section 
      className="relative h-[70vh] bg-cover bg-center flex items-center justify-center container mx-auto rounded-lg overflow-hidden"
      style={{
        backgroundImage: "url('/assets/images/cta.png')"
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
          Are You Ready To Travel?
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8">
          Embark on a journey like never before. Explore breathtaking destinations and create lasting memories. Let us be your guide to the world’s most extraordinary experiences.
        </p>
        <button className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full inline-flex items-center transition duration-300 ease-in-out hover:bg-blue-100">
          Book Now
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
  );
};

export default CTA;
