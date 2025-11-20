import { Button } from "@/components/ui/button";
import { ArrowRight, Circle } from "lucide-react";

const Hero = () => {
  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes smokeMove1 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(100px, -100px) scale(1.3) rotate(120deg); }
          66% { transform: translate(-50px, 50px) scale(0.9) rotate(240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(360deg); }
        }

        @keyframes smokeMove2 {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-120px, 80px) scale(1.4) rotate(-120deg); }
          66% { transform: translate(80px, -60px) scale(0.8) rotate(-240deg); }
          100% { transform: translate(0, 0) scale(1) rotate(-360deg); }
        }

        @keyframes smokeMove3 {
          0% { transform: translate(-50%, -50%) scale(1) rotate(0deg); }
          50% { transform: translate(-50%, -50%) scale(1.5) rotate(180deg); }
          100% { transform: translate(-50%, -50%) scale(1) rotate(360deg); }
        }

        @keyframes smokeMove4 {
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(60px, 80px) scale(1.2); }
          50% { transform: translate(-40px, -100px) scale(0.9); }
          75% { transform: translate(-80px, 60px) scale(1.1); }
          100% { transform: translate(0, 0) scale(1); }
        }

        .smoke-container {
          position: absolute;
          inset: 0;
          overflow: hidden;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%);
        }

        .smoke-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          mix-blend-mode: screen;
          will-change: transform;
        }

        .smoke-blob-1 {
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(100, 100, 255, 0.3), rgba(50, 50, 150, 0.2), transparent);
          top: -300px;
          left: -300px;
          animation: smokeMove1 25s ease-in-out infinite;
        }

        .smoke-blob-2 {
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(150, 50, 200, 0.3), rgba(100, 50, 150, 0.2), transparent);
          bottom: -250px;
          right: -250px;
          animation: smokeMove2 30s ease-in-out infinite;
        }

        .smoke-blob-3 {
          width: 900px;
          height: 900px;
          background: radial-gradient(circle, rgba(50, 100, 200, 0.25), rgba(30, 80, 150, 0.15), transparent);
          top: 50%;
          left: 50%;
          animation: smokeMove3 35s linear infinite;
        }

        .smoke-blob-4 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(200, 100, 150, 0.2), rgba(150, 80, 120, 0.15), transparent);
          top: 20%;
          right: 10%;
          animation: smokeMove4 28s ease-in-out infinite;
        }

        .scroll-indicator {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        {/* Animated Smokey Background */}
        <div className="smoke-container">
          <div className="smoke-blob smoke-blob-1"></div>
          <div className="smoke-blob smoke-blob-2"></div>
          <div className="smoke-blob smoke-blob-3"></div>
          <div className="smoke-blob smoke-blob-4"></div>
        </div>
        
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        
        {/* Vignette Effect */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)] z-[2]" />
        
        {/* Minimal noise texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==')] z-[3]" />
        
        <div className="container max-w-7xl mx-auto z-10 relative">
          <div className="animate-fade-in-up space-y-12">
            {/* Main heading */}
            <div className="space-y-6">
              <h1 className="text-7xl md:text-8xl lg:text-[12rem] font-light tracking-tighter leading-[0.85]">
                <span className="block text-white font-playfair">Muhammad Farvees K</span>
              </h1>
              
              <p className="text-lg md:text-2xl font-light text-white/80 max-w-2xl tracking-wide">
                Self-Taught Web Developer & Business Communicator
              </p>
            </div>
            
            {/* Description */}
            <p className="text-base md:text-lg font-light text-white/70 max-w-2xl leading-relaxed">
              I combine technical expertise with exceptional communication skills to deliver solutions that 
              truly understand your business needs. Self-taught, client-focused, and ready to turn your ideas into reality.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-white/90 transition-all duration-300 group text-sm h-12 px-8 tracking-wider uppercase font-light"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                size="lg" 
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-sm h-12 px-8 tracking-wider uppercase font-light"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator z-10">
          <span className="text-white/50 text-xs uppercase tracking-widest">Scroll down</span>
          <Circle className="w-6 h-6 text-white/30" />
        </div>
      </section>
    </>
  );
};

export default Hero;