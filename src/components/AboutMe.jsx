import styles from '../Styles/aboutme.module.css';
import { profile } from '../data';

export default function AboutMe() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <h2 className={styles.heading}>About Me</h2>
      <div>
        <p>{profile.bio1}</p>
        <p>{profile.bio2}</p>
        <div className={styles.info}>
          <div><p className={styles.label}>LOCATION</p><p>{profile.location}</p></div>
          <div><p className={styles.label}>EMAIL</p><p>{profile.email}</p></div>
          <div><p className={styles.label}>PHONE</p><p>{profile.phone}</p></div>
        </div>
      </div>
    </section>
  );
}