import { useState } from 'react';
import styles from '../Styles/contact.module.css';
import { profile } from '../data';
import { MailIcon, PhoneIcon, GithubIcon, MapPinIcon } from './icons/Icons';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer id="contact" className={styles.footer}>
      <div className={`section ${styles.grid}`}>
        <div>
          <h2 className={styles.title}>Let's build something <span>great</span> together.</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
            <input name="email" type="email" placeholder="Your email" value={form.email} onChange={handleChange} required />
            <textarea name="message" placeholder="Your message" rows="4" value={form.message} onChange={handleChange} required />
            <button type="submit">Send Message</button>
            {sent && <p className={styles.success}>Thanks! I'll get back to you soon.</p>}
          </form>
        </div>
        <div className={styles.info}>
          <div className={styles.infoItem}><MailIcon /> {profile.email}</div>
          <div className={styles.infoItem}><PhoneIcon /> {profile.phone}</div>
          <div className={styles.infoItem}><GithubIcon /> {profile.github.replace('https://', '')}</div>
          <div className={styles.infoItem}><MapPinIcon /> {profile.location}</div>
        </div>
      </div>
      <div className={styles.bottom}><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p></div>
    </footer>
  );
}