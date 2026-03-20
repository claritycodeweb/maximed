import { useState, useRef } from 'react'
import { useTranslation, Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { useLanguage } from '../hooks/useLanguage'

export default function ContactForm() {
  const { t } = useTranslation()
  const { lang } = useLanguage()
  const [status, setStatus] = useState(null) // 'wait' | 'success' | 'error'
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

  return (
    <div className="bg-surface border border-line rounded-card p-7 shadow-card max-[640px]:p-[22px]">
      <h3 className="m-0 mb-5 text-[1.15rem] font-semibold">{t('contact.formTitle')}</h3>
      <form ref={formRef} onSubmit={handleSubmit} noValidate className="grid gap-[18px]">
        <div className="absolute left-[-9999px] top-auto w-px h-px overflow-hidden">
          <label htmlFor="company_website">Website</label>
          <input autoComplete="off" id="company_website" name="company_website" tabIndex={-1} type="text" />
        </div>

        <div>
          <label htmlFor="full-name" className="block mb-2 text-[.93rem] font-semibold">{t('contact.fullName')} *</label>
          <input id="full-name" name="full_name" placeholder={t('contact.fullNamePlaceholder')} required type="text"
            className="w-full border border-line-strong rounded-[14px] py-3.5 px-4 bg-white text-text placeholder:text-[#8b857e]" />
        </div>

        <div>
          <label htmlFor="email" className="block mb-2 text-[.93rem] font-semibold">{t('contact.email')} *</label>
          <input id="email" name="email" placeholder={t('contact.emailPlaceholder')} required type="email"
            className="w-full border border-line-strong rounded-[14px] py-3.5 px-4 bg-white text-text placeholder:text-[#8b857e]" />
        </div>

        <div>
          <label htmlFor="company" className="block mb-2 text-[.93rem] font-semibold">{t('contact.company')}</label>
          <input id="company" name="company" placeholder={t('contact.companyPlaceholder')} type="text"
            className="w-full border border-line-strong rounded-[14px] py-3.5 px-4 bg-white text-text placeholder:text-[#8b857e]" />
        </div>

        <div>
          <label htmlFor="message" className="block mb-2 text-[.93rem] font-semibold">{t('contact.message')} *</label>
          <textarea id="message" name="message" placeholder={t('contact.messagePlaceholder')} required
            className="w-full border border-line-strong rounded-[14px] py-3.5 px-4 bg-white text-text min-h-[150px] resize-y placeholder:text-[#8b857e]" />
        </div>

        <label className="flex items-start gap-3 text-[.95rem] text-muted" htmlFor="legal-consent">
          <input id="legal-consent" name="legal_consent" required type="checkbox" className="w-[18px] h-[18px] mt-[3px] accent-accent" />
          <span>
            <Trans i18nKey="contact.consent"
              components={{
                terms: <Link to={termsPath} className="underline underline-offset-2" />,
                privacy: <Link to={privacyPath} className="underline underline-offset-2" />,
              }}
            />
          </span>
        </label>

        <div className="flex flex-wrap items-center gap-4">
          <button type="submit" className="inline-flex items-center justify-center min-h-[48px] px-[18px] rounded-full border-0 bg-accent text-white font-semibold hover:opacity-[.92]">
            {t('contact.send')}
          </button>
          {status && <div className={`text-[.95rem] min-h-[1.5em] ${statusColors[status]}`}>{statusText}</div>}
        </div>

        <div className="text-muted">{t('contact.required')}</div>
      </form>
    </div>
  )
}
