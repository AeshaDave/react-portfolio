import styles from '../Styles/resume.module.css';
import { profile } from '../data';
import { DownloadIcon } from './icons/Icons';

export default function Resume() {
  return (
    <section id="resume" className={`section ${styles.resume}`}>
      <h2 className={styles.heading}>Resume</h2>
      <div>
        <p>Download a copy of my resume to learn more about my background and experience.</p>
        <a href={profile.resumeFile} download className={styles.downloadBtn}>
          <DownloadIcon /> Download Resume
        </a>
        <div className={styles.preview}>
          <iframe src={profile.resumeFile} title="Resume preview" loading="lazy" className={styles.frame} />
        </div>
      </div>
    </section>
  );
}