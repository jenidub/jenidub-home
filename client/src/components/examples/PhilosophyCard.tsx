import PhilosophyCard from '../PhilosophyCard';

export default function PhilosophyCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
      <PhilosophyCard
        icon="⏱️"
        title="Patient, Not Rushed"
        description="I've taught everyone from young children to elderly adults. I know that learning happens at different paces, and that's okay."
      />
      <PhilosophyCard
        icon="🤝"
        title="Approachable, Not Intimidating"
        description="Technology shouldn't feel scary. I break down complex ideas into simple, relatable concepts."
      />
      <PhilosophyCard
        icon="🎯"
        title="Practical, Not Theoretical"
        description="You'll learn skills you can use immediately in your work and daily life."
      />
    </div>
  );
}
