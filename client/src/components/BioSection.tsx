import { ArrowRight } from "lucide-react";
import bioPhoto from "@assets/Jeni Williams Resume Photo Square Crop_1763140386787.jpg";

export default function BioSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 max-w-6xl mx-auto">
          <div className="lg:w-1/3 flex justify-center lg:justify-start">
            <img
              src={bioPhoto}
              alt="Jeni Williams"
              className="w-64 h-64 rounded-full border-4 border-primary object-cover"
              data-testid="img-profile"
            />
          </div>
          <div className="lg:w-2/3 text-center lg:text-left">
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
