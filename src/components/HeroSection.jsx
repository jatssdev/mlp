import backgroundImage from '../assets/images/whatwedo.jpg'; // Adjust path if needed

export default function HeroSection() {
  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div className="absolute inset-0 ml-12">
        <img
          src={backgroundImage} // Ensure the path is correct
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Main Content */}
      <div className="relative container mx-auto flex items-center justify-start min-h-screen px-6 md:px-12">
        <div className="text-white max-w-lg">
          <h1 className="text-6xl font-serif leading-tight">
            Capturing Market <br /> Opportunities
          </h1>
        </div>
      </div>

      {/* Bottom Text Section with Left Margin */}
      <div className="absolute bottom-0 left-0 w-full z-10 bg-blue-700 text-white py-6 opacity-90">
        <div className="container mx-auto px-6 md:px-12">
          <p className="text-left text-lg max-w-3xl ml-12"> {/* Added margin-left */}
            Our thinking reveals possibilities unimagined by others. Together, we move
            swiftly to capture opportunities in the markets.
          </p>
        </div>
      </div>
    </section>
  );
}
