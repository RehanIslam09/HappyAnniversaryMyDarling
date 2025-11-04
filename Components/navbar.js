// Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="logo-container">
          <img
            src="/logo.png"
            alt="A server surrounded by magic sparkles."
            className="logo"
          />
          <span className="logo-text">
            Happy Anniversary <span className="heart">❤️</span>
          </span>
          <div className="sparkle"></div>
        </div>

        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </label>

        <ul className="nav-links">
          <li>
            <Link href={'/'}>Home</Link>
          </li>
          <li>
            <Link href={'/story'}>FLowers</Link>
          </li>
          <li>
            <Link href={'/gallery'}>Gallery</Link>
          </li>
          <li>
            <Link href={'/special'}>Special</Link>
          </li>
          <li>
            <Link href={'/surprise'}>Surprise</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
