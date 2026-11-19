import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Footer, Header, SectionHeading} from '../components/Layout';
import {EASE_EDITORIAL, Reveal} from '../components/MotionPrimitives';
import {PROJECTS, WORK_FILTERS} from '../data/portfolio';
import {Link} from '../lib/router';

export function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.client === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionHeading n="03" title="Portfolio" lead="Work" />
        <Reveal delay={0.08}>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Packaging, key visuals and campaign material produced for consumer
            brands.
          </p>
        </Reveal>

        {/* Clean brand filters — each brand isolated accurately */}
        <Reveal delay={0.14}>
          <div
            className="mt-10 flex flex-wrap gap-3"
            role="tablist"
            aria-label="Filter projects by brand"
          >
            {WORK_FILTERS.map((brand) => {
              const isSelected = activeFilter === brand;
              return (
                <button
                  key={brand}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(brand)}
                  className={isSelected ? 'btn-primary' : 'btn-ghost'}
                >
                  {brand}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Animated Project Cards Grid */}
        <motion.div
          layout
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{opacity: 0, y: 18, scale: 0.97}}
                animate={{opacity: 1, y: 0, scale: 1}}
                exit={{opacity: 0, scale: 0.96}}
                transition={{
                  duration: 0.4,
                  delay: Math.min(idx * 0.04, 0.24),
                  ease: EASE_EDITORIAL,
                }}
              >
                <Link
                  to={`/work/${project.slug}`}
                  className="group block border border-border transition-colors hover:border-accent"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-surface">
                    <img
                      src={project.cover}
                      alt={`${project.title} project artwork`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-baseline justify-between gap-4 p-5">
                    <div>
                      <h3 className="display text-xl transition-colors group-hover:text-accent">
                        {project.title}
                      </h3>
                      <p className="label mt-2">{project.client}</p>
                    </div>
                    <span className="label tabular-nums transition-colors group-hover:!text-accent">
                      {project.gallery.length} img
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
