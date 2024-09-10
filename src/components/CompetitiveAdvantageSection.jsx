import What_We_Do_Citadel from '../assets/images/What_We_Do_Citadel.jpg';

export default function CompetitiveAdvantageSection() {
    return (
        <section className="relative bg-blue-900 text-white py-16">
            <div className="container mx-auto px-6 md:px-12">
                {/* Title and Image in a Grid */}
                <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image Section */}
                    <div className="relative -translate-y-32">
                        <img
                            src={What_We_Do_Citadel}
                            alt="Competitive Advantage"
                            className="w-500 h-80"
                        />
                    </div>

                    {/* Title Section */}
                    <div className="relative lg:text-left text-center">
                        <h2 className="text-4xl md:text-5xl font-serif mb-4">
                            Our Competitive <br />
                            <span className="text-blue-300">Advantage</span>
                        </h2>
                    </div>
                </div>

                {/* Three Columns Section */}
                <div className="grid lg:grid-cols-3 gap-12 mt-12">
                    {/* Column 1 - Extraordinary People */}
                    <div className="border-l-2 border-blue-300 pl-6">
                        <h3 className="text-4xl font-serif mb-4">Extraordinary People</h3>
                        <p className="text-lg leading-relaxed mb-4">
                            Talent from across finance, science, technology, and other fields gather here.
                            <br />
                            <br />
                            Our firm is a place for extraordinary growth. Our people benefit from our unparalleled resources and learn from the talent assembled around them.
                            <br />
                            <br />
                            This combination of talent, collaboration, and inspiration empowers our people to work at the peak of their potential.
                        </p>
                    </div>

                    {/* Column 2 - Superior Analytics */}
                    <div className="border-l-2 border-blue-300 pl-6">
                        <h3 className="text-4xl font-serif mb-4">Superior Analytics and Technology</h3>
                        <p className="text-lg leading-relaxed mb-4">
                            Technology is the lifeblood of our firm. Our ambitious thinking frequently requires innovations that don’t yet exist—so it’s up to us to build them.
                            <br />
                            <br />
                            Our engineering and quantitative research teams drive us forward with proprietary technology and tools, models, and algorithms created in partnership with the investment teams.
                        </p>
                    </div>

                    {/* Column 3 - Risk Management */}
                    <div className="border-l-2 border-blue-300 pl-6">
                        <h3 className="text-4xl font-serif mb-4">Disciplined Risk Management</h3>
                        <p className="text-lg leading-relaxed mb-4">
                            Risk managers are specialists in the asset classes they cover, enabling more productive dialogue with investment professionals.
                            <br />
                            <br />
                            From our Risk Management Center, the firm’s positions experience constant monitoring, review, and automated testing—with investment professionals using constantly updated stress-testing scenarios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
