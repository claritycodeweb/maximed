import { useTranslation } from 'react-i18next'
import SEO from '../hooks/useSEO'
import ExternalLink from '../components/ExternalLink'
import ContactForm from '../components/ContactForm'
import MentionsList from '../components/MentionsList'
import { useLanguage } from '../hooks/useLanguage'

export default function Home() {
  const { t } = useTranslation()
  const { lang } = useLanguage()

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
      <section className="py-[92px] pb-[72px] max-[640px]:py-[72px] max-[640px]:pb-[52px]">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto flex items-start gap-16 max-[920px]:flex-col max-[920px]:gap-10">
          <div className="w-[min(100%,760px)] grid gap-3.5 flex-1">
            <p className="text-[.86rem] text-muted m-0 mb-[18px] font-semibold">{t('hero.eyebrow')}</p>
            <h1 className="m-0 mb-3.5 text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.04em] font-bold">{t('hero.name')}</h1>
            <p className="m-0 mb-[22px] text-[clamp(1.08rem,2.4vw,1.38rem)] text-[#303030] font-medium">{t('hero.subtitle')}</p>
            <p className="m-0 text-[1.03rem] text-muted">{t('hero.intro1')}</p>
            <p className="m-0 text-[1.03rem] text-muted">{t('hero.intro2')}</p>
            <a href="#contact" className="mt-3 inline-flex items-center justify-center py-3.5 px-5 rounded-full bg-accent text-white no-underline font-semibold hover:opacity-[.92] w-fit">
              {t('hero.cta')}
            </a>
          </div>
          <div className="shrink-0 max-[920px]:mx-auto">
            <img
              src="/max-avatar.png"
              alt="Maxime Danibert"
              className="w-[220px] h-[220px] max-[640px]:w-[180px] max-[640px]:h-[180px] rounded-full object-cover object-top border-4 border-line shadow-card"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 max-[640px]:py-[74px]" id="about">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto">
          <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('about.title')}</h2>
          <div className="w-[min(100%,760px)]">
            <p className="m-0 mb-[18px] text-muted text-base">{t('about.p1')}</p>
            <p className="m-0 mb-[18px] text-muted text-base">{t('about.p2')}</p>
            <p className="m-0 text-muted text-base">{t('about.p3')}</p>
          </div>
        </div>
      </section>

      {/* Advisory + Approach */}
      <section className="py-[72px]" id="advisory">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-[46px]">
          <div>
            <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('advisory.title')}</h2>
            <div className="bg-surface border border-line rounded-card p-7 max-[640px]:p-[22px] shadow-card">
              <p className="m-0 mb-4 text-[1.15rem] font-semibold tracking-[-0.02em]">{t('advisory.subtitle')}</p>
              <ul className="m-0 p-0 list-none grid gap-3.5">
                {t('advisory.items', { returnObjects: true }).map((item, i) => (
                  <li key={i} className="relative pl-[18px] text-muted before:content-[''] before:absolute before:left-0 before:top-[.78em] before:w-[7px] before:h-px before:bg-[#7d766d]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('approach.title')}</h2>
            <div className="bg-surface border border-line rounded-card p-7 max-[640px]:p-[22px] shadow-card">
              <div className="w-[min(100%,760px)]">
                <p className="m-0 mb-[18px] text-muted text-base">{t('approach.p1')}</p>
                <p className="m-0 mb-[18px] text-muted text-base">{t('approach.p2')}</p>
                <p className="m-0 text-muted text-base">{t('approach.p3')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network */}
      <section className="py-[72px]">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-[46px]">
          <div>
            <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('network.title')}</h2>
            <p className="w-[min(100%,760px)] m-0 text-muted text-base">{t('network.intro')}</p>
          </div>
          <div className="flex flex-wrap gap-[10px_16px] text-muted">
            {t('network.domains', { returnObjects: true }).map((d, i) => (
              <span key={i} className="inline-flex items-center py-[9px] px-3.5 border border-line rounded-full bg-surface text-[.96rem]">
                {d}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Activities */}
      <section className="py-[72px]" id="current-activities">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto">
          <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('activities.title')}</h2>
          <div className="flex flex-wrap gap-3.5">
            <ExternalLink href="https://www.lookmove.ch">Lookmove</ExternalLink>
            <ExternalLink href="https://data.lookmove.ch">Lookmove Data</ExternalLink>
            <ExternalLink href="https://www.yatzo.com">Yatzo</ExternalLink>
          </div>
        </div>
      </section>

      {/* Mentions */}
      <section className="py-24 max-[640px]:py-[74px]" id="selected-mentions">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto">
          <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('mentions.title')}</h2>
          <p className="w-[min(100%,760px)] text-muted text-base">{t('mentions.intro')}</p>
          <MentionsList />
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 max-[640px]:py-[74px]" id="contact">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto grid grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)] max-[920px]:grid-cols-[minmax(0,1fr)] gap-[42px]">
          <div>
            <h2 className="text-[.8rem] tracking-[.18em] uppercase text-muted m-0 mb-[22px] font-bold">{t('contact.title')}</h2>
            <p className="w-[min(100%,760px)] text-muted text-base">{t('contact.intro')}</p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  )
}
