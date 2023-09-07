import styles from "./Landing.module.css";
import websiteScanning from "../../assets/images/services/website-scanning.jpg";
import malwareRemoval from "../../assets/images/services/malware-removal.jpg";
import cloudSecurity from "../../assets/images/services/cloud-security.jpg";
import dataProtection from "../../assets/images/services/data-ptotection.jpg";
import securityNews from "../../assets/images/services/security-news.jpg";
import dataLossPrevention from "../../assets/images/services/data-loss-prevention.jpg";
import websiteSection from "./../../assets/images/services/sections/website-scanning.jpg";
import malwareSection from "./../../assets/images/services/sections/malware-removal.jpg";
import cloudSection from "./../../assets/images/services/sections/cloud-security.jpg";
import dataSection from "./../../assets/images/services/sections/data-protection.jpg";
import securitySection from "./../../assets/images/services/sections/security-news.jpg";
import dataLossSection from "./../../assets/images/services/sections/data-loss.jpg";
// import { useRef, useEffect } from "react";
import banner from "../../assets/images/Landing/banner-bg-5.jpg";
const Landing = () => {
	return (
		<div className={styles.container}>
			<section className={styles.mainHeader}>
				<h1 className={styles.title}>Welcome to the Cybersecurity Smahh</h1>
				<p className={styles.description}>
					Explore the latest trends and insights in cybersecurity to protect
					your digital world.
				</p>
			</section>
			<section id="principal-main">
				<div className={styles.cards}>
					<a href="#website-scanning">
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>Website Scanning</h2>
							<p className={styles.cardText}>
								Learn about advanced threat detection techniques and tools.
							</p>
							<img className={styles.img} src={websiteScanning}></img>
						</div>
					</a>
					<a href="#malware-removal">
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>Malware Removal</h2>
							<p className={styles.cardText}>
								Understand the importance of data privacy and compliance in an
								era where personal information is constantly shared and
								collected.
							</p>
							<img className={styles.img} src={malwareRemoval}></img>
						</div>
					</a>
					<a href="#cloud-security">
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>Cloud Security</h2>
							<p className={styles.cardText}>
								Explore best practices for secure software and application
								development.
								<img className={styles.img} src={cloudSecurity}></img>
							</p>
						</div>
					</a>
					<a href="#data-protection">
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>Data Protection</h2>
							<p className={styles.cardText}>
								Join our thriving cybersecurity community where enthusiasts,
								professionals, and learners come together to share knowledge and
								experiences.
							</p>
							<img className={styles.img} src={dataProtection}></img>
						</div>
					</a>
					<a href="#security-news">
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>Security News</h2>
							<p className={styles.cardText}>
								Stay updated with the latest cybersecurity news from around the
								globe like cyber attacks, security vulnerabilities, and
								regulatory changes.
							</p>
							<img className={styles.img} src={securityNews}></img>
						</div>
					</a>
					<a href="#data-loss">
						<div className={styles.card}>
							<h2 className={styles.cardTitle}>Data Loss Prevention</h2>
							<p className={styles.cardText}>
								Data loss prevention is a security solution that identifies and
								helps prevent unsafe or inappropriate sharing, transfer, or use
								of sensitive data.
							</p>
							<img className={styles.img} src={dataLossPrevention}></img>
						</div>
					</a>
				</div>
			</section>
			<main>
				<section className={styles.sectionService} id="website-scanning">
					<h2>Website Scanning</h2>
					<img src={websiteSection} alt="website-scanning"></img>
					<p>
						Learn about advanced threat detection techniques and tools. From
						intrusion detection systems to behavioral analytics, discover how
						organizations and individuals can proactively identify and respond
						to emerging cyber threats. Stay one step ahead of attackers with our
						in-depth guides and real-world examples.
					</p>
				</section>
				<section className={styles.sectionService} id="malware-removal">
					<h2>Malware Removal</h2>
					<img src={malwareSection}></img>
					<p>
						Learn about advanced threat detection techniques and tools. From
						intrusion detection systems to behavioral analytics, discover how
						organizations and individuals can proactively identify and respond
						to emerging cyber threats. Stay one step ahead of attackers with our
						in-depth guides and real-world examples.
					</p>
				</section>
				<section className={styles.sectionService} id="cloud-security">
					<h2>Cloud Security</h2>
					<img src={cloudSection}></img>
					<p>
						Explore best practices for secure software and application
						development. In an interconnected world, writing code that stands up
						to cyber threats is paramount. Dive into the world of secure coding,
						secure development life cycles, and the integration of security
						measures into your applications from the ground up.
					</p>
				</section>
				<section className={styles.sectionService} id="data-protection">
					<h2>Data Protection</h2>
					<img src={dataSection}></img>
					<p>
						Understand the importance of data privacy and compliance in an era
						where personal information is constantly shared and collected. Our
						expert articles cover topics such as GDPR, CCPA, and best practices
						for safeguarding sensitive data. Explore insights into securing
						personal devices, protecting online identities.
					</p>
				</section>
				<section className={styles.sectionService} id="security-news">
					<h2>Security News</h2>
					<img src={securitySection}></img>
					<p>
						Stay updated with the latest cybersecurity news from around the
						globe. Our curated news section covers data breaches, cyber attacks,
						security vulnerabilities, and regulatory changes. Being informed is
						the first step towards staying secure in an ever-changing digital
						landscape. Our curated news section covers data breaches, cyber
						attacks, security vulnerabilities, and regulatory changes. Being
						informed is the first step towards staying secure.
					</p>
				</section>
				<section className={styles.sectionService} id="data-loss">
					<h2>Data Loss Prevention</h2>
					<img src={dataLossSection}></img>
					<p>
						Data loss prevention is a security solution that identifies and
						helps prevent unsafe or inappropriate sharing, transfer, or use of
						sensitive data. It can help your organization monitor and protect
						sensitive information across on-premises systems, cloud-based
						locations, and endpoint devices. It also helps you achieve
						compliance with regulations such as the Health Insurance Portability
						and Accountability.
					</p>
				</section>
			</main>
		</div>
	);
};

export default Landing;
