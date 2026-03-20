import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const mentions = [
  { date: { en: '8 February 2026', fr: '8 février 2026' }, title: 'Wo Häuser in der Schweiz noch bezahlbar sind', source: 'Watson', href: 'https://www.watson.ch/schweiz/immobilien/441970557-wo-haeuser-in-der-schweiz-noch-bezahlbar-sind' },
  { date: { en: '6 February 2026', fr: '6 février 2026' }, title: 'Voici où acheter une maison reste abordable en Suisse', source: 'Watson', href: 'https://www.watson.ch/fr/suisse/immobilier/476533048-immobilier-suisse-voici-ou-acheter-une-maison-reste-abordable' },
  { date: { en: '30 January 2026', fr: '30 janvier 2026' }, title: 'Immobilier: voici où les loyers sont les moins chers en Suisse', source: 'Watson', href: 'https://www.watson.ch/fr/suisse/immobilier/385433081-immobilier-voici-ou-les-loyers-sont-les-moins-chers-en-suisse' },
  { date: { en: '28 January 2026', fr: '28 janvier 2026' }, title: 'Mietpreise nach Postleitzahl und Gemeinde', source: 'Watson', href: 'https://www.watson.ch/schweiz/immobilien/461818376-mietpreise-nach-postleitzahl-und-gemeinde-ueberblick-ueber-die-schweiz' },
  { date: { en: '20 November 2025', fr: '20 novembre 2025' }, title: 'Immobilier suisse: voici le prix des loyers de chaque commune', source: 'Watson', href: 'https://www.watson.ch/fr/suisse/immobilier/330903374-immobilier-suisse-voici-le-prix-des-loyers-de-chaque-commune' },
  { date: { en: '17 November 2025', fr: '17 novembre 2025' }, title: 'Mieten in der Schweiz: So unterschiedlich teuer sind Wohnungen je Kanton', source: 'Watson', href: 'https://www.watson.ch/schweiz/wirtschaft/819341828-mieten-in-der-schweiz-so-unterschiedlich-teuer-sind-wohnungen-je-kanton' },
]

const moreMentions = [
  { date: { en: '3 November 2025', fr: '3 novembre 2025' }, title: 'Thriving Lookmove set for accelerated growth', source: 'Startupticker', href: 'https://www.startupticker.ch/en/news/thriving-lookmove-set-for-accelerated-growth' },
  { date: { en: '7 May 2024', fr: '7 mai 2024' }, title: 'Le marché immobilier résidentiel suisse en 2023', source: 'Lookmove Blog', href: 'https://www.lookmove.ch/fr/blog/lookmove-reports/le-marche-immobilier-residentiel-suisse-en-2023/4852' },
  { date: { en: '5 February 2023', fr: '5 février 2023' }, title: 'Comment trouver le bien immobilier de ses rêves en Suisse ? Avec Maxime Danibert, CEO de Lookmove', source: "L'After avec Edouard / Ausha", href: 'https://podcast.ausha.co/l-after-avec-edouard/comment-trouver-le-bien-immobilier-de-ses-reves-en-suisse-avec-maxime-danibert-ceo-de-lookmove' },
  { date: { en: '1 January 2022', fr: '1 janvier 2022' }, title: 'One of our Lookmove investors was introduced via LeadiNNg to Scale Up', source: 'Innovaud', href: 'https://www.innovaud.ch/fr/general/news/2022/-nous-avons-rencontre-lun-de-nos-investisseurs-via-le-programme-leadinng-to-scale-up' },
  { date: { en: '1 March 2022', fr: '1 mars 2022' }, title: 'Big ambitions for Lookmove', source: 'Startupticker', href: 'https://www.startupticker.ch/en/news/big-ambitions-for-lookmove' },
  { date: { en: '24 June 2019', fr: '24 juin 2019' }, title: "Lookmove: la digitalisation au service de l'immobilier", source: 'Le Monde Économique', href: 'https://www.monde-economique.ch/lookmove-la-digitalisation-au-service-de-limmobilier/' },
  { date: { en: '7 June 2019', fr: '7 juin 2019' }, title: 'Lookmove: la première plate-forme immobilière globale', source: 'Le Monde Économique', href: 'https://www.monde-economique.ch/lookmove-la-premiere-plate-forme-immobiliere-globale/' },
  { date: { en: '11 March 2017', fr: '11 mars 2017' }, title: 'Le publi-reportage arrive sur les guides Concierge Maps', source: 'LinkedIn Articles', href: 'https://fr.linkedin.com/pulse/le-publi-reportage-arrive-sur-les-guides-concierge-maps-danibert' },
  { date: { en: '6 March 2017', fr: '6 mars 2017' }, title: "Concierge Maps a 10 ans : histoire d'une réussite", source: 'LinkedIn Articles', href: 'https://fr.linkedin.com/pulse/concierge-maps-10-ans-histoire-dune-r%C3%A9ussite-maxime-danibert' },
  { date: { en: '6 December 2016', fr: '6 décembre 2016' }, title: "Bretons à l'étranger: le Josselinais Maxime Danibert, chef d'entreprises en Suisse", source: 'Le Ploërmelais', href: 'https://fr.linkedin.com/pulse/mes-parents-un-exemple-%C3%A0-suivre-maxime-danibert' },
  { date: { en: '9 September 2016', fr: '9 septembre 2016' }, title: "La réussite d'un guide de luxe papier", source: 'LinkedIn Articles', href: 'https://fr.linkedin.com/pulse/concierge-maps-la-r%C3%A9ussite-dun-guide-de-luxe-papier-maxime-danibert' },
  { date: { en: '15 March 2016', fr: '15 mars 2016' }, title: "L'imprimé n'est pas mort!", source: 'LinkedIn Articles', href: 'https://fr.linkedin.com/pulse/limprim%C3%A9-nest-pas-mort-maxime-danibert' },
  { date: { en: '6 November 2015', fr: '6 novembre 2015' }, title: "Concierge Maps édite 350'000 guides en 2015", source: 'Startupticker', href: 'https://www.startupticker.ch/en/news/350-000-guides-edites-par-concierge-maps-en-2015' },
  { date: { en: '8 May 2015', fr: '8 mai 2015' }, title: "Concierge Maps se lance à l'international", source: 'Le Monde Économique', href: 'https://www.monde-economique.ch/concierge-maps-se-lance-a-l-international/' },
]

function MentionItem({ mention, lang }) {
  return (
    <a
      href={mention.href}
      rel="noopener noreferrer"
      target="_blank"
      className="grid grid-cols-[110px_minmax(0,1fr)_auto] max-[920px]:grid-cols-[1fr_auto] gap-[18px] items-start p-[18px_20px] max-[640px]:p-4 bg-surface border border-line rounded-card-sm no-underline transition-all duration-150 hover:-translate-y-px hover:border-line-strong hover:shadow-card"
    >
      <div className="text-[.88rem] text-muted font-semibold max-[920px]:col-span-full">{mention.date[lang]}</div>
      <div>
        <div className="m-0 mb-1 text-base font-semibold tracking-[-0.01em]">{mention.title}</div>
        <div className="text-muted text-[.94rem]">{mention.source}</div>
      </div>
      <div aria-hidden="true" className="text-muted text-[1.1rem] leading-[1.2]">↗</div>
    </a>
  )
}

export default function MentionsList() {
  const { t, i18n } = useTranslation()
  const [showMore, setShowMore] = useState(false)
  const lang = i18n.language === 'fr' ? 'fr' : 'en'

  return (
    <>
      <div className="grid gap-3.5 mt-[26px]">
        {mentions.map((m, i) => <MentionItem key={i} mention={m} lang={lang} />)}
      </div>
      {showMore && (
        <div className="grid gap-3.5 mt-3.5">
          {moreMentions.map((m, i) => <MentionItem key={i} mention={m} lang={lang} />)}
        </div>
      )}
      <button
        aria-expanded={showMore}
        onClick={() => setShowMore(!showMore)}
        className="mt-[22px] inline-flex items-center gap-2.5 border border-line rounded-full bg-surface px-4 py-3 font-semibold cursor-pointer hover:bg-surface-soft"
      >
        <span>{showMore ? t('mentions.showLess') : t('mentions.showMore')}</span>
      </button>
    </>
  )
}
