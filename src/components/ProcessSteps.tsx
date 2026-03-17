"use client";

import { useState } from "react";
import Container from "./Container";
import SectionHeader from "./SectionHeader";

const phases = [
  {
    number: "01",
    phase: "SPECIFY",
    title: "Human-authored specification as source of truth",
    description:
      "Every engagement begins with specification, not code. We decompose your problem into structured, machine-readable specs: system architecture, API contracts, data models, acceptance criteria, and behavioral invariants. These specs are readable by humans and executable by agents. The spec IS the product definition.",
    who: "Senior Engineer (Human)",
    artifacts: "Architecture spec · Feature specs · API contracts · Agent configuration",
    accentColor: "#D97706",
  },
  {
    number: "02",
    phase: "PLAN",
    title: "AI-generated implementation plan, human-validated",
    description:
      "The specification is fed to an AI agent which generates a detailed implementation plan: task breakdown, file structure, dependency graph, execution order. The human engineer reviews against the spec, corrects architectural decisions, and approves. No code is written until the plan passes human review.",
    who: "AI Agent → Human Review",
    artifacts: "Implementation plan · Technical decisions log · Test strategy",
    accentColor: "#F59E0B",
  },
  {
    number: "03",
    phase: "BUILD",
    title: "Agentic implementation with continuous spec validation",
    description:
      "The AI agent implements the approved plan — generating code, tests, and documentation against the spec. Every generated component is validated against the specification: contract tests verify interfaces, acceptance criteria execute as tests, architectural invariants are enforced through rules. The human engineer steers by refining specs, not editing code.",
    who: "AI Agent (Primary) · Human (Steering)",
    artifacts: "Spec-compliant code · Contract tests · Acceptance tests · Documentation",
    accentColor: "#059669",
  },
  {
    number: "04",
    phase: "VERIFY",
    title: "Agentic DevOps — autonomous quality gates",
    description:
      "CI/CD pipelines run AI-powered quality gates: security scanning, dependency analysis, performance benchmarking, and spec-compliance checks. Agents diagnose failures, propose fixes, and re-run. Human engineers set governance rules and review escalations. Deployment decisions are agent-recommended, human-approved.",
    who: "AI Agents (Autonomous) · Human (Governance)",
    artifacts: "Security report · Spec compliance report · Deployment recommendation",
    accentColor: "#2563EB",
  },
  {
    number: "05",
    phase: "SHIP",
    title: "Deployed product with spec-as-documentation",
    description:
      "The product ships with its specification suite intact. You receive working software, the complete spec library, and the agent configuration. If you need to modify the system later, update the spec and regenerate. The spec outlives the code. You're not dependent on us.",
    who: "Together",
    artifacts: "Production system · Specification suite · Agent config · Handoff guide",
    accentColor: "#7C3AED",
  },
];

export default function ProcessSteps() {
  const [active, setActive] = useState(0);
  const current = phases[active];

  return (
    <section id="methodology" className="bg-navy/[0.02] py-20 sm:py-28">
      <Container>
        <SectionHeader
          label="Our Engineering Lifecycle"
          title="Spec → Agent → Ship"
          description="Every product we build follows the same five-phase lifecycle. Specifications are the source of truth. AI agents are the execution layer. Human engineers govern every decision. Code is a generated artifact — the spec is what ships."
        />

        {/* Stepper */}
        <div className="mt-16">
          {/* Step indicators */}
          <div className="flex items-center justify-between">
            {phases.map((phase, i) => (
              <button
                key={phase.number}
                onClick={() => setActive(i)}
                className="group relative flex flex-1 flex-col items-center cursor-pointer"
                aria-label={`Phase ${phase.number}: ${phase.phase}`}
              >
                {/* Connector line (before pill) */}
                {i > 0 && (
                  <div
                    className="absolute top-4 right-1/2 h-0.5 w-full -translate-y-1/2 transition-colors duration-300"
                    style={{ backgroundColor: i <= active ? "#0C1F3F" : "rgba(12,31,63,0.1)" }}
                  />
                )}
                {/* Pill with phase name */}
                <div
                  className="relative z-10 flex items-center justify-center rounded-full px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all duration-300 sm:text-xs sm:px-5 sm:py-2"
                  style={{
                    backgroundColor: i === active ? "#0C1F3F" : i < active ? "#0C1F3F" : "white",
                    color: i <= active ? "white" : "rgba(12,31,63,0.4)",
                    border: i <= active ? "2px solid #0C1F3F" : "2px solid rgba(12,31,63,0.15)",
                    transform: i === active ? "scale(1.08)" : "scale(1)",
                  }}
                >
                  {phase.phase}
                </div>
              </button>
            ))}
          </div>

          {/* Active phase detail */}
          <div
            key={active}
            className="mt-10 animate-fadeIn rounded-xl border-t-[3px] border-navy border border-navy/10 bg-white p-8 sm:p-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:gap-10">
              {/* Left: big number + phase */}
              <div className="flex flex-shrink-0 flex-col items-start sm:w-32">
                <span
                  className="font-heading text-6xl font-bold text-navy/10 sm:text-7xl"
                >
                  {current.number}
                </span>
                <p
                  className="mt-1 text-xs font-bold uppercase tracking-widest text-navy"
                >
                  {current.phase}
                </p>
              </div>

              {/* Right: content */}
              <div className="flex-1">
                <h3 className="font-heading text-xl font-bold text-navy sm:text-2xl">
                  {current.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-grey-accent sm:text-base">
                  {current.description}
                </p>
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-navy/30">
                      Who
                    </p>
                    <p className="mt-1 text-sm font-medium text-navy/70">
                      {current.who}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-navy/30">
                      Artifacts
                    </p>
                    <p className="mt-1 text-sm text-grey-accent/70">
                      {current.artifacts}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
