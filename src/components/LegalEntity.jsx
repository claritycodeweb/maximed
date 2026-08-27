import { useTranslation } from 'react-i18next'

/**
 * Registered entity block (legal form, name, address, registry identifiers).
 * Rendered in the footer and on both legal pages so the details live in one place.
 */
export default function LegalEntity({ showName = true, showIds = true, className = '' }) {
  const { t } = useTranslation()

  return (
    <address className={`not-italic ${className}`}>
      <div>{t('legal.form')}</div>
      {showName && <div>{t('legal.name')}</div>}
      <div>{t('legal.street')}</div>
      <div>{t('legal.locality')}</div>
      {showIds && (
        <div className="mt-3 text-[.92em] opacity-80">
          <div>{t('legal.ide')}</div>
          <div>{t('legal.chId')}</div>
          <div>{t('legal.ofrcId')}</div>
        </div>
      )}
    </address>
  )
}
