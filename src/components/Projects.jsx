import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((p) => (
          <ProjectCard key={p.id} {...p} />
        ))}
      </div>
    </section>
  )
}