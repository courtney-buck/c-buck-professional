export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-neutral-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900" />
      
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute top-40 left-40 w-80 h-80 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="gradient-text">Courtney Buck</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-neutral-600 dark:text-neutral-400 mb-8">
              Generalist
            </h2>
          </div>

          <p className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animate-delay-200">
            Bridging gaps across domains with adaptable solutions for complex challenges.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in animate-delay-400">
            <a
              href="#work"
              className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border-2 border-neutral-300 hover:border-neutral-400 dark:border-neutral-600 dark:hover:border-neutral-500 text-neutral-700 dark:text-neutral-300 font-medium rounded-lg transition-all duration-200 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in animate-delay-600">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
} 