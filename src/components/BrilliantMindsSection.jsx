import Citadel_Investor from '../assets/images/Citadel_Investor.jpg'; // Adjust path if needed
import Citadel_Collaboration from '../assets/images/Citadel_Collaboration.jpg'; // Adjust path if needed

export default function BrilliantMindsSection() {
    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col lg:flex-row items-center">
                {/* Left Side: Large Image */}
                <div className="lg:w-1/2 lg:mr-10">
                    <img
                        src={Citadel_Collaboration}
                        alt="Team of brilliant minds working"
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Right Side: Text, Button, and Small Image */}
                <div className="lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0 relative">
                    <h2 className="text-4xl font-bold text-blue-900 leading-tight mb-4">
                        Always Seeking <br />
                        <span className="text-blue-500">Brilliant Minds</span>
                    </h2>
                    <button className="relative bg-blue-600 text-white px-6 py-3 mt-4 rounded-full shadow-md overflow-hidden">
                        <span className="relative z-10">View Open Roles</span>
                        {/* Background Slide In Effect */}
                        <div className="absolute inset-0 bg-yellow-500 text-blue transition-all duration-500 transform -translate-x-full z-0 button-bg"></div>
                        <style jsx>{`
        button:hover .button-bg {
            transform: translateX(0);
        }
    `}</style>
                    </button>


                    {/* Smaller Image on the Right */}
                    <div className="absolute  right-32 top-36 hidden lg:block">
                        <img
                            src={Citadel_Investor}
                            alt="Team member"
                            className="rounded-lg shadow-md"
                            style={{ width: '250px', height: '200px' }}  // Adjust size as needed
                        />
                    </div>
                </div>
            </div>

            {/* Disclaimer Section */}
            <div className="container mx-auto text-gray-500 text-sm text-center mt-10">
                <p>
                    1. Citadels risk management protocols should not be considered an assurance that losses will not be incurred.
                    There are risks that are not monitored or controlled by Citadel and risks that may be greater than forecasted by Citadel,
                    especially in unusual market conditions. Significant or complete losses may result from these risks or other reasons despite
                    Citadels risk management protocols or any information provided herein.
                </p>
            </div>
        </div>
    );
}