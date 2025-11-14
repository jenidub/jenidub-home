import PhilosophyCard from "./PhilosophyCard";

export default function CaliChillSection() {
  return (
    <section className="py-20 bg-background" id="philosophy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground" data-testid="text-philosophy-title">
          The Cali Chill Philosophy
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="text-philosophy-intro">
          Technology education doesn't have to be intimidating. Here's how I approach it differently:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <PhilosophyCard
            icon="⏱️"
            title="Patient, Not Rushed"
            description="I've taught everyone from young children to elderly adults. I know that learning happens at different paces, and that's okay. We move at your speed."
          />
          <PhilosophyCard
            icon="🤝"
            title="Approachable, Not Intimidating"
            description="Technology shouldn't feel scary. I break down complex ideas into simple, relatable concepts that anyone can understand."
          />
          <PhilosophyCard
            icon="🎯"
            title="Practical, Not Theoretical"
            description="You'll learn skills you can use immediately in your work and daily life. No abstract theory—just real-world problem-solving."
          />
        </div>
      </div>
    </section>
  );
}
