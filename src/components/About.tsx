import Badge from './ui/Badge'
import Button from './ui/Button'
import type { StudentProfile } from '../types'

interface AboutProps {
  profile: StudentProfile
}

function About({ profile }: AboutProps) {
  const hasProfile =
    profile.name.trim() !== '' && profile.nim.trim() !== ''

  return (
    <section className="about" id="tentang">
      <div className="container about__inner">
        <div className="about__text">
          <Badge text="Tentang" tone="netral" />
          <h2 className="section-title">
            Aplikasi sederhana untuk{' '}
            <span className="accent">mengelola</span> agenda.
          </h2>
          <p>
            Agenda Kegiatan Mahasiswa membantu mencatat kegiatan perkuliahan,
            organisasi, dan urusan pribadi agar lebih teratur. Tampilan dibuat
            ringan, jelas, dan nyaman dipakai di berbagai ukuran layar.
          </p>
          <Button
            label="Mulai Catat Kegiatan"
            onClick={() =>
              document.getElementById('kegiatan')?.scrollIntoView()
            }
            variant="utama"
          />
        </div>
        <div className="about__card">
          <p className="about__label">Dibuat oleh</p>
          {hasProfile ? (
            <>
              <p className="about__name">{profile.name}</p>
              <p className="about__nim">NIM {profile.nim}</p>
              <Badge text="Mahasiswa" tone="sukses" />
            </>
          ) : (
            <p className="profile-empty">Data diri belum diisi</p>
          )}
        </div>
      </div>
    </section>
  )
}

export default About
