import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'
import SocialLinks from './SocialLinks'

export default function Footer() {
  const { t } = useTranslation()
  const { lang, switchLanguage, altLang } = useLanguage()

  const termsPath = lang === 'fr' ? '/fr/conditions-generales' : '/terms-and-conditions'
  const privacyPath = lang === 'fr' ? '/fr/politique-de-confidentialite' : '/privacy-policy'

  return (
    <footer className="py-9 pb-12 border-t border-line">
      <div className="w-[min(100%-40px,1120px)] mx-auto flex items-start justify-between gap-6 flex-wrap">
        <div className="grid gap-2">
          <div className="text-[.84rem] tracking-[.16em] uppercase text-muted font-bold">{t('footer.copy')}</div>
          <div className="text-muted">{t('footer.address')}</div>
        </div>
        <div className="flex items-center gap-[22px] flex-wrap max-[640px]:gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <Link to={termsPath} className="text-muted text-[.95rem] no-underline hover:text-text">{t('footer.terms')}</Link>
            <Link to={privacyPath} className="text-muted text-[.95rem] no-underline hover:text-text">{t('footer.privacy')}</Link>
          </div>
          <SocialLinks />
          <div className="flex items-center gap-2 text-muted text-[.84rem] font-bold tracking-[.08em] uppercase">
            <span>{lang.toUpperCase()}</span>
            <span>|</span>
            <button onClick={switchLanguage} className="bg-transparent border-0 p-0 text-muted hover:text-text cursor-pointer font-bold text-[.84rem] tracking-[.08em] uppercase">
              {altLang.toUpperCase()}
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
