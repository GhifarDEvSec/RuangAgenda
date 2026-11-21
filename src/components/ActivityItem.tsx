import { useState } from 'react'
import type { Activity } from '../types'
import Badge from './ui/Badge'
import Button from './ui/Button'

interface ActivityItemProps {
  activity: Activity
}

const dateFormatter = new Intl.DateTimeFormat('id-ID', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
})

function formatDate(value: string): string {
  const [year, month, day] = value.split('-').map(Number)
  return dateFormatter.format(new Date(year, month - 1, day))
}

function ActivityItem({ activity }: ActivityItemProps) {
  const [showDetail, setShowDetail] = useState(false)
  const isFinished = activity.status === 'selesai'

  return (
    <li className="activity-item">
      <article className="activity-card">
        <div className="activity-card__head">
          <h3 className="activity-card__title">{activity.title}</h3>
          <div className="activity-card__badges">
            <Badge text={activity.category} tone="netral" />
            <Badge
              text={isFinished ? 'Selesai' : 'Belum Selesai'}
              tone={isFinished ? 'sukses' : 'peringatan'}
            />
          </div>
        </div>
        <p className="activity-card__date">{formatDate(activity.date)}</p>
        {showDetail ? (
          <p className="activity-card__description">{activity.description}</p>
        ) : null}
        <Button
          label={showDetail ? 'Sembunyikan Detail' : 'Lihat Detail'}
          onClick={() => setShowDetail((open) => !open)}
          variant="netral"
          ariaExpanded={showDetail}
        />
      </article>
    </li>
  )
}

export default ActivityItem
