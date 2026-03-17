interface MethodologyPhaseProps {
  number: string;
  phase: string;
  title: string;
  description: string;
  who: string;
  artifacts: string;
  accentColor: string;
}

export default function MethodologyPhase({
  number,
  phase,
  title,
  description,
  who,
  artifacts,
  accentColor,
}: MethodologyPhaseProps) {
  return (
    <div
      className="relative rounded-xl border border-navy/10 bg-white p-8 transition-shadow duration-200 hover:shadow-lg"
      style={{ borderTopWidth: "3px", borderTopColor: accentColor }}
    >
      <span className="absolute right-8 top-6 font-heading text-6xl font-bold text-navy/[0.06] sm:text-7xl">
        {number}
      </span>
      <p
        className="text-xs font-bold uppercase tracking-widest"
        style={{ color: accentColor }}
      >
        {phase}
      </p>
      <h3 className="mt-3 font-heading text-xl font-bold text-navy pr-16">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-grey-accent">
        {description}
      </p>
      <div className="mt-5 space-y-2">
        <p className="text-xs font-medium uppercase tracking-wider text-navy/40">
          {who}
        </p>
        <p className="text-xs text-grey-accent/60">
          {artifacts}
        </p>
      </div>
    </div>
  );
}
