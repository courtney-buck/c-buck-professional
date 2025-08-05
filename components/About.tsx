const expertiseAreas = [
  {
    title: 'Strategy & Planning',
    description: 'Developing comprehensive strategies that bridge multiple domains and drive measurable outcomes.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Problem Solving',
    description: 'Identifying root causes and implementing innovative solutions across diverse challenges.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Cross-Domain Integration',
    description: 'Connecting insights and methodologies from different fields to create holistic solutions.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
]

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-neutral-900">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            As a generalist, I thrive in the spaces between disciplines, bringing together diverse perspectives to solve complex problems that require both breadth and depth of understanding.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              className="group"
            >
              <div className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl h-full transition-all duration-300 group-hover:shadow-lg group-hover:bg-neutral-100 dark:group-hover:bg-neutral-700">
                <div className="text-primary-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
                  {area.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-neutral-900 dark:text-neutral-100">
              What makes a generalist valuable?
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              In a world of increasing specialization, generalists excel at seeing the bigger picture, 
              connecting dots across domains, and adapting quickly to new challenges. 
              We bridge gaps that specialists might miss.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 