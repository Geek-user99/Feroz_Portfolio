import {useEffect, useState} from 'react';
import {motion} from 'motion/react';
import {ContactForm} from '../components/ContactForm';
import {Footer, Header, SectionHeading, WhatsAppIcon} from '../components/Layout';
import {
  EASE_EDITORIAL,
  HeroItem,
  Reveal,
  StaggerGrid,
  StaggerItem,
} from '../components/MotionPrimitives';
import {
  EXPERTISE_AREAS,
  MARQUEE_LOGOS,
  MOTION_WORKS,
  PROJECTS,
  WHATSAPP_NUMBER,
  WHATSAPP_URL,
  getProjectBySlug,
} from '../data/portfolio';
import {assetUrl} from '../lib/assets';
import {Link} from '../lib/router';

const ROLE_TEXT = 'Graphic & Motion Designer';

function LoopingRoleTypewriter() {
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<'typing' | 'pauseFull' | 'deleting' | 'pauseEmpty'>('typing');

  useEffect(() => {
    let delay = 65;
    if (phase === 'typing') {
      if (count >= ROLE_TEXT.length) {
        const t = window.setTimeout(() => setPhase('pauseFull'), 2000);
        return () => window.clearTimeout(t);
      }
      delay = 65;
      const t = window.setTimeout(() => setCount((c) => c + 1), delay);
      return () => window.clearTimeout(t);
    }

    if (phase === 'pauseFull') {
      const t = window.setTimeout(() => setPhase('deleting'), 200);
      return () => window.clearTimeout(t);
    }

    if (phase === 'deleting') {
      if (count <= 0) {
        const t = window.setTimeout(() => setPhase('pauseEmpty'), 350);
        return () => window.clearTimeout(t);
      }
      delay = 36;
      const t = window.setTimeout(() => setCount((c) => c - 1), delay);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => setPhase('typing'), 250);
    return () => window.clearTimeout(t);
  }, [count, phase]);

  return (
    <p
      className="display mt-5 min-h-[1.3em] text-xl text-muted-foreground md:text-2xl"
      aria-label={ROLE_TEXT}
    >
      <span className="typewriter-caret inline-block">
        {ROLE_TEXT.slice(0, count)}
      </span>
    </p>
  );
}

function WorkBand({
  title,
  slug,
  images,
}: {
  title: string;
  slug: string;
  images: string[];
}) {
  return (
    <section className="work-band border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <Reveal className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-6">
          <div>
            <p className="label !text-accent">Selected client work</p>
            <h2 className="display mt-3 text-4xl sm:text-5xl md:text-7xl">
              {title}
            </h2>
          </div>
          <Link to={`/work/${slug}`} className="btn-ghost hidden sm:inline-flex">
            See More
          </Link>
        </Reveal>

        <StaggerGrid
          className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5"
          stagger={0.07}
        >
          {images.slice(0, 4).map((imgSrc, index) => (
            <StaggerItem key={imgSrc}>
              <Link to={`/work/${slug}`} className="work-tile group">
                <img
                  src={imgSrc}
                  alt={`${title} selected work ${index + 1}`}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                />
                <span className="work-tile-index label">0{index + 1}</span>
              </Link>
            </StaggerItem>
          ))}
        </StaggerGrid>

        <Reveal delay={0.15}>
          <Link to={`/work/${slug}`} className="btn-ghost mt-6 sm:hidden">
            See More
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

export function HomePage() {
  const pran = getProjectBySlug('pran-mustard-oil');
  const rfl = getProjectBySlug('rfl');
  const akij = getProjectBySlug('sunshine');
  const deshbandhu = getProjectBySlug('deshbandhu-group');
  const frutika = getProjectBySlug('frutika');

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero */}
        <section className="hero-section mx-auto max-w-[1400px] px-5 pt-12 pb-12 md:px-10 md:pt-20 md:pb-20">
          <div className="grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <HeroItem delay={0.04}>
                <p className="display text-2xl !text-accent sm:text-3xl">
                  HI, I&apos;M
                </p>
              </HeroItem>

              <HeroItem delay={0.1}>
                <h1 className="display mt-5 max-w-[11ch] text-5xl sm:text-7xl md:text-[5.1vw]">
                  Alamgir Sordar Feroz
                </h1>
              </HeroItem>

              <HeroItem delay={0.18}>
                <LoopingRoleTypewriter />
              </HeroItem>

              <HeroItem delay={0.24}>
                <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Brand, packaging and campaign visuals for consumer brands in
                  Bangladesh — including PRAN, RFL, AKIJ and Deshbandhu Group.
                </p>
              </HeroItem>

              <HeroItem delay={0.3}>
                <div className="mt-9 flex flex-wrap gap-4">
                  <Link to="/work" className="btn-primary">
                    View Portfolio
                  </Link>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-ghost"
                  >
                    WhatsApp Me
                  </a>
                </div>
              </HeroItem>

              <HeroItem delay={0.36}>
                <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
                  <div>
                    <dt className="label">Projects</dt>
                    <dd className="display mt-1 text-3xl tabular-nums">200+</dd>
                  </div>
                  <div>
                    <dt className="label">Brands</dt>
                    <dd className="display mt-1 text-3xl tabular-nums">
                      {PROJECTS.length - 1}
                    </dd>
                  </div>
                  <div>
                    <dt className="label">Disciplines</dt>
                    <dd className="display mt-1 text-3xl tabular-nums">
                      {EXPERTISE_AREAS.length}
                    </dd>
                  </div>
                </dl>
              </HeroItem>
            </div>

            <motion.div
              initial={{opacity: 0, scale: 0.96, y: 20}}
              animate={{opacity: 1, scale: 1, y: 0}}
              transition={{duration: 0.75, delay: 0.14, ease: EASE_EDITORIAL}}
              className="md:col-span-5"
            >
              <div className="portrait-stage">
                <img
                  src={assetUrl('/assets/hero-feroz.png')}
                  alt="Alamgir Sordar Feroz"
                  fetchPriority="high"
                  className="portrait-img"
                  referrerPolicy="no-referrer"
                />
                <motion.span
                  initial={{scaleX: 0}}
                  animate={{scaleX: 1}}
                  transition={{duration: 0.6, delay: 0.45, ease: EASE_EDITORIAL}}
                  className="portrait-line origin-left"
                  aria-hidden="true"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Brand Logo Marquee — transparent, enlarged */}
        <section
          className="clients-strip border-y border-border py-10"
          aria-label="Selected clients"
        >
          <Reveal>
            <p className="label mb-7 text-center !text-accent">
              Trusted across leading brands
            </p>
          </Reveal>
          <div className="marquee">
            <div className="marquee-track">
              {[...MARQUEE_LOGOS, ...MARQUEE_LOGOS].map((logo, idx) => (
                <div
                  key={`${logo.name}-${idx}`}
                  className="client-logo-card"
                  aria-hidden={idx >= MARQUEE_LOGOS.length}
                >
                  <img
                    src={logo.image}
                    alt={idx < MARQUEE_LOGOS.length ? `${logo.name} logo` : ''}
                    loading={idx < MARQUEE_LOGOS.length ? 'eager' : 'lazy'}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Areas of work (01 / Expertise) */}
        <section id="expertise" className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <SectionHeading n="01" title="Expertise" lead="Areas of work." />
            <StaggerGrid
              className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
              stagger={0.06}
            >
              {EXPERTISE_AREAS.map((area) => (
                <StaggerItem key={area.n} className="bg-background">
                  <article className="group h-full bg-background p-8 transition-colors duration-300 hover:bg-surface">
                    <p className="label !text-accent">{area.n}</p>
                    <h3 className="display mt-6 text-2xl transition-transform duration-300 group-hover:translate-x-1">
                      {area.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {area.body}
                    </p>
                  </article>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </section>

        {/* Work in motion (02 / Selected Work) */}
        <section id="work" className="border-t border-border bg-surface">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <Reveal className="grid gap-6 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="label !text-accent">02 / Selected Work</p>
                <h2 className="display mt-4 text-5xl sm:text-6xl md:text-8xl">
                  Work in motion.
                </h2>
              </div>
              <p className="text-lg leading-relaxed text-muted-foreground md:col-span-4">
                Campaign films, product stories and social creative from the
                motion portfolio.
              </p>
            </Reveal>

            <StaggerGrid
              className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
              stagger={0.08}
            >
              {MOTION_WORKS.map((item) => (
                <StaggerItem key={item.id}>
                  <a
                    href={`https://www.youtube.com/watch?v=${item.id}`}
                    target="_blank"
                    rel="noreferrer"
                    className="motion-card group"
                  >
                    <div className="relative aspect-video overflow-hidden bg-background">
                      <img
                        src={item.image}
                        alt={`${item.title} video`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span
                        className="play-mark transition-transform duration-300 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        ▶
                      </span>
                    </div>
                    <h3 className="display mt-4 text-lg leading-tight transition-colors group-hover:text-accent">
                      {item.title}
                    </h3>
                    <p className="label mt-2">Motion / Play film</p>
                  </a>
                </StaggerItem>
              ))}
            </StaggerGrid>

            <Reveal delay={0.15}>
              <a
                href="https://enchanting-cobbler-c91270.netlify.app/motion"
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-10"
              >
                See More Motion
              </a>
            </Reveal>
          </div>
        </section>

        {/* Client Work Bands: PRAN (2 & 3 swapped), RFL, AKIJ, DESHBANDHU GROUP, FRUTIKA */}
        {pran && (
          <WorkBand title="PRAN" slug={pran.slug} images={pran.gallery} />
        )}
        {rfl && <WorkBand title="RFL" slug={rfl.slug} images={rfl.gallery} />}
        {akij && (
          <WorkBand title="AKIJ" slug={akij.slug} images={akij.gallery} />
        )}
        {deshbandhu && (
          <WorkBand
            title="DESHBANDHU GROUP"
            slug={deshbandhu.slug}
            images={deshbandhu.gallery}
          />
        )}
        {frutika && (
          <WorkBand
            title="FRUTIKA"
            slug={frutika.slug}
            images={frutika.gallery}
          />
        )}

        {/* Archive CTA */}
        <section className="portfolio-cta border-t border-border">
          <Reveal className="mx-auto grid max-w-[1400px] gap-8 px-5 py-20 md:grid-cols-12 md:items-end md:px-10 md:py-28">
            <div className="md:col-span-8">
              <p className="label !text-accent">Complete archive</p>
              <h2 className="display mt-4 text-5xl sm:text-6xl md:text-8xl">
                There&apos;s more to see.
              </h2>
            </div>
            <div className="md:col-span-4">
              <p className="mb-7 text-muted-foreground">
                Explore the full collection of packaging, key visuals and
                campaign work.
              </p>
              <Link to="/work" className="btn-primary">
                View All Works
              </Link>
            </div>
          </Reveal>
        </section>

        {/* Contact Section */}
        <section id="contact" className="border-t border-border">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
            <SectionHeading
              n="03"
              title="Contact"
              lead="Let's work together."
            />
            <div className="mt-12 grid gap-12 md:grid-cols-12">
              <Reveal className="md:col-span-5">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Available for brand identity, packaging artwork, campaign key
                  visuals, and motion design commissions.
                </p>

                <div className="mt-8 border-t border-border pt-6">
                  <p className="label !text-accent">Direct WhatsApp</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-3 text-xl font-semibold text-foreground transition-colors hover:text-accent"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                      <WhatsAppIcon className="h-5 w-5" />
                    </span>
                    <span className="tabular-nums">{WHATSAPP_NUMBER}</span>
                  </a>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary mt-8"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  <span>Let&apos;s Talk on WhatsApp</span>
                </a>
              </Reveal>

              <Reveal delay={0.1} className="md:col-span-7">
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
