import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Navbar from './components/Navbar'
import appConfig from './config'

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Kegiatan', href: '#kegiatan' },
  { label: 'Tentang', href: '#tentang' },
]

function App() {
  return (
    <>
      <Navbar appName={appConfig.appName} links={navLinks} />
      <Header
        studentName={appConfig.studentName}
        studentNim={appConfig.studentNim}
      />
      <section className="activities" id="kegiatan">
        <div className="container">
          <h2 className="section-title">Daftar Kegiatan</h2>
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
