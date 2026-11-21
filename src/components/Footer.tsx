interface FooterProps {
  appName: string
  studentName: string
  studentNim: string
}

function Footer({ appName, studentName, studentNim }: FooterProps) {
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
          <p>{studentName}</p>
          <p>NIM {studentNim}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
