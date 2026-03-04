const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-secondary/20 via-transparent to-transparent rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Animated badge */}
        <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-gray-300">Available for freelance work</span>
        </div>

        {/* Main headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="block text-gray-300">Building the</span>
          <span className="gradient-text">Future of Mobile</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl sm:text-2xl text-gray-400 max-w-2xl mx-auto mb-8 animate-slide-up delay-100">
          Native Android Developer specializing in{' '}
          <span className="text-primary font-medium">Kotlin</span>,{' '}
          <span className="text-secondary font-medium">Jetpack Compose</span>{' '}
          and scalable mobile architecture.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up delay-200">
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 bg-primary text-black font-semibold rounded-full hover:bg-opacity-90 transition-all hover:shadow-[0_0_30px_rgba(61,220,132,0.5)] hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 glass-card text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto animate-slide-up delay-300">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">2.5+</div>
            <div className="text-sm text-gray-500 mt-1">Years Exp.</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">10+</div>
            <div className="text-sm text-gray-500 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">100%</div>
            <div className="text-sm text-gray-500 mt-1">Delivery</div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

