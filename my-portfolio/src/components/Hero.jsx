import styles from './Styles/hero.module.css';
import { profile } from '../data';
import { ArrowRightIcon, GithubIcon } from './icons/Icons';

export default function Hero() {
  return (
    <section id="home" className={`section ${styles.hero}`}>
      <span className={styles.badge}><span className={styles.dot}></span> Available for work</span>
      <h1 className={styles.title}>{profile.role}</h1>
      <p className={styles.tagline}>Hi, I'm <strong>{profile.name}</strong>. {profile.tagline}</p>
      <div className={styles.actions}>
        <a href="#projects" className={styles.primaryBtn}>View My Work <ArrowRightIcon /></a>
        <a href={profile.github} target="_blank" rel="noreferrer" className={styles.secondaryBtn}><GithubIcon /> GitHub</a>
      </div>
    </section>
  );
}