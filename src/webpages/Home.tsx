import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <main className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <img
                        src="/images/profile.png"
                        alt="Man Truong"
                        className="profile-photo"
                        onContextMenu={(e) => e.preventDefault()}
                        draggable={false}
                    />
                    <div className="hero-text">
                        <h1>Man Truong</h1>
                        <p className="tagline">
                            Computational linguist, photographer, and writer based in Los Angeles.
                            Studying how language works; writing about everything else.
                        </p>
                        <div className="hero-buttons">
                            <Link to="/projects" className="btn-primary">View My Projects</Link>
                            <Link to="/photography" className="btn-secondary">See Photography</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cards Section */}
            <section className="cards">
                <Link to="/writing" className="card">
                    <div className="card-icon">✏️</div>
                    <h2>Writing</h2>
                    <p>Essays and reflections on where life intersects.</p>
                    <span className="card-link">Read More →</span>
                </Link>

                <Link to="/projects" className="card">
                    <div className="card-icon">{'</>'}</div>
                    <h2>Coding Projects</h2>
                    <p>NLP models, data pipelines, and experiments in computational linguistics.</p>
                    <span className="card-link">View Projects →</span>
                </Link>

                <Link to="/photography" className="card">
                    <div className="card-icon">📷</div>
                    <h2>Photography</h2>
                    <p>Capturing moments and landscapes through the lens of my camera.</p>
                    <span className="card-link">View Gallery →</span>
                </Link>
            </section>
        </main>
    )
}