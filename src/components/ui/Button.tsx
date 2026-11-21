interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'utama' | 'netral' | 'bahaya'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaExpanded?: boolean
  ariaLabel?: string
}

function Button({
  label,
  onClick,
  variant = 'utama',
  type = 'button',
  disabled = false,
  ariaExpanded,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
      aria-label={ariaLabel}
    >
      {label}
    </button>
  )
}

export default Button
