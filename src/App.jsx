import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
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
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }

    // Only full page loads and redirects reach this branch (in-page anchor
    // clicks are handled natively by the browser), so jump instead of
    // animating. The target section may live in a lazily loaded page that has
    // not mounted yet, so retry for a short while before giving up.
    let frame
    const deadline = performance.now() + 2000
    const scrollToHash = () => {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ block: 'start' })
      } else if (performance.now() < deadline) {
        frame = requestAnimationFrame(scrollToHash)
      } else {
        window.scrollTo(0, 0)
      }
    }
    scrollToHash()

    return () => cancelAnimationFrame(frame)
  }, [pathname, hash])
  return null
}

// `/fr` was never a route (French lives at the root), but the prefix has been
// linked to externally. Strip it instead of serving a 404.
function StripFrPrefix() {
  const { pathname, search, hash } = useLocation()
  const target = pathname.replace(/^\/fr(?=\/|$)/, '').replace(/\/$/, '') || '/'
  return <Navigate to={`${target}${search}${hash}`} replace />
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

            {/* Legacy /fr prefix -> canonical French routes */}
            <Route path="/fr" element={<StripFrPrefix />} />
            <Route path="/fr/*" element={<StripFrPrefix />} />

            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
