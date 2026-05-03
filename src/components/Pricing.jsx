import styles from './Pricing.module.css';

export default function Pricing() {
  const plans = [
    {
      label: 'Student',
      price: '3,060',
      currency: 'BDT',
      description: 'For undergraduate and graduate students',
      features: [
        '4 weeks live sessions',
        'Direct mentorship',
        'Hands-on projects',
        'Certificate of completion',
        'Community access',
      ],
      cta: 'Apply as Student',
      featured: false,
    },
    {
      label: 'Professional',
      price: '4,080',
      currency: 'BDT',
      description: 'For researchers, clinicians & industry professionals',
      features: [
        '4 weeks live sessions',
        'Direct mentorship',
        'Hands-on projects',
        'Certificate of completion',
        'Community access',
        'Priority Q&A access',
      ],
      cta: 'Apply as Professional',
      featured: true,
    },
  ];

  return (
    <section className={styles.pricingSection} id="pricing">
      <div className="container">
        <div className={styles.header}>
          <h2 className="sectionTitle">Pricing</h2>
        </div>
        <div className={styles.grid}>
          {plans.map((plan) => (
            <div
              key={plan.label}
              className={`${styles.card} ${plan.featured ? styles.featured : ''}`}
            >
              {plan.featured && (
                <div className={styles.badge}>Most Popular</div>
              )}
              <div className={styles.planLabel}>{plan.label}</div>
              <div className={styles.priceRow}>
                <span className={styles.currency}>{plan.currency}</span>
                <span className={styles.price}>{plan.price}</span>
              </div>
              <p className={styles.description}>{plan.description}</p>
              <ul className={styles.features}>
                {plan.features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.check}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="https://forms.gle/JxCSxh27PVLuLzNz9"
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-secondary'} ${styles.ctaButton}`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
