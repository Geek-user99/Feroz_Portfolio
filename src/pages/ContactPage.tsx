import {ContactForm} from '../components/ContactForm';
import {Footer, Header, SectionHeading, WhatsAppIcon} from '../components/Layout';
import {HeroItem} from '../components/MotionPrimitives';
import {SeoHead} from '../components/SeoHead';
import {WHATSAPP_NUMBER, WHATSAPP_URL} from '../data/portfolio';

export function ContactPage() {
  return (
    <div className="min-h-screen">
      <SeoHead
        title="Contact — Alamgir Sordar Feroz"
        description="Connect with Graphic & Motion Designer Alamgir Sordar Feroz on WhatsApp (+880 1623-670640) for packaging, key visuals, and brand campaign commissions."
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: 'Contact Alamgir Sordar Feroz',
          mainEntity: {
            '@type': 'Person',
            name: 'Alamgir Sordar Feroz',
            telephone: '+8801623670640',
          },
        }}
      />
      <Header />

      <main className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-24">
        <SectionHeading
          n="04"
          title="Contact"
          lead="Let's work together."
          as="h1"
        />

        <div className="mt-12 grid gap-12 md:grid-cols-12">
          <HeroItem delay={0.08} className="md:col-span-5">
            <p className="text-lg leading-relaxed text-muted-foreground">
              Available for brand packaging, campaign key visuals, and motion
              design projects. Reach out directly on WhatsApp for fast
              collaboration.
            </p>

            <dl className="mt-10 border-t border-border">
              <div className="flex items-center justify-between gap-4 border-b border-border py-5">
                <dt className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
                    <WhatsAppIcon className="h-5 w-5" />
                  </span>
                  <span className="label">WhatsApp</span>
                </dt>
                <dd>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="label !text-foreground tabular-nums transition-colors hover:!text-accent"
                  >
                    {WHATSAPP_NUMBER}
                  </a>
                </dd>
              </div>
            </dl>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-primary mt-8"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>
          </HeroItem>

          <HeroItem delay={0.16} className="md:col-span-7">
            <ContactForm />
          </HeroItem>
        </div>
      </main>

      <Footer />
    </div>
  );
}
