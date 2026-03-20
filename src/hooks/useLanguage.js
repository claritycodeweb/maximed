import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'

const ROUTE_MAP = {
  en: {
    '/fr': '/',
    '/fr/politique-de-confidentialite': '/privacy-policy',
    '/fr/conditions-generales': '/terms-and-conditions',
  },
  fr: {
    '/': '/fr',
    '/privacy-policy': '/fr/politique-de-confidentialite',
    '/terms-and-conditions': '/fr/conditions-generales',
  },
}

export function useLanguage() {
  const { i18n } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()
  const lang = i18n.language === 'fr' ? 'fr' : 'en'

  const switchLanguage = useCallback(() => {
    const targetLang = lang === 'en' ? 'fr' : 'en'
    const map = ROUTE_MAP[targetLang]
    const currentPath = location.pathname.replace(/\/$/, '') || '/'
    const newPath = map[currentPath] || (targetLang === 'fr' ? '/fr' : '/')

    i18n.changeLanguage(targetLang)
    navigate(newPath + location.hash)
  }, [lang, i18n, navigate, location])

  const altLangPath = useCallback(() => {
    const targetLang = lang === 'en' ? 'fr' : 'en'
    const map = ROUTE_MAP[targetLang]
    const currentPath = location.pathname.replace(/\/$/, '') || '/'
    return map[currentPath] || (targetLang === 'fr' ? '/fr' : '/')
  }, [lang, location])

  return { lang, switchLanguage, altLangPath, altLang: lang === 'en' ? 'fr' : 'en' }
}
