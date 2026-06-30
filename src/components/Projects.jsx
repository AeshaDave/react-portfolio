import styles from '../Styles/projects.module.css';
import { projects } from '../data';

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles.projects}`}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <img src={project.image} alt={project.title} loading="lazy" className={styles.image} />
            <div className={styles.cardBody}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
              </div>
              <a href={project.link} target="_blank" rel="noreferrer" className={styles.link}>View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}