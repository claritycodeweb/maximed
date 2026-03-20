export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="group inline-flex items-center gap-3 px-5 py-[14px] border border-line rounded-card-sm bg-surface font-semibold no-underline hover:border-accent/40 hover:shadow-card transition-all duration-300"
    >
      <span className="group-hover:text-accent transition-colors duration-300">{children}</span>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 16 16" className="w-3.5 h-3.5 text-muted group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <path d="M6 3h7v7" /><path d="M13 3 3 13" />
      </svg>
    </a>
  )
}
