import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
    return (
        <main>
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map(project => (
                    <Link to={`/projects/${project.slug}`} key={project.slug} className="project-card" style={{ textDecoration: 'none' }}>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p className="stack">{project.stack.join(' · ')}</p>
                    </Link>
                ))}
            </div>
        </main>
    )
}