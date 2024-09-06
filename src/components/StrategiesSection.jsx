import stratimg1 from '../assets/images/StratImg1.jpg'
import stratimg2 from '../assets/images/StratImg2.jpg'
import stratimg3 from '../assets/images/StratImg3.jpg'
import stratimg4 from '../assets/images/StratImg4.jpg'
import stratimg5 from '../assets/images/StratImg5.jpg'

export default function StrategiesSection() {
    return (
        <section className="bg-white py-16 mb-32">
            <div className="container mx-auto px-6 md:px-12">
                {/* Top Title and Paragraph */}
                <div className="container mx-auto px-6 mb-40 md:px-12 flex flex-col lg:flex-row justify-between items-start lg:items-center">
                    {/* Title */}
                    <div className="lg:w-1/2">
                        <h2 className="text-xl md:text-5xl font-serif text-blue-900 mb-4">
                            Five Strategies. <br /> <span className='text-blue-700 font-serif'> One Commitment. </span>
                        </h2>
                    </div>

                    {/* Paragraph */}
                    <div className="lg:w-1/2">
                        <p className="text-xl text-gray-600 font-serif">
                            Across all major asset classes and geographies, we have a singular focus: delivering industry-leading returns.
                        </p>
                    </div>
                </div>

                {/* Grid Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Commodities Card */}
                    <div className="flex flex-col border-l-2 border-blue-900 pl-6 group h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-blue-900 mb-4">Commodities</h3>
                            <p className="text-lg text-gray-600 mb-4 font-serif">
                                We are one of the largest alternative investment managers in the commodities markets.
                            </p>
                            <a href="#" className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-500 group-hover:after:w-full">
                                Explore Commodities &rarr;
                            </a>
                        </div>
                        <div className="flex justify-center items-center overflow-hidden mt-4 h-[200px]">
                            <img src={stratimg1} alt="Commodities" className="w-full h-full object-cover rounded-md transform transition duration-500 hover:scale-105" />
                        </div>
                    </div>

                    {/* Credit & Convertibles Card */}
                    <div className="flex flex-col border-l-2 border-blue-900 pl-6 group h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-blue-900 mb-4">Credit & Convertibles</h3>
                            <p className="text-lg text-gray-600 mb-4 font-serif">
                                We are one of the most significant alternative investment managers in the U.S. corporate credit markets.
                            </p>
                            <a href="#" className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-500 group-hover:after:w-full">
                                Explore Credit & Convertibles &rarr;
                            </a>
                        </div>
                        <div className="flex justify-center items-center overflow-hidden mt-4 h-[200px]">
                            <img src={stratimg2} alt="Credit & Convertibles" className="w-full h-full object-cover rounded-md transform transition duration-500 hover:scale-105" />
                        </div>
                    </div>

                    {/* Equities Card */}
                    <div className="flex flex-col border-l-2 border-blue-900 pl-6 group h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-blue-900 mb-4">Equities</h3>
                            <p className="text-lg text-gray-600 mb-4 font-serif">
                                Equities represents one of the largest and longest tenured strategies at Citadel.
                            </p>
                            <a href="#" className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-500 group-hover:after:w-full">
                                Explore Equities &rarr;
                            </a>
                        </div>
                        <div className="flex justify-center items-center overflow-hidden mt-4 h-[200px]">
                            <img src={stratimg3} alt="Equities" className="w-full h-full object-cover rounded-md transform transition duration-500 hover:scale-105" />
                        </div>
                    </div>

                    {/* Fixed Income & Macro Card */}
                    <div className="flex flex-col border-l-2 border-blue-900 pl-6 group h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-blue-900 mb-4">Fixed Income & Macro</h3>
                            <p className="text-lg text-gray-600 mb-4 font-serif">
                                We are a leading fixed income and macro investor.
                            </p>
                            <a href="#" className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-500 group-hover:after:w-full">
                                Explore Fixed Income & Macro &rarr;
                            </a>
                        </div>
                        <div className="flex justify-center items-center overflow-hidden mt-4 h-[200px]">
                            <img src={stratimg4} alt="Fixed Income & Macro" className="w-full h-full object-cover rounded-md transform transition duration-500 hover:scale-105" />
                        </div>
                    </div>

                    {/* Global Quantitative Strategies (GQS) Card */}
                    <div className="flex flex-col border-l-2 border-blue-900 pl-6 group h-full justify-between">
                        <div>
                            <h3 className="text-2xl font-serif text-blue-900 mb-4">
                                Global Quantitative Strategies (GQS)
                            </h3>
                            <p className="text-lg text-gray-600 mb-4 font-serif">
                                GQS is one of the most significant quantitative trading teams in the industry.
                            </p>
                            <a href="#" className="relative text-blue-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-500 group-hover:after:w-full">
                                Explore Quantitative Strategies (GQS) &rarr;
                            </a>
                        </div>
                        <div className="flex justify-center items-center overflow-hidden mt-4 h-[200px]">
                            <img src={stratimg5} alt="Global Quantitative Strategies" className="w-full h-full object-cover rounded-md transform transition duration-500 hover:scale-105" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

