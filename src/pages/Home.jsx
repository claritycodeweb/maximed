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
    <div className={`w-[min(100%-56px,1200px)] max-[640px]:w-[min(100%-32px,1200px)] mx-auto ${className}`}>
      {children}
    </div>
  )
}

function SectionLabel({ children, dark, number }) {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-4">
        {number && (
          <span className={`text-[.72rem] font-mono tracking-wider ${dark ? 'text-accent-light/40' : 'text-accent/40'}`}>
            {number}
          </span>
        )}
        <h2 className={`text-[.76rem] tracking-[.24em] uppercase font-bold m-0 ${dark ? 'text-accent-light' : 'text-accent'}`}>{children}</h2>
      </div>
      <div className={`h-px ${dark ? 'bg-gradient-to-r from-accent-light/30 to-transparent' : 'bg-gradient-to-r from-accent/30 to-transparent'}`} style={{ maxWidth: '80px' }} />
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

      {/* Hero — Editorial asymmetric layout */}
      <Section className="relative pt-[140px] pb-[120px] max-[640px]:pt-[100px] max-[640px]:pb-[80px] overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 gradient-mesh pointer-events-none" />
        <div className="absolute top-[15%] right-[8%] w-[300px] h-[300px] rounded-full bg-accent/[.03] blur-[80px] max-[920px]:hidden" />
        <div className="absolute bottom-[10%] left-[5%] w-[200px] h-[200px] rounded-full bg-sage/[.03] blur-[60px] max-[920px]:hidden" />

        {/* Decorative geometric lines */}
        <div className="absolute top-[50%] right-0 w-[40%] h-px bg-gradient-to-l from-transparent via-line/30 to-transparent max-[920px]:hidden" />
        <div className="absolute top-0 right-[25%] w-px h-[60%] bg-gradient-to-b from-transparent via-line/20 to-transparent max-[920px]:hidden" />

        <Container className="relative flex items-start gap-24 max-[920px]:flex-col max-[920px]:gap-14">
          <div className="flex-1 max-w-content">
            {/* Eyebrow with decorative line */}
            <div className="animate-fade-up flex items-center gap-4 mb-10" style={{ animationDelay: '0.1s' }}>
              <div className="w-10 h-px bg-accent/50" />
              <p className="text-[.78rem] text-accent font-semibold tracking-[.22em] uppercase m-0">{t('hero.eyebrow')}</p>
            </div>

            {/* Name — dramatic serif typography */}
            <h1 className="animate-fade-up m-0 mb-6 text-[clamp(3rem,6vw,5.2rem)] leading-[0.95] tracking-[-0.04em] font-serif font-semibold" style={{ animationDelay: '0.2s', opacity: 0 }}>
              {t('hero.name')}
            </h1>

            {/* Subtitle — lighter weight for contrast */}
            <p className="animate-fade-up m-0 mb-9 text-[clamp(1.1rem,2vw,1.3rem)] text-muted font-light tracking-[.01em] leading-relaxed" style={{ animationDelay: '0.35s', opacity: 0 }}>
              {t('hero.subtitle')}
            </p>

            {/* Intro text with editorial leading */}
            <div className="animate-fade-up" style={{ animationDelay: '0.45s', opacity: 0 }}>
              <p className="m-0 mb-5 text-[1rem] text-muted leading-[1.85] font-light">{t('hero.intro1')}</p>
              <p className="m-0 text-[1rem] text-muted leading-[1.85] font-light">{t('hero.intro2')}</p>
            </div>

            {/* CTA */}
            <div className="animate-fade-up mt-10" style={{ animationDelay: '0.55s', opacity: 0 }}>
              <a href="#contact" className="group relative inline-flex items-center gap-3 py-4 px-8 rounded-card-sm bg-accent text-white no-underline font-semibold tracking-[.03em] overflow-hidden transition-all duration-400 hover:shadow-glow">
                <div className="absolute inset-0 bg-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <span className="relative z-10">{t('hero.cta')}</span>
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 20 20" className="relative z-10 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1.5">
                  <path d="M4 10h12M12 6l4 4-4 4" />
                </svg>
              </a>
            </div>
          </div>

          {/* Avatar with editorial treatment */}
          <div className="shrink-0 max-[920px]:mx-auto animate-scale-in" style={{ animationDelay: '0.3s', opacity: 0 }}>
            <div className="relative">
              {/* Outer decorative ring — slow rotation */}
              <div className="absolute -inset-10 max-[640px]:-inset-7 animate-spin-slow">
                <svg viewBox="0 0 280 280" fill="none" className="w-full h-full">
                  <circle cx="140" cy="140" r="138" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="text-accent/20" />
                </svg>
              </div>

              {/* Static decorative ring */}
              <div className="absolute -inset-5 max-[640px]:-inset-3 rounded-full border border-accent/10" />

              {/* Avatar */}
              <img
                src="/max-avatar.png"
                alt="Maxime Danibert"
                className="w-[260px] h-[260px] max-[640px]:w-[200px] max-[640px]:h-[200px] rounded-full object-cover object-top border-[3px] border-surface shadow-card"
              />

              {/* Floating accent dot */}
              <div className="absolute -bottom-2 -right-2 w-5 h-5 rounded-full bg-accent/80 animate-float shadow-glow-sm" />
            </div>
          </div>
        </Container>
      </Section>

      {/* About — Full width with editorial typography */}
      <Section className="py-32 max-[640px]:py-20 bg-surface-soft pattern-diagonal" id="about">
        <Container>
          <div ref={aboutRef} className="reveal">
            <SectionLabel number="01">{t('about.title')}</SectionLabel>
            <div className="max-w-content">
              <p className="m-0 mb-6 text-muted text-[1.02rem] leading-[1.85] font-light">{t('about.p1')}</p>
              <p className="m-0 mb-6 text-muted text-[1.02rem] leading-[1.85] font-light">{t('about.p2')}</p>
              <p className="m-0 text-muted text-[1.02rem] leading-[1.85] font-light">{t('about.p3')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Advisory + Approach — Glass cards with asymmetric grid */}
      <Section className="py-32 max-[640px]:py-20 relative" id="advisory">
        {/* Subtle background accent */}
        <div className="absolute top-[20%] left-[-5%] w-[300px] h-[300px] rounded-full bg-accent/[.03] blur-[100px] pointer-events-none" />

        <Container className="relative grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-14">
          <div ref={advisoryRef} className="reveal">
            <SectionLabel number="02">{t('advisory.title')}</SectionLabel>
            <div className="glass-card rounded-card p-9 max-[640px]:p-6 shadow-card">
              <p className="m-0 mb-6 text-[1.35rem] font-serif italic tracking-[-0.02em] leading-snug">{t('advisory.subtitle')}</p>
              <ul className="m-0 p-0 list-none grid gap-4">
                {t('advisory.items', { returnObjects: true }).map((item, i) => (
                  <li key={i} className="relative pl-6 text-muted text-[.95rem] leading-[1.7] font-light before:content-[''] before:absolute before:left-0 before:top-[.75em] before:w-3 before:h-px before:bg-accent/40">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div ref={approachRef} className="reveal" style={{ transitionDelay: '150ms' }}>
            <SectionLabel number="03">{t('approach.title')}</SectionLabel>
            <div className="glass-card rounded-card p-9 max-[640px]:p-6 shadow-card">
              <p className="m-0 mb-6 text-muted text-[.98rem] leading-[1.85] font-light">{t('approach.p1')}</p>
              <p className="m-0 mb-6 text-muted text-[.98rem] leading-[1.85] font-light">{t('approach.p2')}</p>
              <p className="m-0 text-muted text-[.98rem] leading-[1.85] font-light">{t('approach.p3')}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Network — Dark section with refined treatment */}
      <Section dark className="py-32 max-[640px]:py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

        {/* Geometric decoration */}
        <div className="absolute top-[30%] right-[10%] w-[180px] h-[180px] border border-accent/[.06] rounded-full max-[920px]:hidden" />
        <div className="absolute top-[35%] right-[12%] w-[120px] h-[120px] border border-accent/[.04] rounded-full max-[920px]:hidden" />

        <Container className="relative grid grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-14">
          <div ref={networkRef} className="reveal">
            <SectionLabel dark number="04">{t('network.title')}</SectionLabel>
            <p className="max-w-content m-0 text-white/50 text-[1.02rem] leading-[1.85] font-light">{t('network.intro')}</p>
          </div>
          <div ref={networkTagsRef} className="flex flex-wrap gap-3">
            {t('network.domains', { returnObjects: true }).map((d, i) => (
              <span
                key={i}
                data-reveal
                className="reveal inline-flex items-center py-3 px-5 border border-dark-line rounded-card-sm bg-dark-surface/80 backdrop-blur-sm text-white/60 text-[.9rem] font-light hover:border-accent/30 hover:text-accent-light hover:bg-accent/[.04] transition-all duration-400 shadow-inner-glow"
              >
                {d}
              </span>
            ))}
          </div>
        </Container>
      </Section>

      {/* Activities */}
      <Section className="py-32 max-[640px]:py-20" id="current-activities">
        <Container>
          <div ref={activitiesRef} className="reveal">
            <SectionLabel number="05">{t('activities.title')}</SectionLabel>
            <div className="flex flex-wrap gap-4">
              <ExternalLink href="https://www.lookmove.ch">Lookmove</ExternalLink>
              <ExternalLink href="https://data.lookmove.ch">Lookmove Data</ExternalLink>
              <ExternalLink href="https://www.yatzo.com">Yatzo</ExternalLink>
            </div>
          </div>
        </Container>
      </Section>

      {/* Mentions */}
      <Section className="py-32 max-[640px]:py-20 bg-surface-soft" id="selected-mentions">
        <Container>
          <div ref={mentionsRef} className="reveal">
            <SectionLabel number="06">{t('mentions.title')}</SectionLabel>
            <p className="max-w-content text-muted text-[1.02rem] leading-[1.85] font-light">{t('mentions.intro')}</p>
          </div>
          <MentionsList />
        </Container>
      </Section>

      {/* Contact — With decorative background */}
      <Section className="py-32 max-[640px]:py-20 relative" id="contact">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-gradient-to-bl from-accent/[.03] to-transparent pointer-events-none max-[920px]:hidden" />

        <Container className="relative grid grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-14">
          <div ref={contactRef} className="reveal">
            <SectionLabel number="07">{t('contact.title')}</SectionLabel>
            <p className="max-w-content text-muted text-[1.02rem] leading-[1.85] font-light mb-8">{t('contact.intro')}</p>
            <div className="hidden max-[920px]:hidden min-[921px]:block">
              <div className="text-[.92rem] text-muted font-light">
                <div className="font-semibold text-text mb-1.5 font-normal text-[.95rem]">Maxime Danibert</div>
                <div className="mb-0.5">Avenue de Tivoli 26</div>
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
