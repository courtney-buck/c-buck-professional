export default function Footer() {
  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-400 py-12">
      <div className="container-max section-padding">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left animate-fade-in">
            <div className="text-xl font-semibold gradient-text mb-2">
              Courtney Buck
            </div>
            <p className="text-sm">
              Professional generalist bridging gaps across domains
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm animate-fade-in animate-delay-200">
            <a
              href="#about"
              className="hover:text-neutral-200 transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              className="hover:text-neutral-200 transition-colors"
            >
              Work
            </a>
            <a
              href="#contact"
              className="hover:text-neutral-200 transition-colors"
            >
              Contact
            </a>
            <a
              href="https://linkedin.com/in/courtneybuck"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/courtneybuck"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neutral-200 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-sm animate-fade-in animate-delay-400">
          <p>
            © {new Date().getFullYear()} Courtney Buck. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 