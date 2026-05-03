import styles from './Enroll.module.css';

export default function Enroll() {
  const includes = [
    "4 weeks of live mentorship sessions via Zoom",
    "Hands-on omics & clinical AI projects",
    "Access to all session recordings",
    "Guided literature review & agentic workflow labs",
    "1 complete, submittable research output",
    "Certificate of completion",
  ];

  return (
    <section className={styles.enrollSection} id="enroll">
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.sectionTitle}>Enroll Now</h2>
          <p className={styles.subtitle}>Secure your seat before the cohort fills up.</p>
        </div>

        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.badge}>Student Discount</div>

            <div className={styles.pricing}>
              <span className={styles.originalPrice}>৳5,100</span>
              <div className={styles.discountedPrice}>
                <span className={styles.currency}>৳</span>
                <span className={styles.amount}>2,040</span>
              </div>
              <span className={styles.savingsTag}>Save 60%</span>
            </div>

            <p className={styles.pricingNote}>One-time payment · No recurring charges</p>

            <ul className={styles.includesList}>
              {includes.map((item, index) => (
                <li key={index} className={styles.includesItem}>
                  <svg className={styles.check} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <a href="https://forms.gle/JxCSxh27PVLuLzNz9" target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.ctaButton}`}>
              Enroll at ৳2,040
            </a>

            <p className={styles.disclaimer}>
              Discounted price available for students only. Cohort seats are limited.
            </p>
          </div>
        </div>

      </div>

      <div className={styles.glow}></div>
    </section>
  );
}
