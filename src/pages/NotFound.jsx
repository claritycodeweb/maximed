import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useLanguage } from '../hooks/useLanguage'

export default function NotFound() {
  const { lang } = useLanguage()
  const homePath = lang === 'fr' ? '/fr' : '/'

  return (
    <>
      <Helmet>
        <title>404 | DANIBERT</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <section className="py-[120px] text-center">
        <div className="w-[min(100%-40px,1120px)] mx-auto">
          <h1 className="text-[clamp(2.4rem,5vw,4.25rem)] font-bold tracking-[-0.04em] mb-6">404</h1>
          <p className="text-muted text-lg mb-8">
            {lang === 'fr' ? 'Page introuvable.' : 'Page not found.'}
          </p>
          <Link
            to={homePath}
            className="inline-flex items-center justify-center py-3.5 px-5 rounded-full bg-accent text-white no-underline font-semibold hover:opacity-[.92]"
          >
            {lang === 'fr' ? 'Retour à l\u2019accueil' : 'Back to home'}
          </Link>
        </div>
      </section>
    </>
  )
}
