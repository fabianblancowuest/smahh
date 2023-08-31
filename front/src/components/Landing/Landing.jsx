// import styles from "./Landing.module.css";

// const Landing = () => {
// 	return (
// 		<div className={styles.container}>
// 			<h1 className={styles.title}>Welcome to Cybersecurity Section</h1>
// 			<p className={styles.description}>
// 				Explore the latest trends and insights in cybersecurity to protect your
// 				digital world.
// 			</p>
// 			<div className={styles.cards}>
// 				<div className={styles.card}>
// 					<h2 className={styles.cardTitle}>Threat Detection</h2>
// 					<p className={styles.cardText}>
// 						Learn about advanced threat detection techniques and tools.
// 					</p>
// 				</div>
// 				<div className={styles.card}>
// 					<h2 className={styles.cardTitle}>Data Privacy</h2>
// 					<p className={styles.cardText}>
// 						Understand the importance of data privacy and compliance.
// 					</p>
// 				</div>
// 				<div className={styles.card}>
// 					<h2 className={styles.cardTitle}>Secure Development</h2>
// 					<p className={styles.cardText}>
// 						Explore best practices for secure software and application
// 						development.
// 					</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Landing;

import React from "react";
import styles from "./Landing.module.css";

const Landing = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Welcome to the Cybersecurity NZ</h1>
			<p className={styles.description}>
				Explore the latest trends and insights in cybersecurity to protect your
				digital world.
			</p>
			<div className={styles.cards}>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Threat Detection</h2>
					<p className={styles.cardText}>
						Learn about advanced threat detection techniques and tools. From
						intrusion detection systems to behavioral analytics, discover how
						organizations and individuals can proactively identify and respond
						to emerging cyber threats. Stay one step ahead of attackers with our
						in-depth guides and real-world examples.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Data Privacy</h2>
					<p className={styles.cardText}>
						Understand the importance of data privacy and compliance in an era
						where personal information is constantly shared and collected. Our
						expert articles cover topics such as GDPR, CCPA, and best practices
						for safeguarding sensitive data. Explore insights into securing
						personal devices, protecting online identities, and navigating the
						challenging landscape of data breaches.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Secure Development</h2>
					<p className={styles.cardText}>
						Explore best practices for secure software and application
						development. In an interconnected world, writing code that stands up
						to cyber threats is paramount. Dive into the world of secure coding,
						secure development life cycles, and the integration of security
						measures into your applications from the ground up. Learn how to
						identify common vulnerabilities and design robust systems that
						maintain data integrity and user trust.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Cybersecurity Community</h2>
					<p className={styles.cardText}>
						Join our thriving cybersecurity community where enthusiasts,
						professionals, and learners come together to share knowledge and
						experiences. Participate in forums, attend webinars, and collaborate
						on open-source projects that contribute to a safer digital
						landscape. Together, we can actively work towards raising awareness
						and fortifying our collective cyber defenses.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Security News</h2>
					<p className={styles.cardText}>
						Stay updated with the latest cybersecurity news from around the
						globe. Our curated news section covers data breaches, cyber attacks,
						security vulnerabilities, and regulatory changes. Being informed is
						the first step towards staying secure in an ever-changing digital
						landscape.
					</p>
				</div>
				<div className={styles.card}>
					<h2 className={styles.cardTitle}>Resources for Educators</h2>
					<p className={styles.cardText}>
						Empower educators with the tools they need to teach cybersecurity
						best practices to students. Our educational resources include lesson
						plans, interactive activities, and classroom-friendly materials to
						promote a culture of digital responsibility from an early age.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Landing;
