import { useState } from 'react'
import About from './components/About'
import ActivityList from './components/ActivityList'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import appConfig from './config'
import initialActivities from './data/initialActivities'
import type { Activity } from './types'
import Badge from './components/ui/Badge'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Tentang', href: '#tentang' },
]

function App() {
  const [activities] = useState<Activity[]>(initialActivities)

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
            <Badge text={`${activities.length} Kegiatan`} tone="netral" />
          </div>
          <ActivityList activities={activities} />
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
