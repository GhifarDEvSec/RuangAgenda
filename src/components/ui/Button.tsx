interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'utama' | 'netral' | 'bahaya'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  ariaExpanded?: boolean
}

function Button({
  label,
  onClick,
  variant = 'utama',
  type = 'button',
  disabled = false,
  ariaExpanded,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-expanded={ariaExpanded}
    >
      {label}
    </button>
  )
}

export default Button
