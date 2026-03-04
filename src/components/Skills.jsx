const Skills = () => {
  const skills = [
    { name: 'Kotlin', icon: '🔷', level: 95, desc: 'Primary Language' },
    { name: 'Jetpack Compose', icon: '🎨', level: 90, desc: 'Modern declarative UI' },
    { name: 'Android SDK', icon: '📱', level: 95, desc: 'Deep platform knowledge' },
    { name: 'MVVM', icon: '🏗️', level: 92, desc: 'Architecture pattern' },
    { name: 'Java', icon: '☕', level: 90, desc: 'Object-Oriented' },
    { name: 'Coroutines', icon: '⚡', level: 88, desc: 'Async programming' },
    { name: 'REST APIs', icon: '🌐', level: 90, desc: 'Network integration' },
    { name: 'Room DB', icon: '💾', level: 85, desc: 'Local persistence' },
    { name: 'Firebase', icon: '🔥', level: 85, desc: 'Backend services' },
    { name: 'Clean Architecture', icon: '🧹', level: 88, desc: 'Scalable Design' },
    { name: 'Git', icon: '📂', level: 85, desc: 'Version control' },
    { name: 'Hilt/DI', icon: '💉', level: 82, desc: 'Dependency Injection' },
  ];

  const getGridClass = (index) => {
    // First item spans 2 columns on larger screens
    if (index === 0) return 'col-span-1 sm:col-span-2 lg:col-span-2';
    // Java spans 2 columns on tablet
    if (index === 4) return 'col-span-1 sm:col-span-2';
    // Clean Architecture spans 2 columns on tablet
    if (index === 9) return 'col-span-1 sm:col-span-2';
    return '';
  };

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit built over years of developing scalable Android applications
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className={`glass-card p-6 rounded-2xl group cursor-default ${getGridClass(index)}`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="text-4xl">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                  <p className="text-sm text-gray-400">{skill.desc}</p>
                </div>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2 overflow-hidden">
                <div 
                  className={`h-2 rounded-full transition-all duration-1000 group-hover:shadow-[0_0_10px_rgba(61,220,132,0.5)] ${index % 2 === 0 ? 'bg-primary' : 'bg-secondary'}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <p className="text-sm text-gray-500">{skill.level}% proficiency</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

