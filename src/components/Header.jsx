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
  const basePath = lang === 'en' ? '/en' : '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-[1000] transition-all duration-700 ${scrolled ? 'backdrop-blur-[24px] bg-bg/[.88] border-b border-line/40 shadow-[0_1px_20px_rgba(0,0,0,.03)]' : 'bg-transparent border-b border-transparent'}`}>
      <div className="w-[min(100%-56px,1200px)] max-[640px]:w-[min(100%-32px,1200px)] mx-auto min-h-[76px] flex items-center justify-between gap-5">
        <Link to={basePath} className="group flex items-center gap-3 no-underline">
          <span className="text-[.78rem] font-bold tracking-[.36em] uppercase text-text transition-colors duration-300 group-hover:text-accent">
            DANIBERT
          </span>
          <span className="hidden min-[480px]:block w-8 h-px bg-line-strong group-hover:bg-accent/40 group-hover:w-12 transition-all duration-500" />
        </Link>
        <div className="flex items-center gap-6">
          <nav aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'} className="hidden min-[921px]:flex items-center gap-9">
            {navKeys.map((key) => (
              <a key={key} href={`${basePath === '/' ? '' : basePath}${anchors[key]}`} className="link-underline text-muted text-[.85rem] font-medium tracking-[.04em] hover:text-text transition-colors duration-300">
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
          <div className="hidden min-[921px]:block w-px h-5 bg-line-strong/60" />
          <div aria-label="Language switch" className="hidden min-[641px]:flex items-center gap-0 text-[.78rem] font-semibold tracking-[.14em] uppercase">
            <span className="text-text px-2 py-1 rounded-l-md bg-surface-soft/60">{lang.toUpperCase()}</span>
            <button onClick={switchLanguage} className="bg-transparent border-0 px-2 py-1 rounded-r-md text-muted hover:text-accent hover:bg-accent-glow cursor-pointer font-semibold text-[.78rem] tracking-[.14em] uppercase transition-all duration-300">
              {altLang.toUpperCase()}
            </button>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-[921px]:hidden inline-flex border border-line bg-surface/60 backdrop-blur-sm w-11 h-11 rounded-card-sm items-center justify-center hover:border-accent/40 hover:bg-accent-glow transition-all duration-300"
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" viewBox="0 0 24 24" className="w-[18px] h-[18px]">
              {menuOpen ? (
                <><path d="M6 6l12 12" /><path d="M6 18L18 6" /></>
              ) : (
                <><path d="M4 7h16" /><path d="M4 12h12" /><path d="M4 17h16" /></>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="min-[921px]:hidden border-b border-line bg-bg/[.96] backdrop-blur-[24px] animate-fade-in">
          <div className="w-[min(100%-56px,1200px)] max-[640px]:w-[min(100%-32px,1200px)] mx-auto py-4 pb-8">
            <nav aria-label={lang === 'fr' ? 'Navigation mobile' : 'Mobile navigation'} className="grid gap-1">
              {navKeys.map((key, i) => (
                <a
                  key={key}
                  href={`${basePath === '/' ? '' : basePath}${anchors[key]}`}
                  onClick={() => setMenuOpen(false)}
                  className="py-4 no-underline border-b border-line/40 text-[1.05rem] font-medium hover:text-accent hover:pl-2 transition-all duration-300"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-1.5 pt-6 text-[.78rem] font-semibold tracking-[.14em] uppercase">
              <span className="text-text">{lang.toUpperCase()}</span>
              <span className="text-line-strong mx-1">/</span>
              <button onClick={() => { switchLanguage(); setMenuOpen(false) }} className="bg-transparent border-0 p-0 text-muted hover:text-accent cursor-pointer font-semibold text-[.78rem] tracking-[.14em] uppercase transition-colors duration-300">
                {altLang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
