export default function ProjectCard({ title, description, link }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={link} className="card-link">Lihat →</a>
    </div>
  )
}