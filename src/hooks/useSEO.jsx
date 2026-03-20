import { Helmet } from 'react-helmet-async'
import { useTranslation } from 'react-i18next'

const SITE_URL = 'https://www.danibert.ch'

const ALT_PATHS = {
  en: {
    home: '',
    'privacy-policy': '/privacy-policy',
    'terms-and-conditions': '/terms-and-conditions',
  },
  fr: {
    home: '/fr',
    'privacy-policy': '/fr/politique-de-confidentialite',
    'terms-and-conditions': '/fr/conditions-generales',
  },
}

export default function SEO({ page = 'home', title, description, ogType = 'website' }) {
  const { i18n } = useTranslation()
  const lang = i18n.language === 'fr' ? 'fr' : 'en'
  const langFull = lang === 'fr' ? 'fr-CH' : 'en-GB'
  const locale = lang === 'fr' ? 'fr_CH' : 'en_GB'

  const canonicalPath = ALT_PATHS[lang]?.[page] ?? ''
  const canonical = `${SITE_URL}${canonicalPath}/`.replace(/\/\/$/, '/')
  const enUrl = `${SITE_URL}${ALT_PATHS.en[page] ?? ''}/`.replace(/\/\/$/, '/')
  const frUrl = `${SITE_URL}${ALT_PATHS.fr[page] ?? ''}/`.replace(/\/\/$/, '/')

  return (
    <Helmet>
      <html lang={langFull} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index,follow" />
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="fr" href={frUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={locale} />
      <meta name="twitter:card" content={ogType === 'website' ? 'summary_large_image' : 'summary'} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}
