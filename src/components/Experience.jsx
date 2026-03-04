const experiences = [
  {
    id: 1,
    title: 'Senior Android Developer',
    company: 'Tech Solutions Inc.',
    location: 'Hyderabad, India',
    period: '2023 - Present',
    description: 'Leading Android development team, architecting scalable mobile applications using Kotlin and Jetpack Compose. Implemented CI/CD pipelines and improved app performance by 40%.',
    technologies: ['Kotlin', 'Jetpack Compose', 'MVVM', 'Hilt', 'Firebase'],
  },
  {
    id: 2,
    title: 'Android Developer',
    company: 'Mobile Innovations Pvt Ltd',
    location: 'Bangalore, India',
    period: '2021 - 2023',
    description: 'Developed and maintained multiple Android applications with focus on clean architecture and best practices. Collaborated with cross-functional teams to deliver high-quality apps.',
    technologies: ['Kotlin', 'Java', 'Room DB', 'Retrofit', 'Coroutines'],
  },
  {
    id: 3,
    title: 'Junior Android Developer',
    company: 'Startup Hub',
    location: 'Chennai, India',
    period: '2019 - 2021',
    description: 'Built Android applications from scratch, implemented UI/UX designs, and integrated REST APIs. Gained experience in agile methodologies and version control.',
    technologies: ['Java', 'Android SDK', 'SQLite', 'JSON', 'Git'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A journey through my professional career building Android applications
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent transform -translate-x-1/2" />
          
          {/* Timeline line - mobile */}
          <div className="md:hidden absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 z-10 shadow-[0_0_10px_rgba(61,220,132,0.5)]">
                  <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-30" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'
                }`}>
                  <div className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300">
                    {/* Period badge */}
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full mb-3">
                      {exp.period}
                    </span>

                    {/* Title & Company */}
                    <h3 className="text-xl font-semibold text-white mb-1">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium mb-1">
                      {exp.company}
                    </p>
                    <p className="text-sm text-gray-500 mb-3">
                      {exp.location}
                    </p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 justify-end">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-white/5 text-gray-400 rounded-md border border-white/5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Empty space for opposite side */}
                <div className="hidden md:block md:w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">2.5+</div>
            <div className="text-sm text-gray-500 mt-1">Years</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">10+</div>
            <div className="text-sm text-gray-500 mt-1">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold gradient-text">5+</div>
            <div className="text-sm text-gray-500 mt-1">Apps Live</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

