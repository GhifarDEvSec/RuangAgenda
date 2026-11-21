import { useState } from 'react'
import type { Activity } from '../types'
import Badge from './ui/Badge'
import Button from './ui/Button'

interface ActivityItemProps {
  activity: Activity
  onDelete: (id: string) => void
  onToggleStatus: (id: string) => void
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

function ActivityItem({
  activity,
  onDelete,
  onToggleStatus,
}: ActivityItemProps) {
  const [showDetail, setShowDetail] = useState(false)
  const isFinished = activity.status === 'selesai'

  const handleDelete = () => {
    if (window.confirm(`Hapus kegiatan "${activity.title}"?`)) {
      onDelete(activity.id)
    }
  }

  return (
    <li className="activity-item">
      <article className="activity-card">
        <div className="activity-card__head">
          <h3
            className={
              isFinished
                ? 'activity-card__title activity-card__title--done'
                : 'activity-card__title'
            }
          >
            {activity.title}
          </h3>
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
        <div className="activity-card__actions">
          <Button
            label={showDetail ? 'Sembunyikan Detail' : 'Lihat Detail'}
            onClick={() => setShowDetail((open) => !open)}
            variant="netral"
            ariaExpanded={showDetail}
          />
          <Button
            label={isFinished ? 'Tandai Belum' : 'Tandai Selesai'}
            onClick={() => onToggleStatus(activity.id)}
            variant={isFinished ? 'netral' : 'utama'}
          />
          <Button
            label="Hapus"
            onClick={handleDelete}
            variant="bahaya"
            ariaLabel={`Hapus kegiatan ${activity.title}`}
          />
        </div>
      </article>
    </li>
  )
}

export default ActivityItem
