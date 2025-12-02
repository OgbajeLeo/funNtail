const OurStory = () => {
  return (
    <section className="bg-[#1ABC9C1A] py-14 md:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-2xl md:text-[32px] lg:text-[40px] font-bold text-gray_text3">
            Our Story
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12 text-left text-sm md:text-[15px] lg:text-base leading-relaxed">
          <div className="text-gray_text3">
            <h3 className="text-primary_color text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
              History of the company
            </h3>
            <p className="text-justify">
              FunNTail, founded by Efe Apoki, is a pet matchmaking platform
              built to transform how pet owners and pet workers connect.
              Designed for trust, fairness, and ease, FunNTail makes pet care
              simpler, faster, and more reliable—whether you&apos;re an owner
              looking for the perfect sitter or a worker finding meaningful
              opportunities.
            </p>
          </div>

          <div className="text-gray_text3 md:border-x md:border-[#808B9A] md:px-8">
            <h3 className="text-primary_color text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
              Mission
            </h3>
            <p className="text-justify">
              FunNTail, founded by Efe Apoki, is a pet matchmaking platform
              built to transform how pet owners and pet workers connect.
              Designed for trust, fairness, and ease, FunNTail makes pet care
              simpler, faster, and more reliable—whether you&apos;re an owner
              looking for the perfect sitter or a worker finding meaningful
              opportunities.
            </p>
          </div>

          <div className="text-gray_text3">
            <h3 className="text-primary_color text-lg md:text-xl font-semibold mb-4 text-center md:text-left">
              Company Values
            </h3>
            <p className="text-justify">
              FunNTail, founded by Efe Apoki, is a pet matchmaking platform
              built to transform how pet owners and pet workers connect.
              Designed for trust, fairness, and ease, FunNTail makes pet care
              simpler, faster, and more reliable—whether you&apos;re an owner
              looking for the perfect sitter or a worker finding meaningful
              opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
