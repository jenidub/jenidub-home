import { ArrowRight } from "lucide-react";

export default function BioSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div
            className="flex-shrink-0 w-64 h-64 rounded-full bg-accent border-4 border-primary flex items-center justify-center text-7xl font-bold text-white"
            data-testid="img-profile"
          >
            JW
          </div>
          <div className="flex-1 text-center lg:text-left">
            <p className="text-lg leading-relaxed mb-6 text-foreground" data-testid="text-bio">
              Most developers can code. Few can teach. I'm Jeni Williams—a full-stack developer with 10+ years of experience AND a Master's in Special Education with 20+ years teaching people of all ages. I know how programmers think, and I know how to make that thinking accessible to everyone. I teach at Year Up and run JeniDub Tech Consulting, helping professionals thrive in the AI age without becoming programmers themselves.
            </p>
            <a
              href="#about"
              className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-semibold text-lg group"
              data-testid="link-learn-more"
            >
              Learn More About Jeni
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
