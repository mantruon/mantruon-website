import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const project = projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main>
        <button className="back-button" onClick={() => navigate('/projects')}>← Back</button>
        <h1>Project not found</h1>
      </main>
    )
  }

  return (
    <main>
      <button className="back-button" onClick={() => navigate('/projects')}>← Back to Projects</button>
      <h1>{project.title}</h1>
      <p className="stack">{project.stack.join(' · ')}</p>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.repo && <a href={project.repo} target="_blank">GitHub →</a>}
        {project.demo && <a href={project.demo} target="_blank">Demo →</a>}
        {project.paper && <a href={project.paper} target="_blank">Read Paper →</a>}
      </div>
    </main>
  )
}