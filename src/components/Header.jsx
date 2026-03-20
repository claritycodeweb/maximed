import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useLanguage } from '../hooks/useLanguage'

const navKeys = ['about', 'advisory', 'activities', 'mentions', 'contact']
const anchors = { about: '#about', advisory: '#advisory', activities: '#current-activities', mentions: '#selected-mentions', contact: '#contact' }

export default function Header() {
  const { t } = useTranslation()
  const { lang, switchLanguage, altLang } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)
  const basePath = lang === 'fr' ? '/fr' : '/'

  const navLink = (key) => `${basePath}${basePath === '/' ? '' : '/'}`.replace(/\/\/$/, '/') + anchors[key].slice(1)

  return (
    <header className="sticky top-0 z-[1000] backdrop-blur-[18px] backdrop-saturate-[180%] bg-bg/[.88] border-b border-line/80">
      <div className="w-[min(100%-40px,1120px)] mx-auto min-h-[76px] flex items-center justify-between gap-5">
        <Link to={basePath} className="text-[.84rem] font-bold tracking-[.28em] uppercase no-underline">
          DANIBERT
        </Link>
        <div className="flex items-center gap-4">
          <nav aria-label={lang === 'fr' ? 'Navigation principale' : 'Main navigation'} className="hidden min-[921px]:flex items-center gap-7">
            {navKeys.map((key) => (
              <a key={key} href={`${basePath === '/' ? '' : basePath}${anchors[key]}`} className="text-muted text-[.93rem] font-medium no-underline hover:text-text">
                {t(`nav.${key}`)}
              </a>
            ))}
          </nav>
          <div aria-label="Language switch" className="hidden min-[641px]:flex items-center gap-2 text-muted text-[.86rem] font-semibold tracking-[.08em] uppercase">
            <span>{lang.toUpperCase()}</span>
            <span>|</span>
            <button onClick={switchLanguage} className="bg-transparent border-0 p-0 text-muted hover:text-text cursor-pointer font-semibold text-[.86rem] tracking-[.08em] uppercase">
              {altLang.toUpperCase()}
            </button>
          </div>
          <button
            aria-expanded={menuOpen}
            aria-label={lang === 'fr' ? 'Ouvrir le menu' : 'Open menu'}
            onClick={() => setMenuOpen(!menuOpen)}
            className="min-[921px]:hidden inline-flex border border-line bg-surface w-11 h-11 rounded-card-sm items-center justify-center"
          >
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.7" viewBox="0 0 24 24" className="w-5 h-5">
              <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="min-[921px]:hidden border-b border-line bg-bg/[.98]">
          <div className="w-[min(100%-40px,1120px)] mx-auto py-2.5 pb-5">
            <nav aria-label={lang === 'fr' ? 'Navigation mobile' : 'Mobile navigation'} className="grid gap-2.5">
              {navKeys.map((key) => (
                <a key={key} href={`${basePath === '/' ? '' : basePath}${anchors[key]}`} onClick={() => setMenuOpen(false)} className="py-3 no-underline border-b border-line text-[1.04rem] font-medium">
                  {t(`nav.${key}`)}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-2 pt-4 text-muted text-[.86rem] font-semibold tracking-[.08em] uppercase">
              <span>{lang.toUpperCase()}</span>
              <span>|</span>
              <button onClick={() => { switchLanguage(); setMenuOpen(false) }} className="bg-transparent border-0 p-0 text-muted hover:text-text cursor-pointer font-semibold text-[.86rem] tracking-[.08em] uppercase">
                {altLang.toUpperCase()}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
