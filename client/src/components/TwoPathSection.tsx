import PathCard from "./PathCard";
import DecorativeShapes from "./DecorativeShapes";

export default function TwoPathSection() {
  return (
    <section id="paths" className="relative py-20 bg-gradient-to-br from-primary via-primary/95 to-accent text-white overflow-hidden">
      <DecorativeShapes />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12" data-testid="text-paths-title">
          Choose Your Path
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PathCard
            title="Want to Learn?"
            description="Join the series and master programmer thinking at your own pace. Perfect for professionals navigating the AI age."
            buttonText="Subscribe on YouTube"
            href="https://www.youtube.com/@jenidubca"
          />
          <PathCard
            title="Need Help Now?"
            description="Get personalized consulting to solve your tech challenges. From AI adoption to process optimization, I can help."
            buttonText="Book a Consultation"
            href="https://calendar.app.google/JQBA7aV22C8RcXMY6"
          />
        </div>
      </div>
    </section>
  );
}
