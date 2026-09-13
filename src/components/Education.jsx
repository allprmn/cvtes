import { motion } from 'framer-motion';
import { education } from '../data';
import styles from './Education.module.css';

export default function Education() {
  return (
    <section id="education" className={styles.education}>
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Riwayat Pendidikan
      </motion.h2>

      <div className={styles.timeline}>
        {education.map((item, index) => (
          <motion.div
            key={item.id}
            className={styles.timelineItem}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, boxShadow: '0 10px 30px rgba(124,58,237,0.3)' }}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.icon}>{item.icon}</span>
              <div className={styles.line}></div>
            </div>
            <div className={styles.content}>
              <div className={styles.header}>
                <h3>{item.institution}</h3>
                <span className={styles.year}>{item.year}</span>
              </div>
              <h4>{item.degree}</h4>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}