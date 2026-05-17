import { projects } from '../data/projects'

export default function Projects() {
    return (
        <main>
            <h1>Projects</h1>
            <div className="project-list">
                {projects.map(project => (
                    <div key={project.title} className="project-card">
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                        <p className="stack">{project.stack.join(' · ')}</p>
                        {project.repo && <a href={project.repo} target="_blank">GitHub →</a>}
                        {project.demo && <a href={project.demo} target="_blank">Demo →</a>}
                    </div>
                ))}
            </div>
        </main>
    )
}