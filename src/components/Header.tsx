import Badge from './ui/Badge'
import Button from './ui/Button'
import type { StudentProfile } from '../types'

interface HeaderProps {
  profile: StudentProfile
}

function Header({ profile }: HeaderProps) {
  const hasProfile =
    profile.name.trim() !== '' && profile.nim.trim() !== ''

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
          {hasProfile ? (
            <>
              <p className="hero__panel-name">{profile.name}</p>
              <p className="hero__panel-nim">NIM {profile.nim}</p>
              <Badge text="Siap Berkegiatan" tone="peringatan" />
            </>
          ) : (
            <p className="profile-empty">Data diri belum diisi</p>
          )}
        </aside>
      </div>
    </header>
  )
}

export default Header
