import { useState } from 'react'
import About from './components/About'
import ActivityForm from './components/ActivityForm'
import ActivityList from './components/ActivityList'
import EmptyState from './components/EmptyState'
import FilterBar from './components/FilterBar'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Badge from './components/ui/Badge'
import appConfig from './config'
import initialActivities from './data/initialActivities'
import type {
  Activity,
  ActivityStatus,
  NewActivityInput,
  StatusFilter,
} from './types'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Tentang', href: '#tentang' },
]

function App() {
  const [activities, setActivities] = useState<Activity[]>(initialActivities)
  const [keyword, setKeyword] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('semua')

  const handleAdd = (input: NewActivityInput) => {
    const newActivity: Activity = {
      ...input,
      id: crypto.randomUUID(),
      status: 'belum',
    }

    setActivities((current) => [newActivity, ...current])
  }

  const handleDelete = (id: string) => {
    setActivities((current) =>
      current.filter((activity) => activity.id !== id),
    )
  }

  const handleToggleStatus = (id: string) => {
    setActivities((current) =>
      current.map((activity) => {
        if (activity.id !== id) {
          return activity
        }

        const nextStatus: ActivityStatus =
          activity.status === 'selesai' ? 'belum' : 'selesai'

        return { ...activity, status: nextStatus }
      }),
    )
  }

  const normalizedKeyword = keyword.trim().toLowerCase()

  const visibleActivities = activities.filter((activity) => {
    const matchesStatus =
      statusFilter === 'semua' || activity.status === statusFilter

    if (!matchesStatus) {
      return false
    }

    if (normalizedKeyword === '') {
      return true
    }

    return (
      activity.title.toLowerCase().includes(normalizedKeyword) ||
      activity.description.toLowerCase().includes(normalizedKeyword)
    )
  })

  const totalActivities = activities.length
  const finishedActivities = activities.filter(
    (activity) => activity.status === 'selesai',
  ).length
  const pendingActivities = totalActivities - finishedActivities

  return (
    <>
      <Navbar appName={appConfig.appName} links={navLinks} />
      <Header
        studentName={appConfig.studentName}
        studentNim={appConfig.studentNim}
      />
      <section className="activities" id="kegiatan">
        <div className="container">
          <div className="activities__head">
            <h2 className="section-title">Daftar Kegiatan</h2>
            <div className="activities__summary">
              <Badge text={`Total: ${totalActivities}`} tone="netral" />
              <Badge text={`Belum: ${pendingActivities}`} tone="peringatan" />
              <Badge text={`Selesai: ${finishedActivities}`} tone="sukses" />
            </div>
          </div>
          <ActivityForm onAdd={handleAdd} />
          <FilterBar
            keyword={keyword}
            onKeywordChange={setKeyword}
            statusFilter={statusFilter}
            onStatusFilterChange={setStatusFilter}
          />
          {totalActivities > 0 && visibleActivities.length === 0 ? (
            <EmptyState message="Tidak ada kegiatan yang cocok" />
          ) : (
            <ActivityList
              activities={visibleActivities}
              onDelete={handleDelete}
              onToggleStatus={handleToggleStatus}
            />
          )}
        </div>
      </section>
      <About
        studentName={appConfig.studentName}
        studentNim={appConfig.studentNim}
      />
      <Footer
        appName={appConfig.appName}
        studentName={appConfig.studentName}
        studentNim={appConfig.studentNim}
      />
    </>
  )
}

export default App
