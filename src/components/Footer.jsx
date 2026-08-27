import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'
import SocialLinks from './SocialLinks'
import LegalEntity from './LegalEntity'

export default function Footer() {
  const { t } = useTranslation()
  const { lang, switchLanguage, altLang } = useLanguage()

  const termsPath = lang === 'en' ? '/en/terms-and-conditions' : '/conditions-generales'
  const privacyPath = lang === 'en' ? '/en/privacy-policy' : '/politique-de-confidentialite'

  return (
    <footer className="relative bg-dark text-white/70 overflow-hidden">
      {/* Decorative gradient mesh */}
      <div className="absolute inset-0 gradient-mesh-dark pointer-events-none" />

      {/* Top accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative py-20 pb-14">
        <div className="w-[min(100%-56px,1200px)] max-[640px]:w-[min(100%-32px,1200px)] mx-auto">
          {/* Top row */}
          <div className="flex items-start justify-between gap-10 flex-wrap mb-16">
            <div>
              <div className="text-[.78rem] tracking-[.36em] uppercase text-white font-bold mb-4">DANIBERT</div>
              <LegalEntity showName={false} className="text-white/40 text-[.9rem] leading-relaxed max-w-[300px]" />
            </div>
            <SocialLinks dark />
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-dark-line via-dark-line to-transparent mb-10" />

          {/* Bottom row */}
          <div className="flex items-center justify-between gap-6 flex-wrap text-[.85rem]">
            <div className="text-white/30 font-light">{t('footer.copy')}</div>
            <div className="flex items-center gap-8 flex-wrap">
              <Link to={termsPath} className="text-white/45 no-underline hover:text-accent-light transition-colors duration-400">{t('footer.terms')}</Link>
              <Link to={privacyPath} className="text-white/45 no-underline hover:text-accent-light transition-colors duration-400">{t('footer.privacy')}</Link>
              <div className="flex items-center gap-0 text-[.78rem] font-semibold tracking-[.14em] uppercase">
                <span className="text-white/50 px-2 py-1">{lang.toUpperCase()}</span>
                <span className="text-white/20">/</span>
                <button onClick={switchLanguage} className="bg-transparent border-0 px-2 py-1 text-white/30 hover:text-accent-light cursor-pointer font-semibold text-[.78rem] tracking-[.14em] uppercase transition-colors duration-300">
                  {altLang.toUpperCase()}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
