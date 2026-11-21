import type { Activity } from '../types'
import ActivityItem from './ActivityItem'
import EmptyState from './EmptyState'

interface ActivityListProps {
  activities: Activity[]
}

function ActivityList({ activities }: ActivityListProps) {
  if (activities.length === 0) {
    return <EmptyState message="Belum ada kegiatan" />
  }

  return (
    <ul className="activity-list">
      {activities.map((activity) => (
        <ActivityItem activity={activity} key={activity.id} />
      ))}
    </ul>
  )
}

export default ActivityList
