import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-24 sm:py-28 border-b border-border"
      aria-label="Technical Skills"
    >
      <div className="max-w-container mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="pb-8 border-b border-border mb-12">
          <span className="font-mono text-xs uppercase tracking-wider text-secondary font-medium">
            Skills
          </span>
          <h2 className="text-2xl sm:text-3xl font-medium text-primary mt-2 tracking-tight">
            Technical Stack
          </h2>
          <p className="text-secondary mt-3 text-base max-w-2xl leading-relaxed">
            Technologies, libraries, and tools I use to build scalable full-stack applications.
          </p>
        </div>

        {/* Structured Editorial Specification Table */}
        <div className="divide-y divide-border border-t border-border">
          {skills.map((category) => {
            return (
              <div
                key={category.label}
                className="py-6 grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-baseline"
              >
                {/* Category Column (4 cols) */}
                <div className="md:col-span-4 flex items-baseline">
                  <h3 className="font-sans text-sm font-medium uppercase tracking-wider text-primary">
                    {category.label}
                  </h3>
                </div>

                {/* Skills Row (8 cols) */}
                <div className="md:col-span-8 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-sm text-xs font-mono text-primary bg-surface border border-border hover:border-primary/50 hover:text-white transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
