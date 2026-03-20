import { useState, useRef } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function ContactForm() {
  const { t } = useTranslation()
  const { lang } = useLanguage()
  const [status, setStatus] = useState(null) // 'wait' | 'success' | 'error'
  const [focused, setFocused] = useState(null)
  const formRef = useRef(null)

  const termsPath = lang === 'fr' ? '/fr/conditions-generales' : '/terms-and-conditions'
  const privacyPath = lang === 'fr' ? '/fr/politique-de-confidentialite' : '/privacy-policy'

  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = formRef.current
    const honeypot = form.querySelector('input[name="company_website"]')
    if (honeypot?.value) return
    if (!form.checkValidity()) {
      form.reportValidity()
      return
    }
    setStatus('wait')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Request failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const statusColors = { wait: 'text-muted', success: 'text-success', error: 'text-error' }
  const statusText = status ? t(`contact.${status === 'wait' ? 'sending' : status}`) : ''

  const inputClass = (name) =>
    `w-full border rounded-card-sm py-3.5 px-4 bg-white text-text placeholder:text-muted-light/70 transition-all duration-300 outline-none ${
      focused === name ? 'border-accent shadow-[0_0_0_3px_rgba(158,124,91,.1)]' : 'border-line-strong hover:border-accent/40'
    }`

  return (
    <div className="bg-surface border border-line rounded-card p-8 max-[640px]:p-6 shadow-card">
      <h3 className="m-0 mb-1 text-[1.3rem] font-serif font-normal italic tracking-[-0.01em]">{t('contact.formTitle')}</h3>
      <div className="w-10 h-px bg-accent/40 mt-3 mb-6" />
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-5">
        <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
          <label htmlFor="company_website">Website</label>
          <input autoComplete="off" id="company_website" name="company_website" tabIndex={-1} type="text" />
        </div>

        <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-5">
          <div>
            <label htmlFor="full-name" className="block mb-2 text-[.88rem] font-semibold tracking-[.02em]">{t('contact.fullName')} *</label>
            <input
              id="full-name" name="full_name" placeholder={t('contact.fullNamePlaceholder')} required type="text"
              onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
              className={inputClass('name')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-[.88rem] font-semibold tracking-[.02em]">{t('contact.email')} *</label>
            <input
              id="email" name="email" placeholder={t('contact.emailPlaceholder')} required type="email"
              onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
              className={inputClass('email')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block mb-2 text-[.88rem] font-semibold tracking-[.02em]">{t('contact.company')}</label>
          <input
            id="company" name="company" placeholder={t('contact.companyPlaceholder')} type="text"
            onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
            className={inputClass('company')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-[.88rem] font-semibold tracking-[.02em]">{t('contact.message')} *</label>
          <textarea
            id="message" name="message" placeholder={t('contact.messagePlaceholder')} required
            onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
            className={`${inputClass('message')} min-h-[140px] resize-y`}
          />
        </div>

        <label className="flex items-start gap-3 text-[.92rem] text-muted" htmlFor="legal-consent">
          <input id="legal-consent" name="legal_consent" required type="checkbox" className="w-[18px] h-[18px] mt-[3px] accent-accent" />
          <span>
            <Trans i18nKey="contact.consent"
              components={{
                terms: <Link to={termsPath} className="text-accent underline underline-offset-2 hover:text-accent-dark transition-colors duration-300" />,
                privacy: <Link to={privacyPath} className="text-accent underline underline-offset-2 hover:text-accent-dark transition-colors duration-300" />,
              }}
            />
          </span>
        </label>

        <div className="flex flex-wrap items-center gap-4 pt-1">
          <button type="submit" className="group inline-flex items-center justify-center gap-2 min-h-[50px] px-7 rounded-card-sm border-0 bg-accent text-white font-semibold tracking-[.02em] hover:bg-accent-dark transition-all duration-300 hover:shadow-glow">
            {t('contact.send')}
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 20 20" className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5">
              <path d="M4 10h12M12 6l4 4-4 4" />
            </svg>
          </button>
          {status && <div className={`text-[.92rem] min-h-[1.5em] ${statusColors[status]}`}>{statusText}</div>}
        </div>

        <div className="text-muted text-[.88rem]">{t('contact.required')}</div>
      </form>
    </div>
  )
}
