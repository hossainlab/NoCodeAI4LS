import styles from './Sessions.module.css';

export default function Sessions() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const sessions = [
    {
      id: "01",
      title: "No-Code Tools Setup & Foundations",
      date: "Session 01",
      description: "Getting started with the course environment, setting up essential no-code tools, and understanding the foundations of Agentic AI in Life Sciences.",
      link: `${basePath}/session-01/index.html`,
      type: "Presentation"
    },
    {
      id: "02",
      title: "Prompt and Context Engineering",
      date: "Session 02",
      description: "Mastering the art of structuring directives using the RTFC framework, managing context windows, and implementing the P-A-E-I workflow.",
      link: `${basePath}/session-02/index.html`,
      type: "Presentation"
    }
  ];

  return (
    <section className={styles.sessions} id="sessions">
      <div className="container">
        <h2 className="sectionTitle">Course Materials</h2>
        <p className={styles.intro}>Access presentations and resources from each session.</p>
        
        <div className={styles.grid}>
          {sessions.map((session) => (
            <div key={session.id} className={`glass ${styles.card}`}>
              <div className={styles.sessionType}>{session.type}</div>
              <h3 className={styles.sessionTitle}>
                <span className={styles.sessionId}>{session.id}</span>
                {session.title}
              </h3>
              <p className={styles.description}>{session.description}</p>
              <div className={styles.footer}>
                <span className={styles.date}>{session.date}</span>
                <a href={session.link} target="_blank" rel="noopener noreferrer" className={`btn btn-primary ${styles.btn}`}>
                  View Slides
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
