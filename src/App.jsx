import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Header from './components/Header'
import Footer from './components/Footer'

const Home = lazy(() => import('./pages/Home'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const TermsAndConditions = lazy(() => import('./pages/TermsAndConditions'))
const NotFound = lazy(() => import('./pages/NotFound'))

function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function LanguageSync() {
  const { pathname } = useLocation()
  const { i18n } = useTranslation()
  useEffect(() => {
    const lang = pathname.startsWith('/en') ? 'en' : 'fr'
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang)
    }
  }, [pathname, i18n])
  return null
}

export default function App() {
  return (
    <div className="grain">
      <ScrollToTop />
      <LanguageSync />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Suspense fallback={<div className="py-24 text-center text-muted">Loading...</div>}>
          <Routes>
            {/* French routes (default) */}
            <Route path="/" element={<Home />} />
            <Route path="/politique-de-confidentialite" element={<PrivacyPolicy />} />
            <Route path="/conditions-generales" element={<TermsAndConditions />} />

            {/* English routes */}
            <Route path="/en" element={<Home />} />
            <Route path="/en/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/en/terms-and-conditions" element={<TermsAndConditions />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
