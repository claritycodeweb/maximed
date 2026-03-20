const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/danibert/',
    icon: 'M6.94 8.5H3.56V20h3.38zM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4M20.44 12.78c0-3.76-2-5.51-4.67-5.51-2.16 0-3.13 1.19-3.67 2.03V8.5H8.72c.04.53 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.87-1.38 1.88-1.38 1.33 0 1.86 1.01 1.86 2.5V20H19.4z',
  },
  {
    label: 'X',
    href: 'https://x.com/MaxDanibert',
    icon: 'M18.9 2H22l-6.77 7.73L23.2 22h-6.25l-4.89-6.75L6.15 22H3.04l7.24-8.28L.8 2H7.2l4.42 6.1zm-1.1 18h1.72L6.27 3.9H4.43z',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/maximedanibert/',
    icon: 'M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm10.5 1.5A1.5 1.5 0 1 1 16 7a1.5 1.5 0 0 1 1.5-1.5M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10m0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/danibertmaxime',
    icon: 'M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46h1.6V5a21 21 0 0 0-2.33-.12c-2.3 0-3.87 1.4-3.87 4v2.12H8v3h2.33v8z',
  },
]

export default function SocialLinks({ dark }) {
  return (
    <div aria-label="Social links" className="flex items-center gap-3 flex-wrap">
      {socials.map(({ label, href, icon }) => (
        <a
          key={label}
          aria-label={label}
          href={href}
          rel="noopener noreferrer"
          target="_blank"
          className={`inline-flex items-center justify-center w-10 h-10 rounded-full no-underline transition-all duration-300 ${
            dark
              ? 'border border-dark-line text-white/50 hover:text-accent-light hover:border-accent/40'
              : 'border border-line text-muted hover:text-accent hover:border-accent/40 hover:shadow-[0_0_16px_rgba(158,124,91,.1)]'
          }`}
        >
          <svg aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" className="w-[15px] h-[15px]">
            <path d={icon} />
          </svg>
        </a>
      ))}
    </div>
  )
}
