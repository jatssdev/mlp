import { useState, useEffect } from 'react';

export default function ExcellenceSection() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);

    const slides = [
        {
            year: "2024",
            content: [
                "LCH Investments NV – Citadel Ranked #1 of Great Money Managers by Net Gains since inception to 12/31/2023.",
                "Korean Economic Daily (KED) Global – Best Performance – Absolute Return Strategy (Large Cap)"
            ]
        },
        {
            year: "2023",
            content: [
                "Risk.net’s Risk Awards – Hedge Fund of the Year.",
                "eFinancialCareers – #1 Ideal Hedge Fund Employer.",
                "Institutional Investor – Multistrategy Hedge Fund of the Year.",
                "GlobalCapital – Hedge Fund of the Year.",
                "HFM U.S. Performance Awards – Management Firm of the Year.",
                "Korean Economic Daily (KED) Global – Best Performance – Large Cap.",
                "LCH Investments NV – Citadel Ranked #1 of Top Managers by Net Gains since inception to 12/31/2022."
            ]
        },
        {
            year: "2020",
            content: [
                "Institutional Investor – Multistrategy Hedge Fund of the Year.",
                "GlobalCapital – Hedge Fund of the Year."
            ]
        },
        {
            year: "2019",
            content: [
                "Risk.net’s Risk Awards – Best Hedge Fund and Risk Manager of the Year.",
                "GlobalCapital – Hedge Fund of the Year."
            ]
        },
        {
            year: "2015",
            content: [
                "Financial News – Best Multistrategy Hedge Fund Manager.",
                "Absolute Return – Management Firm of the Year."
            ]
        },
        {
            year: "2014",
            content: [
                "Institutional Investor – Multistrategy Hedge Fund of the Year.",
                "GlobalCapital – US Hedge Fund of the Year."
            ]
        }
    ];

    const nextSlide = () => {
        if (activeIndex < slides.length - 1) {
            setActiveIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (activeIndex > 0) {
            setActiveIndex((prevIndex) => prevIndex - 1);
        }
    };

    const startAutoplay = () => {
        setIsPlaying(true);
    };

    const stopAutoplay = () => {
        setIsPlaying(false);
    };

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                if (activeIndex < slides.length - 1) {
                    nextSlide();
                } else {
                    setTimeout(() => setActiveIndex(0), 5000); // Restart carousel after 5 seconds at the last slide
                }
            }, 3000); // Change slide every 3 seconds
        }
        return () => clearInterval(interval);
    }, [isPlaying, activeIndex]);

    return (
        <div id="section-7" className="page-section section-layout-wrap section-layout-wrap--timeline js-module">
            <div className="page-section page-section__timeline-module page-section__timeline-module--citadel is-white">
                {/* Flex container for heading and paragraph */}
                <div className="container page-section__timeline-module__header grid lg:flex lg:justify-between lg:items-center my-12 mx-52">
                    <div className="lg:w-1/2">
                        <h2 className="text-4xl font-bold text-blue-900 font-serif leading-tight mb-4">
                            Recognized for <br />
                            <span className=' text-blue-500'> Excellence </span>
                        </h2>
                    </div>
                    <div className="lg:w-1/2 text-gray-600 text-lg">
                        <p>
                            In an industry where the drive to prove yourself never ends, we are consistently recognized for our achievements.
                        </p>
                    </div>
                </div>

                {/* Timeline Slider Main */}
                <div className="container page-section__timeline-module__timeline-slider-main js-timeline-slider grid mx-32">
                    <div
                        className="page-section__timeline-module__timeline-slider-main__wrap relative overflow-hidden"
                        style={{ padding: "0 10%", overflow: "hidden" }} // Added overflow hidden for container
                    >
                        <div
                            className="flex transition-transform duration-700"
                            style={{
                                transform: `translateX(-${activeIndex * 100}%)`, // Ensure 100% width for each slide, no previous/next overlap
                                width: `${slides.length * 100}%`, // Ensure the container's width covers all slides
                            }}
                        >
                            {slides.map((slide, index) => (
                                <div
                                    key={index}
                                    className="min-w-full px-6"
                                    style={{ flex: "0 0 100%" }} // Each slide occupies 100% of the width
                                >
                                    {/* Year and Content */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-4xl text-blue-900 mb-4">{slide.year}</h3>
                                        </div>
                                        <div>
                                            <ul className="text-lg text-gray-600 list-disc list-inside">
                                                {slide.content.map((item, i) => (
                                                    <li key={i} className="mb-2">{item}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Pagination Bar and Navigation */}
                <div className="relative mt-8 flex items-center justify-between mx-96">
                    {/* Progress Bar with Dots */}
                    <div className="flex-1 relative">
                        <div className="absolute w-full h-1 bg-gray-200 top-1/2 transform -translate-y-1/2"></div>
                        <div className="flex justify-between relative">
                            {slides.map((_, i) => (
                                <div key={i} className="relative flex items-center justify-center">
                                    <div
                                        className={`w-4 h-4 rounded-full ${i === activeIndex ? "bg-blue-600" : "bg-gray-400"} cursor-pointer`}
                                        onClick={() => setActiveIndex(i)}
                                    ></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Buttons */}
                    <div className="flex items-center space-x-2">
                        {/* Disable prev button on the first slide */}
                        <button onClick={prevSlide} disabled={activeIndex === 0} className={`border p-2 rounded-full hover:bg-blue-100 ${activeIndex === 0 ? "opacity-50 cursor-not-allowed" : "text-blue-600 border-blue-600"}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        {/* Autoplay Button */}
                        {!isPlaying ? (
                            <button onClick={startAutoplay} className="border border-blue-600 text-blue-600 p-2 rounded-full hover:bg-blue-100">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3l14 9-14 9V3z" />
                                </svg>
                            </button>
                        ) : (
                            <button onClick={stopAutoplay} className="border border-blue-600 text-blue-600 p-2 rounded-full hover:bg-blue-100">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 4h4v16H6zM14 4h4v16h-4z" />
                                </svg>
                            </button>
                        )}

                        {/* Disable next button on the last slide */}
                        <button onClick={nextSlide} disabled={activeIndex === slides.length - 1} className={`border p-2 rounded-full hover:bg-blue-100 ${activeIndex === slides.length - 1 ? "opacity-50 cursor-not-allowed" : "text-blue-600 border-blue-600"}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
