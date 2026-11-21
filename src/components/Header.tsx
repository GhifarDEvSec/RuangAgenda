import Badge from './ui/Badge'
import Button from './ui/Button'

interface HeaderProps {
  studentName: string
  studentNim: string
}

function Header({ studentName, studentNim }: HeaderProps) {
  const scrollToActivities = () => {
    document.getElementById('kegiatan')?.scrollIntoView()
  }

  return (
    <header className="hero" id="beranda">
      <div className="container hero__inner">
        <div className="hero__content">
          <Badge text="Agenda Mahasiswa" tone="sukses" />
          <h1 className="hero__title">
            Rencanakan <span className="hero__accent">kegiatan</span> kuliah
            dengan rapi.
          </h1>
          <p className="hero__lead">
            Catat kegiatan akademik, organisasi, dan pribadi dalam satu tempat
            yang sederhana dan mudah dibaca.
          </p>
          <div className="hero__actions">
            <Button
              label="Lihat Kegiatan"
              onClick={scrollToActivities}
              variant="utama"
            />
            <Button
              label="Tentang Aplikasi"
              onClick={() =>
                document.getElementById('tentang')?.scrollIntoView()
              }
              variant="netral"
            />
          </div>
        </div>
        <aside className="hero__panel">
          <div className="hero__panel-head">
            <span className="hero__panel-dot" aria-hidden="true" />
            <span>Profil Mahasiswa</span>
          </div>
          <p className="hero__panel-name">{studentName}</p>
          <p className="hero__panel-nim">NIM {studentNim}</p>
          <Badge text="Siap Berkegiatan" tone="peringatan" />
        </aside>
      </div>
    </header>
  )
}

export default Header
