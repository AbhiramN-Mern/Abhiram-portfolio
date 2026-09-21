import { skills } from '../../data/skills';

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 border-t border-[#1e293b]"
      aria-label="Technical Skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12">
          <span className="section-subtitle">Skills</span>
          <h2 className="text-3xl font-bold text-white mt-1">
            Technical Stack
          </h2>
          <p className="text-slate-400 mt-2 text-base max-w-2xl">
            Technologies, libraries, and tools I use to build scalable full-stack applications.
          </p>
        </div>

        {/* Single Clean Skills Container */}
        <div className="bg-[#111726] border border-[#1e293b] rounded-lg p-6 sm:p-8 shadow-sm">
          <div className="divide-y divide-[#1e293b]">
            {skills.map((category, index) => (
              <div
                key={category.label}
                className={`flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 ${
                  index === 0 ? 'pb-6' : index === skills.length - 1 ? 'pt-6' : 'py-6'
                }`}
              >
                {/* Category Label */}
                <div className="md:w-56 flex-shrink-0">
                  <span className="text-sm font-semibold text-slate-200 uppercase tracking-wide">
                    {category.label}
                  </span>
                </div>

                {/* Skills list inside this category */}
                <div className="flex flex-wrap gap-2 flex-1">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center px-3 py-1 rounded-md text-xs font-medium text-slate-200 bg-[#162032] border border-[#222f44] hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
