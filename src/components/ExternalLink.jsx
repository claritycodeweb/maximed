export default function ExternalLink({ href, children }) {
  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      className="inline-flex items-center gap-2.5 px-4 py-[13px] border border-line rounded-full bg-surface font-semibold no-underline hover:text-text"
    >
      {children}
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.6" viewBox="0 0 16 16" className="w-3.5 h-3.5">
        <path d="M6 3h7v7" /><path d="M13 3 3 13" />
      </svg>
    </a>
  )
}
