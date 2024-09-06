export default function ApproachSection() {
    return (
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex items-start">
            {/* Left Text "Our Approach" */}
            <div className="text-left text-blue-900 mr-10">
              <h2 className="text-lg font-medium">Our Approach</h2>
            </div>
  
            {/* Vertical Line */}
            <div className="border-l-2 border-blue-900 h-40 mr-8"></div> {/* Adjust height here */}
  
            {/* Main Paragraph */}
            <div className="text-left text-blue-900 max-w-3xl">
              <p className="text-3xl leading-relaxed font-serif">
                Drive capital to the world’s most impactful and compelling investments,
                leveraging our combination of talent, technology, analytics, and global scale.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  