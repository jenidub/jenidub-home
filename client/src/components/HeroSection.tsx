import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import brainBgImage from "@assets/JeniDub Zoom Background Cover Image_1763140269893.png";

export default function HeroSection() {
  return (
    <section className="relative text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: `url(${brainBgImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
      <div className="container mx-auto px-6 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 opacity-95" data-testid="text-hero-subtitle">
            Think Like a Programmer, No Code Required
          </h2>
          <p className="text-lg md:text-xl mb-6 opacity-95 leading-relaxed" data-testid="text-hero-description">
            You don't need to learn coding to thrive in the AI age—but you do need to think like someone who does. Learn the three core thinking skills that make programmers great problem-solvers.
          </p>
          <p className="text-base md:text-lg mb-8 font-medium max-w-3xl mx-auto" data-testid="text-series-info">
            "Think Like a Programmer, No Code Required" - a 4-episode series teaching you the three thinking skills that make programmers great problem-solvers.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <Badge
              variant="outline"
              className="bg-white/20 border-2 border-secondary text-white px-6 py-3 text-base font-semibold backdrop-blur-sm"
              data-testid="badge-launch-date"
            >
              🎬 First Episode Launches January 7, 2026!
            </Badge>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold text-lg px-8 py-6 rounded-full"
              data-testid="button-subscribe"
            >
              Subscribe to the JeniDub Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
