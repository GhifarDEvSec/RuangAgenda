interface BadgeProps {
  text: string
  tone?: 'sukses' | 'peringatan' | 'netral'
}

function Badge({ text, tone = 'netral' }: BadgeProps) {
  return <span className={`badge badge--${tone}`}>{text}</span>
}

export default Badge
