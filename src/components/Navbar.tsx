import { useState } from 'react'

export interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  appName: string
  links: NavLink[]
}

function Navbar({ appName, links }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar" aria-label="Navigasi utama">
      <div className="container navbar__inner">
        <a className="navbar__brand" href="#beranda" onClick={closeMenu}>
          <span className="navbar__brand-mark" aria-hidden="true" />
          <span>{appName}</span>
        </a>
        <button
          className="navbar__toggle"
          type="button"
          aria-label={isMenuOpen ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>
        <ul
          className={
            isMenuOpen ? 'navbar__menu navbar__menu--open' : 'navbar__menu'
          }
          id="navbar-menu"
        >
          {links.map((link) => (
            <li className="navbar__item" key={link.href}>
              <a className="navbar__link" href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
