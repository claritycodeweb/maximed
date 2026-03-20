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
    <footer className="bg-dark text-white/70 py-16 pb-12">
      <div className="w-[min(100%-48px,1200px)] max-[640px]:w-[min(100%-28px,1200px)] mx-auto">
        <div className="flex items-start justify-between gap-8 flex-wrap mb-12">
          <div>
            <div className="text-[.82rem] tracking-[.32em] uppercase text-white font-bold mb-3">DANIBERT</div>
            <div className="text-white/50 text-[.92rem]">{t('footer.address')}</div>
          </div>
          <SocialLinks dark />
        </div>
        <div className="h-px bg-dark-line mb-8" />
        <div className="flex items-center justify-between gap-6 flex-wrap text-[.88rem]">
          <div className="text-white/40">{t('footer.copy')}</div>
          <div className="flex items-center gap-6 flex-wrap">
            <Link to={termsPath} className="text-white/50 no-underline hover:text-accent-light transition-colors duration-300">{t('footer.terms')}</Link>
            <Link to={privacyPath} className="text-white/50 no-underline hover:text-accent-light transition-colors duration-300">{t('footer.privacy')}</Link>
            <div className="flex items-center gap-1.5 text-[.82rem] font-semibold tracking-[.12em] uppercase">
              <span className="text-white/60">{lang.toUpperCase()}</span>
              <span className="text-white/30">/</span>
              <button onClick={switchLanguage} className="bg-transparent border-0 p-0 text-white/40 hover:text-accent-light cursor-pointer font-semibold text-[.82rem] tracking-[.12em] uppercase transition-colors duration-300">
                {altLang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
