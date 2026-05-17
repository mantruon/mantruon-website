import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav>
            <Link to="/" className="logo">Man Truong</Link>
            <div className="links">
                <Link to="/writing">Writing</Link>
                <Link to="/photography">Photography</Link>
                <Link to="/projects">Projects</Link>
            </div>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                <span></span>
                <span></span>
                <span></span>
            </button>
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/writing" onClick={() => setIsOpen(false)}>Writing</Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                    <Link to="/photography" onClick={() => setIsOpen(false)}>Photography</Link>
                </div>
            )}
        </nav>
    )
}