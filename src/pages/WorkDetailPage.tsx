import {useCallback, useEffect, useState} from 'react';
import {AnimatePresence, motion} from 'motion/react';
import {Footer, Header} from '../components/Layout';
import {
  EASE_EDITORIAL,
  HeroItem,
  StaggerGrid,
  StaggerItem,
} from '../components/MotionPrimitives';
import {SeoHead} from '../components/SeoHead';
import {PROJECTS, getProjectBySlug} from '../data/portfolio';
import {Link} from '../lib/router';

function Lightbox({
  images,
  index,
  title,
  onClose,
  onIndexChange,
}: {
  images: string[];
  index: number | null;
  title: string;
  onClose: () => void;
  onIndexChange: (nextIndex: number) => void;
}) {
  const step = useCallback(
    (delta: number) => {
      if (index === null) return;
      onIndexChange((index + delta + images.length) % images.length);
    },
    [index, images.length, onIndexChange],
  );

  useEffect(() => {
    if (index === null) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'ArrowLeft') step(-1);
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [index, onClose, step]);

  return (
    <AnimatePresence>
      {index !== null && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} image viewer`}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.22, ease: EASE_EDITORIAL}}
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-md"
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4 md:px-10">
            <span className="label tabular-nums">
              {title} — {String(index + 1).padStart(2, '0')} /{' '}
              {String(images.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              className="label cursor-pointer hover:!text-accent"
              aria-label="Close viewer"
            >
              Close [esc]
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center justify-center px-5 py-6 md:px-10">
            <AnimatePresence mode="wait">
              <motion.img
                key={images[index]}
                src={images[index]}
                alt={`${title} — image ${index + 1}`}
                referrerPolicy="no-referrer"
                initial={{opacity: 0, scale: 0.97}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.97}}
                transition={{duration: 0.25, ease: EASE_EDITORIAL}}
                className="max-h-full max-w-full object-contain"
              />
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-10 border-t border-border py-5">
            <button
              type="button"
              onClick={() => step(-1)}
              className="label cursor-pointer hover:!text-accent"
            >
              ← Prev
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              className="label cursor-pointer hover:!text-accent"
            >
              Next →
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function WorkDetailPage({slug}: {slug: string}) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const project = getProjectBySlug(slug);

  useEffect(() => {
    setLightboxIndex(null);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="mx-auto max-w-[1400px] px-5 py-24 md:px-10">
          <p className="label !text-accent">404 / Not Found</p>
          <h1 className="display mt-4 text-4xl md:text-6xl">
            Project not found.
          </h1>
          <Link to="/work" className="btn-primary mt-8">
            Back to All Works
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const currentIdx = PROJECTS.findIndex((p) => p.slug === project.slug);
  const safeIdx = currentIdx === -1 ? 0 : currentIdx;
  const prevProject =
    PROJECTS[(safeIdx - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(safeIdx + 1) % PROJECTS.length];

  return (
    <div className="min-h-screen">
      <SeoHead
        title={`${project.title} — Alamgir Sordar Feroz`}
        description={`${project.title} brand packaging, key visuals, and campaign artwork designed for ${project.client} by Alamgir Sordar Feroz.`}
        image={project.cover}
        imageAlt={`${project.title} design showcase`}
        type="article"
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          creator: {
            '@type': 'Person',
            name: 'Alamgir Sordar Feroz',
          },
          about: project.client,
          image: project.cover,
        }}
      />
      <Header />

      <main className="mx-auto max-w-[1600px] px-5 pt-10 md:px-10">
        <HeroItem delay={0.03} className="mb-6">
          <Link to="/work" className="label transition-colors hover:!text-accent">
            ← Back to Work
          </Link>
        </HeroItem>

        <HeroItem delay={0.08}>
          <header className="rule grid grid-cols-1 gap-6 pt-8 md:grid-cols-12">
            <span className="label !text-accent md:col-span-2">{project.id}</span>
            <h1 className="display text-5xl md:col-span-7 md:text-7xl">
              {project.title}
            </h1>
            <dl className="md:col-span-3">
              <dt className="label">Client</dt>
              <dd className="label mt-1 !text-foreground">
                {project.client || '—'}
              </dd>
              <dt className="label mt-4">Images</dt>
              <dd className="label mt-1 tabular-nums !text-foreground">
                {project.gallery.length}
              </dd>
            </dl>
          </header>
        </HeroItem>

        <StaggerGrid
          className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:gap-5"
          stagger={0.05}
        >
          {project.gallery.map((imgSrc, idx) => {
            const isHeroTile = idx === 0 || idx % 5 === 0;
            return (
              <StaggerItem
                key={imgSrc}
                className={isHeroTile ? 'md:col-span-6' : 'md:col-span-3'}
              >
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open ${project.title} image ${idx + 1}`}
                  className="group relative block w-full cursor-pointer overflow-hidden border border-border bg-surface text-left transition-colors hover:border-accent"
                >
                  <div className="aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={imgSrc}
                      alt={`${project.title} — project artwork ${idx + 1}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:opacity-85"
                    />
                  </div>
                  <span className="work-tile-index label tabular-nums">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <span className="label absolute bottom-3 left-3 bg-background/80 px-2 py-1 opacity-0 transition-opacity group-hover:opacity-100">
                    View
                  </span>
                </button>
              </StaggerItem>
            );
          })}
        </StaggerGrid>

        <nav
          className="rule mt-16 flex items-center justify-between py-8"
          aria-label="Project navigation"
        >
          <Link to={`/work/${prevProject.slug}`} className="group">
            <span className="label">Previous</span>
            <span className="display mt-1 block text-xl transition-colors group-hover:text-accent md:text-3xl">
              {prevProject.title}
            </span>
          </Link>

          <Link to={`/work/${nextProject.slug}`} className="group text-right">
            <span className="label">Next</span>
            <span className="display mt-1 block text-xl transition-colors group-hover:text-accent md:text-3xl">
              {nextProject.title}
            </span>
          </Link>
        </nav>
      </main>

      <Lightbox
        images={project.gallery}
        index={lightboxIndex}
        title={project.title}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />

      <Footer />
    </div>
  );
}
