import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PenLine, Camera, Code2, Menu, X } from 'lucide-react'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav>
            <Link to="/" className="logo">Man Truong</Link>
            <div className="links">
                <Link to="/writing">
                    <PenLine size={14} strokeWidth={1.5} />
                    Writing
                </Link>
                <Link to="/photography">
                    <Camera size={14} strokeWidth={1.5} />
                    Photography
                </Link>
                <Link to="/projects">
                    <Code2 size={14} strokeWidth={1.5} />
                    Projects
                </Link>
            </div>
            <button className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
            {isOpen && (
                <div className="mobile-menu">
                    <Link to="/writing" onClick={() => setIsOpen(false)}>
                        <PenLine size={14} strokeWidth={1.5} />
                        Writing
                    </Link>
                    <Link to="/photography" onClick={() => setIsOpen(false)}>
                        <Camera size={14} strokeWidth={1.5} />
                        Photography
                    </Link>
                    <Link to="/projects" onClick={() => setIsOpen(false)}>
                        <Code2 size={14} strokeWidth={1.5} />
                        Projects
                    </Link>
                </div>
            )}
        </nav>
    )
}