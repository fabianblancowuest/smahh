import React from "react";
import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>About Cybersecurity Section</h1>
			<p className={styles.description}>
				Our cybersecurity section is dedicated to providing you with the latest
				information, tips, and best practices to ensure your digital safety and
				protect against cyber threats. With the growing complexity of the
				digital landscape, staying informed and proactive is crucial to
				maintaining a secure online presence.
			</p>
			<p className={styles.description}>
				Whether you're an individual user, a small business owner, or an IT
				professional, our resources cover a wide range of topics, from threat
				detection and data privacy to secure development practices. Join us in
				this journey to build a safer digital world.
			</p>
		</div>
	);
};

export default About;
