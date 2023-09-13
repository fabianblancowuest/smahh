import "./Landing.css";
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
import logobanner from "./../../assets/images/Landing/banner-logo.png";

const Landing = () => {
	return (
		<div className="homeContainer">
			<section className="mainHeader">
				<img src={logobanner}></img>
				<span className="description">World Class Cyber Security</span>
				<h1 className="title">Real-Time Monitoring Your Infrastructure</h1>
				<p className="description">
					Cyber security is the protection from the theft to protect of our
					computer systems and networks or being damaged of our hardware and
					software.
				</p>
			</section>
			<article id="principal-main" className="principalMain">
				<div className="cards">
					<a href="#website-scanning">
						<div className="card">
							<h2 className="cardTitle">Website Scanning</h2>
							<p className="cardText">
								Learn about advanced threat detection techniques and tools.
							</p>
							<img className="img" src={websiteScanning}></img>
						</div>
					</a>
					<a href="#malware-removal">
						<div className="card">
							<h2 className="cardTitle">Malware Removal</h2>
							<p className="cardText">
								Understand the importance of data privacy and compliance in an
								era where personal information is constantly shared and
								collected.
							</p>
							<img className="img" src={malwareRemoval}></img>
						</div>
					</a>
					<a href="#cloud-security">
						<div className="card">
							<h2 className="cardTitle">Cloud Security</h2>
							<p className="cardText">
								Explore best practices for secure software and application
								development.
								<img className="img" src={cloudSecurity}></img>
							</p>
						</div>
					</a>
				</div>

				<div className="cards">
					<a href="#data-protection">
						<div className="card">
							<h2 className="cardTitle">Data Protection</h2>
							<p className="cardText">
								Join our thriving cybersecurity community where enthusiasts,
								professionals, and learners come together to share knowledge and
								experiences.
							</p>
							<img className="img" src={dataProtection}></img>
						</div>
					</a>
					<a href="#security-news">
						<div className="card">
							<h2 className="cardTitle">Security News</h2>
							<p className="cardText">
								Stay updated with the latest cybersecurity news from around the
								globe like cyber attacks, security vulnerabilities, and
								regulatory changes.
							</p>
							<img className="img" src={securityNews}></img>
						</div>
					</a>
					<a href="#data-loss">
						<div className="card">
							<h2 className="cardTitle">Data Loss Prevention</h2>
							<p className="cardText">
								Data loss prevention is a security solution that identifies and
								helps prevent unsafe or inappropriate sharing, transfer, or use
								of sensitive data.
							</p>
							<img className="img" src={dataLossPrevention}></img>
						</div>
					</a>
				</div>
			</article>

			<main className="landingMain">
				<section className="sectionService" id="website-scanning">
					<h2 className="section-title">Website Scanning</h2>
					<img src={websiteSection} alt="website-scanning"></img>
					<p>
						Learn about advanced threat detection techniques and tools. From
						intrusion detection systems to behavioral analytics, discover how
						organizations and individuals can proactively identify and respond
						to emerging cyber threats. Stay one step ahead of attackers with our
						in-depth guides and real-world examples.
					</p>
				</section>
				<section className="sectionService" id="malware-removal">
					<h2 className="section-title">Malware Removal</h2>
					<img src={malwareSection}></img>
					<p>
						Learn about advanced threat detection techniques and tools. From
						intrusion detection systems to behavioral analytics, discover how
						organizations and individuals can proactively identify and respond
						to emerging cyber threats. Stay one step ahead of attackers with our
						in-depth guides and real-world examples.
					</p>
				</section>
				<section className="sectionService" id="cloud-security">
					<h2 className="section-title">Cloud Security</h2>
					<img src={cloudSection}></img>
					<p>
						Explore best practices for secure software and application
						development. In an interconnected world, writing code that stands up
						to cyber threats is paramount. Dive into the world of secure coding,
						secure development life cycles, and the integration of security
						measures into your applications from the ground up.
					</p>
				</section>
				<section className="sectionService" id="data-protection">
					<h2 className="section-title">Data Protection</h2>
					<img src={dataSection}></img>
					<p>
						Understand the importance of data privacy and compliance in an era
						where personal information is constantly shared and collected. Our
						expert articles cover topics such as GDPR, CCPA, and best practices
						for safeguarding sensitive data. Explore insights into securing
						personal devices, protecting online identities.
					</p>
				</section>
				<section className="sectionService" id="security-news">
					<h2 className="section-title">Security News</h2>
					<img src={securitySection}></img>
					<p>
						Stay updated with the latest cybersecurity news from around the
						globe. Our curated news section covers data breaches, cyber attacks,
						security vulnerabilities, and regulatory changes. Being informed is
						the first step towards staying secure in an ever-changing digital
						landscape.
					</p>
				</section>
				<section className="sectionService" id="data-loss">
					<h2 className="section-title">Data Loss Prevention</h2>
					<img src={dataLossSection}></img>
					<p>
						Data loss prevention is a security solution that identifies and
						helps prevent unsafe or inappropriate sharing, transfer, or use of
						sensitive data. It can help your organization monitor and protect
						sensitive information across on-premises systems, cloud-based
						locations, and endpoint devices.
					</p>
				</section>
			</main>
		</div>
	);
};

export default Landing;
