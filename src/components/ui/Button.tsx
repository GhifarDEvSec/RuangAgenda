interface ButtonProps {
  label: string
  onClick?: () => void
  variant?: 'utama' | 'netral' | 'bahaya'
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
}

function Button({
  label,
  onClick,
  variant = 'utama',
  type = 'button',
  disabled = false,
}: ButtonProps) {
  return (
    <button
      className={`button button--${variant}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}

export default Button
