import { useState } from 'react';
import styles from '../Styles/navbar.module.css'
import { profile } from '../data';
import { MenuIcon, CloseIcon } from './icons/Icons';

const links = ['About', 'Skills', 'Projects', 'Resume', 'Contact'];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.nav}>
        <a href="#home" className={styles.logo}>{profile.name.split(' ')[0]}.</a>

        <ul className={`${styles.links} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} onClick={() => setOpen(false)}>{link}</a>
            </li>
          ))}
        </ul>

        <button className={styles.toggle} onClick={() => setOpen(!open)}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
}