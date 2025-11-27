import SkillCard from "./SkillCard";

export default function FourSkillsSection() {
  return (
    <section className="py-20 bg-muted/30" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-foreground" data-testid="text-skills-title">
          The Four Skills You'll Master
        </h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto" data-testid="text-skills-intro">
          These are the thinking skills that make programmers effective problem-solvers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          <SkillCard
            icon="🧩"
            title="Decomposition"
            description="Break complex problems into manageable pieces. Turn overwhelming into doable."
            rotation="lg:rotate-2"
          />
          <SkillCard
            icon="🔍"
            title="Critical Thinking"
            description="Question assumptions, test results, spot errors. AI lies with confidence—learn to catch it."
          />
          <SkillCard
            icon="💬"
            title="Effective Communication"
            description="Give clear, contextual information. Get better results from AI and humans alike."
            rotation="lg:-rotate-1"
          />
          <SkillCard
            icon="🤖"
            title="AI Literacy"
            description="Understand AI capabilities and limitations. Work smarter with AI tools to amplify your effectiveness."
            rotation="lg:rotate-1"
          />
        </div>
      </div>
    </section>
  );
}
