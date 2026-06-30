import styles from '../Styles/skills.module.css';
import { skills } from '../data';

function PillGroup({ label, items }) {
  return (
    <div className={styles.group}>
      <p className={styles.groupLabel}>{label}</p>
      <div className={styles.pills}>
        {items.map((item) => <span key={item} className={styles.pill}>{item}</span>)}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <h2 className={styles.heading}>Skills</h2>
      <div>
        <PillGroup label="Programming" items={skills.programming} />
        <PillGroup label="Tools" items={skills.tools} />
        <PillGroup label="Soft Skills" items={skills.soft} />
      </div>
    </section>
  );
}