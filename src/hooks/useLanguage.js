import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'

const ROUTE_MAP = {
  fr: {
    '/en': '/',
    '/en/privacy-policy': '/politique-de-confidentialite',
    '/en/terms-and-conditions': '/conditions-generales',
  },
  en: {
    '/': '/en',
    '/politique-de-confidentialite': '/en/privacy-policy',
    '/conditions-generales': '/en/terms-and-conditions',
  },
}

export function useLanguage() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const lang = i18n.language === 'en' ? 'en' : 'fr'

  const switchLanguage = useCallback(() => {
    const targetLang = lang === 'en' ? 'fr' : 'en'
    const map = ROUTE_MAP[targetLang]
    const currentPath = location.pathname.replace(/\/$/, '') || '/'
    const newPath = map[currentPath] || (targetLang === 'en' ? '/en' : '/')

    i18n.changeLanguage(targetLang)
    navigate(newPath + location.hash)
  }, [lang, i18n, navigate, location])

  const altLangPath = useCallback(() => {
    const targetLang = lang === 'fr' ? 'en' : 'fr'
    const map = ROUTE_MAP[targetLang]
    const currentPath = location.pathname.replace(/\/$/, '') || '/'
    return map[currentPath] || (targetLang === 'en' ? '/en' : '/')
  }, [lang, location])

  return { lang, switchLanguage, altLangPath, altLang: lang === 'fr' ? 'en' : 'fr' }
}
