import { useTranslation } from 'react-i18next'
import SEO from '../hooks/useSEO'

export default function PrivacyPolicy() {
  const { t } = useTranslation()
  const sections = t('privacyPolicy.sections', { returnObjects: true })

  return (
    <>
      <SEO
        page="privacy-policy"
        title={t('privacyPolicy.pageTitle')}
        description={t('privacyPolicy.pageDescription')}
        ogType="article"
      />

      <section className="pt-[84px] pb-10">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto">
          <h1 className="m-0 mb-3.5 text-[clamp(2rem,4vw,3rem)] leading-[1.06] tracking-[-0.03em]">{t('privacyPolicy.title')}</h1>
          <p className="m-0 w-[min(100%,760px)] text-muted">{t('privacyPolicy.controller')}</p>
        </div>
      </section>

      <section className="py-[72px]">
        <div className="w-[min(100%-40px,1120px)] max-[640px]:w-[min(100%-28px,1120px)] mx-auto">
          <div className="w-[min(100%,860px)] grid gap-6">
            {sections.map((section, i) => (
              <div key={i} className="bg-surface border border-line rounded-card p-[26px_28px] max-[640px]:p-[22px] shadow-card">
                <h2 className="m-0 mb-3 text-[1.08rem] tracking-[-0.02em]">{section.heading}</h2>
                <div
                  className="[&_p]:m-0 [&_p]:mb-[18px] [&_p]:text-muted [&_p]:text-base [&_p:last-child]:mb-0 [&_ul]:mt-2.5 [&_ul]:pl-[18px] [&_ul]:text-muted [&_li+li]:mt-2 [&_a]:underline [&_a]:underline-offset-2"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
