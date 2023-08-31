import styles from "./Landing.module.css";

const Landing = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to Cybersecurity Section</h1>
			<p className={styles.description}>
				Explore the latest trends and insights in cybersecurity to protect your
				digital world.
			</p>
			<div className={styles.cards}>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Threat Detection</h2>
					<p className={styles.cardText}>
						Learn about advanced threat detection techniques and tools.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Data Privacy</h2>
					<p className={styles.cardText}>
						Understand the importance of data privacy and compliance.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Secure Development</h2>
					<p className={styles.cardText}>
						Explore best practices for secure software and application
						development.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
