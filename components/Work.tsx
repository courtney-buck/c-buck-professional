const projects = [
  {
    title: 'Project Alpha',
    description: 'A comprehensive strategy project that bridged multiple business units and resulted in 40% efficiency improvement.',
    category: 'Strategy & Operations',
    year: '2023',
    image: '/placeholder-1.jpg',
    tags: ['Strategy', 'Operations', 'Analytics'],
  },
  {
    title: 'Project Beta',
    description: 'Cross-functional initiative that integrated technology and process improvements across three departments.',
    category: 'Technology Integration',
    year: '2023',
    image: '/placeholder-2.jpg',
    tags: ['Technology', 'Process', 'Integration'],
  },
  {
    title: 'Project Gamma',
    description: 'Innovation project that connected insights from different industries to create a new market opportunity.',
    category: 'Innovation & Research',
    year: '2022',
    image: '/placeholder-3.jpg',
    tags: ['Innovation', 'Research', 'Market Analysis'],
  },
]

export default function Work() {
  return (
    <section id="work" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-max">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Selected Work
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            A selection of projects that demonstrate the breadth and depth of generalist problem-solving across different domains.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`flex flex-col lg:flex-row gap-8 items-center animate-fade-in animate-delay-${(index + 1) * 200} ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className="lg:w-1/2">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 rounded-2xl p-8 h-64 lg:h-80 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-primary-600 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    </div>
                    <p className="text-primary-700 dark:text-primary-300 font-medium">
                      Project Image Placeholder
                    </p>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {project.category}
                    </span>
                    <span className="text-sm text-neutral-500 dark:text-neutral-400">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-neutral-100">
                    {project.title}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-neutral-200 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors hover:scale-105">
                  View Case Study
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 animate-fade-in animate-delay-800">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Let's Work Together
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
} 