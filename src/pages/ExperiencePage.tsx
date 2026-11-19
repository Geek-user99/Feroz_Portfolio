import {Footer, Header, SectionHeading} from '../components/Layout';
import {
  HeroItem,
  Reveal,
  StaggerGrid,
  StaggerItem,
} from '../components/MotionPrimitives';
import {ABOUT_CLIENTS, EXPERTISE_AREAS} from '../data/portfolio';
import {Link} from '../lib/router';

export function ExperiencePage() {
  const brandEngagements = ABOUT_CLIENTS.filter((c) => Boolean(c.slug));

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-[1600px] px-5 md:px-10">
        <div className="py-14">
          <SectionHeading n="03" title="Experience" />
          <HeroItem delay={0.08}>
            <h1 className="display mt-6 text-6xl md:text-[8vw]">Experience</h1>
          </HeroItem>
        </div>

        <div className="rule grid grid-cols-1 gap-10 py-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label">Focus &amp; Craft</p>
          </Reveal>
          <div className="md:col-span-8">
            <Reveal>
              <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
                200+ completed packaging, key visual, print production, and
                motion design engagements across Bangladesh&apos;s leading
                consumer goods, beverage, household, and industrial brands.
              </p>
            </Reveal>
            <StaggerGrid
              className="mt-8 grid gap-6 sm:grid-cols-2"
              stagger={0.06}
            >
              {EXPERTISE_AREAS.map((area) => (
                <StaggerItem key={area.n}>
                  <div className="h-full border border-border bg-surface p-6 transition-colors hover:border-accent">
                    <p className="label !text-accent">{area.n}</p>
                    <h2 className="display mt-3 text-xl">{area.title}</h2>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {area.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGrid>
          </div>
        </div>

        <div className="rule grid grid-cols-1 gap-10 py-12 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="label">Brand Engagements</p>
          </Reveal>
          <StaggerGrid className="md:col-span-8" stagger={0.05}>
            {brandEngagements.map((brand) => (
              <StaggerItem
                key={brand.name}
                className="border-b border-border"
              >
                <Link
                  to={`/work/${brand.slug}`}
                  className="display group flex items-center justify-between py-4 text-2xl transition-colors hover:text-accent md:text-4xl"
                >
                  <span className="transition-transform duration-300 group-hover:translate-x-2">
                    {brand.name}
                  </span>
                  <span className="label transition-colors group-hover:!text-accent">
                    View Work →
                  </span>
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
