import {useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {BrandLogoBadge} from '../components/BrandLogoBadge';
import {Footer, Header, SectionHeading} from '../components/Layout';
import {
  EASE_EDITORIAL,
  HeroItem,
  Reveal,
  StaggerGrid,
  StaggerItem,
} from '../components/MotionPrimitives';
import {ABOUT_CLIENTS, PROJECTS} from '../data/portfolio';
import {Link} from '../lib/router';

export function AboutPage() {
  const [hoveredClient, setHoveredClient] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionHeading
          n="01"
          title="About"
          lead="Design work built around brands, packaging and campaigns."
        />

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <HeroItem delay={0.08} className="md:col-span-5">
            <div className="max-w-sm border border-border bg-surface">
              <img
                src="/feroz-portrait.png"
                alt="Portrait of Alamgir Sordar Feroz"
                className="w-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </HeroItem>

          <HeroItem delay={0.14} className="md:col-span-7">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Alamgir Sordar Feroz is a graphic and motion designer based in
              Bangladesh. Over 200+ projects, his work spans packaging artwork,
              campaign key visuals, retail displays, and social-first motion
              creative for leading FMCG and industrial consumer brands including
              PRAN, RFL, AKIJ, and Deshbandhu Group.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Every project focuses on shelf clarity, visual consistency across
              print and digital placements, and storytelling tailored for the
              Bangladeshi market.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link to="/work" className="btn-primary">
                View Portfolio
              </Link>
              <Link to="/contact" className="btn-ghost">
                Get in Touch
              </Link>
            </div>
          </HeroItem>
        </div>

        {/* Selected Clients with interactive logo reveal on hover/focus */}
        <div className="mt-20 grid gap-12 border-t border-border pt-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label">Selected Clients</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Hover any brand name to preview its mark.
            </p>
          </Reveal>

          <ul className="md:col-span-8">
            {ABOUT_CLIENTS.map((client, idx) => {
              const isHovered = hoveredClient === client.name;
              const rowContent = (
                <div className="flex min-h-[5.5rem] items-center justify-between gap-4 py-3">
                  <span
                    className={`display text-2xl transition-all duration-300 md:text-3xl ${
                      isHovered
                        ? 'translate-x-2 text-accent'
                        : 'text-foreground'
                    }`}
                  >
                    {client.name}
                  </span>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{opacity: 0, scale: 0.9, x: 10}}
                        animate={{opacity: 1, scale: 1, x: 0}}
                        exit={{opacity: 0, scale: 0.92, x: 6}}
                        transition={{duration: 0.22, ease: EASE_EDITORIAL}}
                      >
                        <BrandLogoBadge brand={client.name} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );

              return (
                <motion.li
                  key={client.name}
                  initial={{opacity: 0, y: 12}}
                  whileInView={{opacity: 1, y: 0}}
                  viewport={{once: true, amount: 0.2}}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.03,
                    ease: EASE_EDITORIAL,
                  }}
                  onMouseEnter={() => setHoveredClient(client.name)}
                  onMouseLeave={() => setHoveredClient(null)}
                  onFocus={() => setHoveredClient(client.name)}
                  onBlur={() => setHoveredClient(null)}
                  className="border-b border-border"
                >
                  {client.slug ? (
                    <Link
                      to={`/work/${client.slug}`}
                      className="block focus:outline-none"
                    >
                      {rowContent}
                    </Link>
                  ) : (
                    <div
                      tabIndex={0}
                      className="cursor-default focus:outline-none"
                    >
                      {rowContent}
                    </div>
                  )}
                </motion.li>
              );
            })}
          </ul>
        </div>

        {/* Projects Directory */}
        <div className="mt-20 grid gap-12 border-t border-border pt-14 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label">Projects</p>
          </Reveal>
          <StaggerGrid
            className="grid gap-3 sm:grid-cols-2 md:col-span-8"
            stagger={0.05}
          >
            {PROJECTS.map((project) => (
              <StaggerItem key={project.slug}>
                <Link
                  to={`/work/${project.slug}`}
                  className="display block border border-border px-4 py-3 text-lg transition-colors hover:border-accent hover:text-accent"
                >
                  {project.title}
                </Link>
              </StaggerItem>
            ))}
          </StaggerGrid>
        </div>
      </main>

      <Footer />
    </div>
  );
}
