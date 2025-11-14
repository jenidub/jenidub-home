import SkillCard from '../SkillCard';

export default function SkillCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
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
    </div>
  );
}
