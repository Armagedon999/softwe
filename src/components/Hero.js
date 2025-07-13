import React from 'react';
import { ChevronRight, ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 text-white relative overflow-hidden flex items-center pt-16"
    >
      {/* Background Gradient & Ornaments */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-16 left-10 w-32 h-32 bg-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-16 w-40 h-40 bg-cyan-400 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-0 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        
        {/* Left: Image */}
        <div className="lg:w-1/2 w-full order-2 lg:order-1" data-aos="fade-left">
          <div className="relative group">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80"
              alt="Ilustrasi Usaha"
              className="rounded-xl shadow-xl border-4 border-white/10 w-full max-w-md mx-auto"
            />
            <div className="absolute -top-5 -right-5 p-3 rounded-full bg-pink-500 text-white shadow-lg animate-bounce">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="absolute -bottom-5 -left-5 p-3 rounded-full bg-cyan-500 text-white shadow-lg animate-bounce delay-1000">
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Right: Text */}
        <div className="lg:w-1/2 w-full space-y-6 lg:space-y-8 text-center lg:text-left order-1 lg:order-2" data-aos="fade-right">
          <div className="inline-flex items-center px-4 py-2 bg-pink-600 rounded-full text-sm font-medium gap-2">
            <Sparkles className="w-4 h-4" />
            Website Profesional untuk UMKM
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Kamu fokus usaha,
            <br />
            <span className="bg-gradient-to-r from-yellow-300 to-green-300 bg-clip-text text-transparent">
              kami yang beresin websitenya.
            </span>
          </h1>
          <p className="text-base sm:text-lg opacity-90 max-w-xl mx-auto lg:mx-0">
            Tanpa ribet, tanpa pusing fitur. Ceritain usahamu, sisanya kami kerjakan. Website profesional, cepat, dan sesuai budget.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#contact"
              className="bg-yellow-400 text-black px-6 py-3 rounded-lg shadow hover:shadow-lg font-semibold flex items-center justify-center gap-2 transition"
            >
              Mulai dari Budgetmu
              <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-700 transition font-medium"
            >
              Konsultasi Gratis
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm mt-4 opacity-90">
            {['Proses 3-7 Hari', '100% Responsive', 'Support 24/7'].map((text, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
