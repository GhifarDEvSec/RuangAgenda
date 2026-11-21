import type { Activity } from '../types'
import ActivityItem from './ActivityItem'
import EmptyState from './EmptyState'

interface ActivityListProps {
  activities: Activity[]
  onDelete: (id: string) => void
  onToggleStatus: (id: string) => void
}

function ActivityList({
  activities,
  onDelete,
  onToggleStatus,
}: ActivityListProps) {
  if (activities.length === 0) {
    return <EmptyState message="Belum ada kegiatan" />
  }

  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <ActivityItem
          activity={activity}
          key={activity.id}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  )
}

export default ActivityList
