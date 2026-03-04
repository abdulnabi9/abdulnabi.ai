const projects = [
  {
    title: 'Face Recognition Attendance',
    description: 'Android app using ML Kit for real-time face detection and automated attendance tracking. Features include live camera preview, face matching with database, attendance reports, and export functionality.',
    tech: ['Kotlin', 'Jetpack Compose', 'ML Kit', 'Room DB', 'Firebase'],
    github: 'https://github.com/abdulnabi9',
    playstore: '#',
    featured: true,
  },
  {
    title: 'Real-Time Tracking App',
    description: 'Android application that displays real-time user tracking using REST APIs and RecyclerView dashboards. Implements location services, geofencing, and interactive maps.',
    tech: ['Kotlin', 'MVVM', 'Retrofit', 'Google Maps', 'Coroutines'],
    github: 'https://github.com/abdulnabi9',
    playstore: '#',
    featured: true,
  },
  {
    title: 'E-Commerce App',
    description: 'Full-featured shopping application with product catalog, cart management, payment integration, order tracking, and user authentication.',
    tech: ['Kotlin', 'Jetpack Compose', 'Hilt', 'Room', 'Payment Gateway'],
    github: 'https://github.com/abdulnabi9',
    playstore: '#',
    featured: false,
  },
  {
    title: 'Chat Application',
    description: 'Real-time messaging app with support for text, images, and notifications. Features include online status, read receipts, and message encryption.',
    tech: ['Kotlin', 'Firebase', 'Coroutines', 'Material Design', 'Push Notifications'],
    github: 'https://github.com/abdulnabi9',
    playstore: '#',
    featured: false,
  },
  {
    title: 'News Aggregator',
    description: 'News reading application that fetches articles from multiple sources, provides offline reading, bookmarking, and personalized recommendations.',
    tech: ['Kotlin', 'REST APIs', 'Room DB', 'Jetpack Compose', 'MVVM'],
    github: 'https://github.com/abdulnabi9',
    playstore: '#',
    featured: false,
  },
  {
    title: 'Task Manager',
    description: 'Productivity application for task management with categories, priorities, due dates, and collaboration features. Includes local and cloud sync.',
    tech: ['Kotlin', 'Firebase', 'Jetpack Compose', 'Clean Architecture', 'DI'],
    github: 'https://github.com/abdulnabi9',
    playstore: '#',
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A collection of Android applications showcasing modern development practices and clean architecture
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl p-6 group hover:scale-[1.02] transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="inline-block mt-1 text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                      aria-label="View on GitHub"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                  {project.playstore && (
                    <a
                      href={project.playstore}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-white/10 transition-colors"
                      aria-label="View on Play Store"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/10 hover:border-primary/50 hover:text-primary transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/abdulnabi9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full font-medium hover:bg-white/10 transition-all group"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;

