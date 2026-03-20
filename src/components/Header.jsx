import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

const navKeys = ['about', 'advisory', 'activities', 'mentions', 'contact']
const anchors = { about: '#about', advisory: '#advisory', activities: '#current-activities', mentions: '#selected-mentions', contact: '#contact' }

export default function Header() {
  const { t } = useTranslation()
  const { lang, switchLanguage, altLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const basePath = lang === 'fr' ? '/fr' : '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-[1000] transition-all duration-500 ${scrolled ? 'backdrop-blur-[20px] bg-bg/[.92] border-b border-line/60 shadow-[0_1px_12px_rgba(0,0,0,.04)]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="w-[min(100%-48px,1200px)] max-[640px]:w-[min(100%-28px,1200px)] mx-auto min-h-[72px] flex items-center justify-between gap-5">
        <Link to={basePath} className="text-[.82rem] font-bold tracking-[.32em] uppercase no-underline text-text hover:text-accent transition-colors duration-300">
          DANIBERT
        </Link>
        <div className="flex items-center gap-5">
          <nav aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'} className="hidden min-[921px]:flex items-center gap-8">
            {navKeys.map((key) => (
              <a key={key} href={`${basePath === '/' ? '' : basePath}${anchors[key]}`} className="link-underline text-muted text-[.88rem] font-medium tracking-[.02em] hover:text-text transition-colors duration-300">
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
          <div className="hidden min-[921px]:block w-px h-5 bg-line" />
          <div aria-label="Language switch" className="hidden min-[641px]:flex items-center gap-1.5 text-[.82rem] font-semibold tracking-[.12em] uppercase">
            <span className="text-text">{lang.toUpperCase()}</span>
            <span className="text-line-strong">/</span>
            <button onClick={switchLanguage} className="bg-transparent border-0 p-0 text-muted hover:text-accent cursor-pointer font-semibold text-[.82rem] tracking-[.12em] uppercase transition-colors duration-300">
              {altLang.toUpperCase()}
            </button>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-[921px]:hidden inline-flex border border-line bg-surface/80 w-10 h-10 rounded-card-sm items-center justify-center hover:border-accent/40 transition-colors duration-300"
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
              {menuOpen ? (
                <><path d="M6 6l12 12" /><path d="M6 18L18 6" /></>
              ) : (
                <><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="min-[921px]:hidden border-b border-line bg-bg/[.98] backdrop-blur-[20px] animate-fade-in">
          <div className="w-[min(100%-48px,1200px)] max-[640px]:w-[min(100%-28px,1200px)] mx-auto py-3 pb-6">
            <nav aria-label={lang === 'fr' ? 'Navigation mobile' : 'Mobile navigation'} className="grid gap-1">
              {navKeys.map((key) => (
                <a key={key} href={`${basePath === '/' ? '' : basePath}${anchors[key]}`} onClick={() => setMenuOpen(false)} className="py-3.5 no-underline border-b border-line/50 text-[1.02rem] font-medium hover:text-accent transition-colors duration-300">
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-1.5 pt-5 text-[.82rem] font-semibold tracking-[.12em] uppercase">
              <span className="text-text">{lang.toUpperCase()}</span>
              <span className="text-line-strong">/</span>
              <button onClick={() => { switchLanguage(); setMenuOpen(false) }} className="bg-transparent border-0 p-0 text-muted hover:text-accent cursor-pointer font-semibold text-[.82rem] tracking-[.12em] uppercase transition-colors duration-300">
                {altLang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
