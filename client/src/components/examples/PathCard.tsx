import PathCard from '../PathCard';

export default function PathCardExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 bg-gradient-to-br from-primary to-accent">
      <PathCard
        title="Want to Learn?"
        description="Join the series and master programmer thinking at your own pace. Perfect for professionals navigating the AI age."
        buttonText="Subscribe on YouTube"
        href="#subscribe"
      />
      <PathCard
        title="Need Help Now?"
        description="Get personalized consulting to solve your tech challenges. From AI adoption to process optimization, I can help."
        buttonText="Book a Consultation"
        href="#consulting"
      />
    </div>
  );
}
