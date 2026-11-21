import type { Activity } from '../types'
import ActivityItem from './ActivityItem'
import EmptyState from './EmptyState'

interface ActivityListProps {
  activities: Activity[]
  onDelete: (id: string) => void
}

function ActivityList({ activities, onDelete }: ActivityListProps) {
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
        />
      ))}
    </ul>
  )
}

export default ActivityList
