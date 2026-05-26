import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function Projects() {
    const navigate = useNavigate()

    return (
        <main className="projects-page">
            <h1>Projects</h1>
            <p className="projects-subtitle">
                A collection of NLP models, data pipelines, and experiments utilizing PyTorch, Keras, TensorFlow, and more.
            </p>
            <div className="project-grid">
                {projects.map(project => (
                    <div key={project.slug} className="project-card-new" onClick={() => navigate(`/projects/${project.slug}`)}>
                        <div className="project-card-header">
                            <span className="project-status">Completed</span>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                        </div>
                        <div className="project-card-footer">
                            <div className="project-tags">
                                {project.stack.map(tech => (
                                    <span key={tech} className="project-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-card-links">
                                {project.repo && (
                                    <a href={project.repo} target="_blank" onClick={e => e.stopPropagation()}>Code</a>
                                )}
                                {project.paper && (
                                    <a href={project.paper} target="_blank" onClick={e => e.stopPropagation()} className="btn-filled">Read Paper</a>
                                )}
                                {project.demo && (
                                    <a href={project.demo} target="_blank" onClick={e => e.stopPropagation()} className="btn-filled">Demo</a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}