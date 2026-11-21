import type { StudentProfile } from '../types'

interface FooterProps {
  appName: string
  profile: StudentProfile
}

function Footer({ appName, profile }: FooterProps) {
  const hasProfile =
    profile.name.trim() !== '' && profile.nim.trim() !== ''

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <p className="footer__brand">{appName}</p>
          <p className="footer__note">
            Agenda kegiatan mahasiswa dalam satu tempat.
          </p>
        </div>
        <div className="footer__meta">
          {hasProfile ? (
            <>
              <p>{profile.name}</p>
              <p>NIM {profile.nim}</p>
            </>
          ) : (
            <p className="profile-empty">Data diri belum diisi</p>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer
