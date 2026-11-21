interface EmptyStateProps {
  message: string
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="empty-state">
      <svg
        className="empty-state__icon"
        viewBox="0 0 64 64"
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="10"
          y="14"
          width="44"
          height="40"
          rx="8"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path d="M10 26H54" stroke="currentColor" strokeWidth="3" />
        <path
          d="M22 10V18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M42 10V18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 38H40"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M24 46H34"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <p className="empty-state__message">{message}</p>
      <p className="empty-state__hint">
        Daftar kegiatan akan muncul di sini setelah ditambahkan.
      </p>
    </div>
  )
}

export default EmptyState
