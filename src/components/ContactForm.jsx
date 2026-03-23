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

  const termsPath = lang === 'en' ? '/en/terms-and-conditions' : '/conditions-generales'
  const privacyPath = lang === 'en' ? '/en/privacy-policy' : '/politique-de-confidentialite'

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
    `w-full border rounded-card-sm py-4 px-5 bg-white/80 backdrop-blur-sm text-text text-[.95rem] placeholder:text-muted-light/60 transition-all duration-400 outline-none ${
      focused === name
        ? 'border-accent shadow-[0_0_0_4px_rgba(75,106,138,.06)] bg-white'
        : 'border-line hover:border-accent/30'
    }`

  return (
    <div className="relative bg-surface/90 backdrop-blur-sm border border-line rounded-card p-9 max-[640px]:p-6 shadow-card overflow-hidden">
      {/* Corner decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/[.04] to-transparent pointer-events-none" />

      <h3 className="relative m-0 mb-1 text-[1.5rem] font-serif font-normal italic tracking-[-0.02em]">{t('contact.formTitle')}</h3>
      <div className="w-12 h-px bg-gradient-to-r from-accent/50 to-transparent mt-4 mb-7" />

      <form ref={formRef} onSubmit={handleSubmit} noValidate className="relative grid gap-6">
        <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
          <label htmlFor="company_website">Website</label>
          <input autoComplete="off" id="company_website" name="company_website" tabIndex={-1} type="text" />
        </div>

        <div className="grid grid-cols-2 max-[640px]:grid-cols-1 gap-5">
          <div>
            <label htmlFor="full-name" className="block mb-2.5 text-[.85rem] font-semibold tracking-[.04em]">{t('contact.fullName')} *</label>
            <input
              id="full-name" name="full_name" placeholder={t('contact.fullNamePlaceholder')} required type="text"
              onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
              className={inputClass('name')}
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2.5 text-[.85rem] font-semibold tracking-[.04em]">{t('contact.email')} *</label>
            <input
              id="email" name="email" placeholder={t('contact.emailPlaceholder')} required type="email"
              onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
              className={inputClass('email')}
            />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block mb-2.5 text-[.85rem] font-semibold tracking-[.04em]">{t('contact.company')}</label>
          <input
            id="company" name="company" placeholder={t('contact.companyPlaceholder')} type="text"
            onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
            className={inputClass('company')}
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2.5 text-[.85rem] font-semibold tracking-[.04em]">{t('contact.message')} *</label>
          <textarea
            id="message" name="message" placeholder={t('contact.messagePlaceholder')} required
            onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
            className={`${inputClass('message')} min-h-[150px] resize-y`}
          />
        </div>

        <label className="flex items-start gap-3.5 text-[.9rem] text-muted leading-relaxed" htmlFor="legal-consent">
          <input id="legal-consent" name="legal_consent" required type="checkbox" className="w-[18px] h-[18px] mt-[3px] accent-accent rounded" />
          <span>
            <Trans i18nKey="contact.consent"
              components={{
                terms: <Link to={termsPath} className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent hover:text-accent-dark transition-all duration-300" />,
                privacy: <Link to={privacyPath} className="text-accent underline underline-offset-4 decoration-accent/30 hover:decoration-accent hover:text-accent-dark transition-all duration-300" />,
              }}
            />
          </span>
        </label>

        <div className="flex flex-wrap items-center gap-5 pt-2">
          <button type="submit" className="group relative inline-flex items-center justify-center gap-2.5 min-h-[52px] px-8 rounded-card-sm border-0 bg-accent text-white font-semibold tracking-[.03em] overflow-hidden transition-all duration-400 hover:shadow-glow">
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-accent-dark opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            <span className="relative z-10">{t('contact.send')}</span>
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" viewBox="0 0 20 20" className="relative z-10 w-4 h-4 transition-transform duration-400 group-hover:translate-x-1">
              <path d="M4 10h12M12 6l4 4-4 4" />
            </svg>
          </button>
          {status && <div className={`text-[.9rem] min-h-[1.5em] ${statusColors[status]}`}>{statusText}</div>}
        </div>

        <div className="text-muted-light text-[.85rem]">{t('contact.required')}</div>
      </form>
    </div>
  )
}
