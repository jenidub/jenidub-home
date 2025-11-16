import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import brainBgImage from "@assets/JeniDub Zoom Background Cover Image_1763140269893.png";
import logoWhiteImage from "@assets/JeniDub_Logo_Secondary_White_1763265140819.png";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${brainBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      <div className="container mx-auto px-6 py-2.5 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={logoWhiteImage} 
            alt="JeniDub - Your Guide for the AI Age" 
            className="w-4/5 h-auto mx-auto mb-2.5" 
            data-testid="img-hero-logo"
          />
          <p className="text-lg md:text-2xl mb-10 opacity-95 leading-relaxed font-medium" data-testid="text-hero-description">
            You don't need to learn coding to thrive in the AI age—but you do need to think like someone who does. Learn the three core thinking skills that make programmers great problem-solvers.
          </p>
          <div className="max-w-4xl mx-auto bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border-2 sm:border-4 border-secondary/90 mb-8">
            <div className="text-secondary text-sm sm:text-base md:text-lg font-bold text-center mb-2" data-testid="text-coming-soon">
              COMING SOON
            </div>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-2 sm:mb-3" data-testid="text-series-title">
              "Think Like a Programmer, No Code Required"
            </h3>
            <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 font-medium text-center px-2" data-testid="text-series-info">
              A 4-episode series teaching you the three thinking skills that make programmers great problem-solvers.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:gap-6">
              <div className="flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm border-2 border-secondary/80 rounded-lg md:rounded-xl px-4 sm:px-6 md:px-8 py-3 md:py-4 inline-flex items-center gap-2 md:gap-3" data-testid="badge-launch-date">
                  <span className="text-2xl md:text-3xl">🎬</span>
                  <div className="text-left">
                    <div className="text-xs sm:text-sm font-medium text-white/80">First Episode Launches</div>
                    <div className="text-base sm:text-lg md:text-xl font-bold text-white">January 7, 2026!</div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <Button
                  size="lg"
                  className="bg-secondary text-white hover:bg-secondary/90 font-bold text-base sm:text-lg px-6 sm:px-8 md:px-10 py-5 sm:py-6 md:py-7 rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                  data-testid="button-subscribe"
                >
                  Subscribe to the JeniDub Channel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
