import backgroundImage from '../assets/images/weather-prediction.webp'; // Adjust path if needed

export default function IdeasInActionSection() {
    return (
      <section className="bg-white py-16">
        {/* Top Title and Paragraph */}
        <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center">
          {/* Title */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif text-blue-900 mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
              Only at Citadel: <br /> <span className='text-blue-700'> Ideas in Action </span>
            </h2>
          </div>
  
          {/* Paragraph */}
          <div className="lg:w-1/2">
            <p className="text-xl text-gray-600 font-serif" >
              We will explore any territory in pursuit of an idea, taking unconventional approaches
              and making big, bold investments in unexpected places.
            </p>
          </div>
        </div>
  
        {/* Image and Right Text Section */}
        <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {/* Image Section */}
          <div>
            <img
              src={backgroundImage} // Ensure the path is correct
              alt="Weather Prediction"
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
  
          {/* Text Section */}
          <div className="text-left">
            <h1 className="text-7xl font-serif Guerrilla text-blue-900 mb-6">
              Taking Weather Prediction to a New Level
            </h1>
            <p className="text-xl leading-relaxed text-gray-500 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              From agricultural products to natural gas, changes in the weather play a key role in determining the prices of commodities. We asked: What if we could forecast those changes better than anyone else?
            </p>
            <p className="text-xl leading-relaxed text-gray-500 mb-4" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Over the past five years, our Commodities strategy has assembled a team of PhD-level atmospheric scientists who understand and can predict signals generated from weather phenomena, from windstorms that last two days to El Nino events that last a season.
            </p>
            <p className="text-xl leading-relaxed text-gray-500" style={{ fontFamily: 'Roboto, sans-serif' }}>
              Today, they help transform terabytes of data a day into actionable forecasts, communicating weather-driven commercial opportunities and risks to our investment teams. Weather analytics are now embedded in investment decisions, representing a unique depth of capability.
            </p>
          </div>
        </div>
      </section>
    );
  }
  