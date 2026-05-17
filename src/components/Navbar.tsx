import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav>
            <Link to="/" className="logo">Man Truong</Link>
            <div className="links">
                <Link to="/writing">Writing</Link>
                <Link to="/photography">Photography</Link>
                <Link to="/projects">Projects</Link>
            </div>
        </nav>
    )
}