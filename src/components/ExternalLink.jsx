export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="group relative inline-flex items-center gap-4 px-6 py-4 border border-line rounded-card-sm bg-surface/80 backdrop-blur-sm font-semibold no-underline hover:border-accent/30 hover-lift"
    >
      <span className="relative z-10 group-hover:text-accent transition-colors duration-400">{children}</span>
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 16 16" className="relative z-10 w-3.5 h-3.5 text-muted-light group-hover:text-accent transition-all duration-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
        <path d="M6 3h7v7" /><path d="M13 3 3 13" />
      </svg>
      {/* Hover glow background */}
      <div className="absolute inset-0 rounded-card-sm bg-gradient-to-br from-accent/[.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
    </a>
  )
}
