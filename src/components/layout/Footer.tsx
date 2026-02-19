import { Link } from 'react-router-dom'
import './Footer.css'

const serviceLinks = [
  { path: '/web-development', label: 'Web Development' },
  { path: '/automation', label: 'Process Automation' },
  { path: '/audiovisual', label: 'Audiovisual Production' },
  { path: '/data-solutions', label: 'Data Solutions' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <h3 className="footer__title">ThinkTank Creations</h3>
          <p className="footer__tagline">Think Wise, Create Smart</p>
          <p className="footer__location">Playa del Carmen, MX</p>
        </div>

        <div className="footer__nav">
          <h4 className="footer__heading">Services</h4>
          <ul className="footer__list">
            {serviceLinks.map((link) => (
              <li key={link.path}>
                <Link to={link.path} className="footer__link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact">
          <h4 className="footer__heading">Contact</h4>
          <a href="mailto:thinktankcreations@proton.me" className="footer__link">
            thinktankcreations@proton.me
          </a>
          <div className="footer__social">
            <a
              href="https://instagram.com/thinktankcreations"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://facebook.com/thinktankcreators"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} ThinkTank Creations. All rights reserved.</p>
      </div>
    </footer>
  )
}
