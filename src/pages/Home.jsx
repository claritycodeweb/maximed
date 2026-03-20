import { useTranslation } from 'react-i18next'
import SEO from '../hooks/useSEO'
import ExternalLink from '../components/ExternalLink'
import ContactForm from '../components/ContactForm'
import MentionsList from '../components/MentionsList'
import { useLanguage } from '../hooks/useLanguage'
import { useScrollReveal, useStaggerReveal } from '../hooks/useScrollReveal'

function Section({ children, className = '', dark, ...props }) {
  return (
    <section className={`${dark ? 'bg-dark text-white' : ''} ${className}`} {...props}>
      {children}
    </section>
  )
}

function Container({ children, className = '' }) {
  return (
    <div className={`w-[min(100%-48px,1200px)] max-[640px]:w-[min(100%-28px,1200px)] mx-auto ${className}`}>
      {children}
    </div>
  )
}

function SectionLabel({ children, dark }) {
  return (
    <div className="mb-8">
      <h2 className={`text-[.78rem] tracking-[.22em] uppercase font-bold m-0 mb-3 ${dark ? 'text-accent-light' : 'text-accent'}`}>{children}</h2>
      <div className={`w-10 h-px ${dark ? 'bg-accent-light/40' : 'bg-accent/40'}`} />
    </div>
  )
}

export default function Home() {
  const { t } = useTranslation()
  const { lang } = useLanguage()

  const aboutRef = useScrollReveal()
  const advisoryRef = useScrollReveal()
  const approachRef = useScrollReveal()
  const networkRef = useScrollReveal()
  const networkTagsRef = useStaggerReveal(50)
  const activitiesRef = useScrollReveal()
  const mentionsRef = useScrollReveal()
  const contactRef = useScrollReveal()

  return (
    <>
      <SEO
        page="home"
        title={t('meta.home.title')}
        description={t('meta.home.description')}
      />

      {/* JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@graph': [
              {
                '@type': 'Person',
                '@id': `https://www.danibert.ch/${lang === 'fr' ? 'fr/' : ''}#person`,
                name: 'Maxime Danibert',
                url: `https://www.danibert.ch/${lang === 'fr' ? 'fr/' : ''}`,
                jobTitle: t('hero.subtitle'),
                address: {
                  '@type': 'PostalAddress',
                  streetAddress: 'Avenue de Tivoli 26',
                  postalCode: '1007',
                  addressLocality: 'Lausanne',
                  addressCountry: 'CH',
                },
                sameAs: [
                  'https://www.linkedin.com/in/danibert/',
                  'https://x.com/MaxDanibert',
                  'https://www.instagram.com/maximedanibert/',
                  'https://www.facebook.com/danibertmaxime',
                ],
              },
              {
                '@type': 'WebSite',
                '@id': 'https://www.danibert.ch/#website',
                url: `https://www.danibert.ch/${lang === 'fr' ? 'fr/' : ''}`,
                name: 'DANIBERT',
                inLanguage: lang === 'fr' ? 'fr-CH' : 'en-GB',
              },
            ],
          }),
        }}
      />

      {/* Hero */}
      <Section className="pt-[120px] pb-[100px] max-[640px]:pt-[80px] max-[640px]:pb-[60px] relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-[45%] h-full bg-gradient-to-l from-surface-soft/60 to-transparent max-[920px]:hidden" />
        <Container className="relative flex items-start gap-20 max-[920px]:flex-col max-[920px]:gap-12">
          <div className="flex-1 max-w-content">
            <p className="animate-fade-up text-[.82rem] text-accent font-semibold tracking-[.18em] uppercase m-0 mb-8" style={{ animationDelay: '0.1s' }}>{t('hero.eyebrow')}</p>
            <h1 className="animate-fade-up m-0 mb-5 text-[clamp(2.6rem,5.2vw,4.5rem)] leading-[1] tracking-[-0.04em] font-bold" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('hero.name')}
            </h1>
            <p className="animate-fade-up m-0 mb-7 text-[clamp(1.1rem,2.2vw,1.35rem)] text-muted font-medium tracking-[-0.01em]" style={{ animationDelay: '0.35s', opacity: 0 }}>
              {t('hero.subtitle')}
            </p>
            <div className="animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
              <p className="m-0 mb-4 text-[1.02rem] text-muted leading-[1.7]">{t('hero.intro1')}</p>
              <p className="m-0 text-[1.02rem] text-muted leading-[1.7]">{t('hero.intro2')}</p>
            </div>
            <div className="animate-fade-up mt-8" style={{ animationDelay: '0.55s', opacity: 0 }}>
              <a href="#contact" className="group inline-flex items-center gap-3 py-4 px-7 rounded-card-sm bg-accent text-white no-underline font-semibold tracking-[.02em] hover:bg-accent-dark transition-all duration-300 hover:shadow-glow">
                {t('hero.cta')}
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 20 20" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M4 10h12M12 6l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>
          <div className="shrink-0 max-[920px]:mx-auto animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative">
              <img
                src="/max-avatar.png"
                alt="Maxime Danibert"
                className="w-[240px] h-[240px] max-[640px]:w-[180px] max-[640px]:h-[180px] rounded-full object-cover object-top border-[3px] border-line shadow-card"
              />
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-accent/15 max-[640px]:-inset-2" />
              <div className="absolute -inset-7 rounded-full border border-accent/[.06] max-[640px]:-inset-5" />
            </div>
          </div>
        </Container>
      </Section>

      {/* About */}
      <Section className="py-28 max-[640px]:py-20 bg-surface-soft" id="about">
        <Container>
          <div ref={aboutRef} className="reveal">
            <SectionLabel>{t('about.title')}</SectionLabel>
            <div className="max-w-content">
              <p className="m-0 mb-5 text-muted text-[1.02rem] leading-[1.75]">{t('about.p1')}</p>
              <p className="m-0 mb-5 text-muted text-[1.02rem] leading-[1.75]">{t('about.p2')}</p>
              <p className="m-0 text-muted text-[1.02rem] leading-[1.75]">{t('about.p3')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Advisory + Approach */}
      <Section className="py-28 max-[640px]:py-20" id="advisory">
        <Container className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-12">
          <div ref={advisoryRef} className="reveal">
            <SectionLabel>{t('advisory.title')}</SectionLabel>
            <div className="bg-surface border border-line rounded-card p-8 max-[640px]:p-6 shadow-card">
              <p className="m-0 mb-5 text-[1.2rem] font-serif italic tracking-[-0.01em]">{t('advisory.subtitle')}</p>
              <ul className="m-0 p-0 list-none grid gap-4">
                {t('advisory.items', { returnObjects: true }).map((item, i) => (
                  <li key={i} className="relative pl-5 text-muted text-[.98rem] leading-[1.6] before:content-[''] before:absolute before:left-0 before:top-[.72em] before:w-2 before:h-px before:bg-accent/60">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div ref={approachRef} className="reveal" style={{ transitionDelay: '150ms' }}>
            <SectionLabel>{t('approach.title')}</SectionLabel>
            <div className="bg-surface border border-line rounded-card p-8 max-[640px]:p-6 shadow-card">
              <p className="m-0 mb-5 text-muted text-[.98rem] leading-[1.75]">{t('approach.p1')}</p>
              <p className="m-0 mb-5 text-muted text-[.98rem] leading-[1.75]">{t('approach.p2')}</p>
              <p className="m-0 text-muted text-[.98rem] leading-[1.75]">{t('approach.p3')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Network - Dark section for contrast */}
      <Section dark className="py-28 max-[640px]:py-20">
        <Container className="grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-12">
          <div ref={networkRef} className="reveal">
            <SectionLabel dark>{t('network.title')}</SectionLabel>
            <p className="max-w-content m-0 text-white/60 text-[1.02rem] leading-[1.75]">{t('network.intro')}</p>
          </div>
          <div ref={networkTagsRef} className="flex flex-wrap gap-3">
            {t('network.domains', { returnObjects: true }).map((d, i) => (
              <span
                key={i}
                data-reveal
                className="reveal inline-flex items-center py-[10px] px-4 border border-dark-line rounded-card-sm bg-dark-surface text-white/70 text-[.92rem] font-medium hover:border-accent/40 hover:text-accent-light transition-all duration-300"
              >
                {d}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Activities */}
      <Section className="py-28 max-[640px]:py-20" id="current-activities">
        <Container>
          <div ref={activitiesRef} className="reveal">
            <SectionLabel>{t('activities.title')}</SectionLabel>
            <div className="flex flex-wrap gap-4">
              <ExternalLink href="https://www.lookmove.ch">Lookmove</ExternalLink>
              <ExternalLink href="https://data.lookmove.ch">Lookmove Data</ExternalLink>
              <ExternalLink href="https://www.yatzo.com">Yatzo</ExternalLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mentions */}
      <Section className="py-28 max-[640px]:py-20 bg-surface-soft" id="selected-mentions">
        <Container>
          <div ref={mentionsRef} className="reveal">
            <SectionLabel>{t('mentions.title')}</SectionLabel>
            <p className="max-w-content text-muted text-[1.02rem] leading-[1.75]">{t('mentions.intro')}</p>
          </div>
          <MentionsList />
        </Container>
      </Section>

      {/* Contact */}
      <Section className="py-28 max-[640px]:py-20" id="contact">
        <Container className="grid grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-12">
          <div ref={contactRef} className="reveal">
            <SectionLabel>{t('contact.title')}</SectionLabel>
            <p className="max-w-content text-muted text-[1.02rem] leading-[1.75] mb-6">{t('contact.intro')}</p>
            <div className="hidden max-[920px]:hidden min-[921px]:block">
              <div className="text-[.92rem] text-muted">
                <div className="font-semibold text-text mb-1">Maxime Danibert</div>
                <div>Avenue de Tivoli 26</div>
                <div>1007 Lausanne, Switzerland</div>
              </div>
            </div>
          </div>
          <ContactForm />
        </Container>
      </Section>
    </>
  )
}
