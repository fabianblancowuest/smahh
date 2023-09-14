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
import cyberSecurityConsulting from "./../../assets/images/Landing/cyber_security_consulting.jpeg";
import incidentResponse from "./../../assets/images/Landing/incident-response.webp";
import managesSecurityServices from "./../../assets/images/Landing/managed-security-services.jpg";
import managedSecurityResponse from "./../../assets/images/Landing/managed-detection-response.jpg";
import penetrationTest from "./../../assets/images/Landing/penetration-test.jpg";
import securityAssessment from "./../../assets/images/Landing/security-assessment-audit.jpg";
import securityOperation from "./../../assets/images/Landing/security-operation-center.jpg";
import vulnerabilityTesting from "./../../assets/images/Landing/vulnerability-testing.webp";
import cyberConsulting from "./../../assets/images/Landing/cyber-consulting.webp";
import darkweb from "./../../assets/images/Landing/darkweb.jpg";
import managedCard from "./../../assets/images/Landing/managed-detection-card.jpg";
import compilance from "./../../assets/images/Landing/compilance-sec.jpg";

const Landing = () => {
	return (
		<div className="home-container">
			<section className="home-mainHeader">
				<img src={logobanner}></img>
				<span className="home-description">World Class Cyber Security</span>
				<h1 className="home-title">Real-Time Monitoring Your Infrastructure</h1>
				<p className="home-description">
					Cyber security is the protection from the theft to protect of our
					computer systems and networks or being damaged of our hardware and
					software.
				</p>
			</section>
			<article id="principal-main" className="home-principalMain">
				<div className="home-cards">
					<a href="#cyber-security-consulting">
						<div className="home-card">
							<h2 className="cardTitle">Cyber Security Consulting</h2>
							<p className="home-cardText">
								Expert guidance and strategies to fortify your digital defenses
								against evolving cyber threats.
							</p>
							<img className="home-img" src={websiteScanning}></img>
						</div>
					</a>
					<a href="#compilance-security-program">
						<div className="home-card">
							<h2 className="home-cardTitle">Compilance Security Program</h2>
							<p className="home-cardText">
								A comprehensive framework ensuring your organization meets and
								exceeds industry-specific compliance standards
							</p>
							<img className="home-img" src={malwareRemoval}></img>
						</div>
					</a>
					<a href="#cloud-access-security-broker">
						<div className="home-card">
							<h2 className="home-cardTitle">Cloud Access Security Broker</h2>
							<p className="home-cardText">
								Empowering your organization with control and visibility over
								cloud environments.
								<img className="home-img" src={cloudSecurity}></img>
							</p>
						</div>
					</a>
				</div>

				<div className="home-cards">
					<a href="#digital-forensics-dark-web">
						<div className="home-card">
							<h2 className="home-cardTitle">Digital Forensics & Dark Web</h2>
							<p className="home-cardText">
								Our experts employ cutting-edge techniques to analyze digital
								artifacts, reconstruct events, and monitor illicit activities on
								the Dark Web.
							</p>
							<img className="home-img" src={darkweb}></img>
						</div>
					</a>
					<a href="#cyber-awareness-education">
						<div className="home-card">
							<h2 className="home-cardTitle">Cyber Awareness Education</h2>
							<p className="home-cardText">
								Empower individuals and organizations with essential knowledge
								to navigate the digital world securely.
							</p>
							<img className="home-img" src={securityNews}></img>
						</div>
					</a>
					<a href="#data-loss-prevention">
						<div className="home-card">
							<h2 className="home-cardTitle">Data Loss Prevention</h2>
							<p className="home-cardText">
								Data loss prevention is a security solution that identifies and
								helps prevent unsafe or inappropriate sharing, transfer, or use
								of sensitive data.
							</p>
							<img className="home-img" src={dataLossPrevention}></img>
						</div>
					</a>
				</div>
				<div className="home-cards">
					<a href="#incident-response-ransom-payment">
						<div className="home-card">
							<h2 className="home-cardTitle">
								Incident Response & Ransom Payment
							</h2>
							<p className="home-cardText">
								A clear roadmap for navigating high-stakes cyber incidents. Our
								experts guide you through incident response and provide
								strategic advice.
							</p>
							<img className="home-img" src={dataProtection}></img>
						</div>
					</a>
					<a href="#managed-security-services">
						<div className="home-card">
							<h2 className="home-cardTitle">Managed Security Services</h2>
							<p className="home-cardText">
								Comprehensive 24/7 monitoring, threat detection, and incident
								response to safeguard your digital assets.
							</p>
							<img className="home-img" src={cloudSecurity}></img>
						</div>
					</a>
					<a href="#managed-detection-response">
						<div className="home-card">
							<h2 className="home-cardTitle">
								Managed Detection & Response (MDR)
							</h2>
							<p className="home-cardText">
								Proactive defense with continuous monitoring, threat hunting,
								and rapid incident response.
							</p>
							<img className="home-img" src={managedCard}></img>
						</div>
					</a>
				</div>
				<div className="home-cards">
					<a href="#penetration-testing">
						<div className="home-card">
							<h2 className="home-cardTitle">Penetration Testing</h2>
							<p className="home-cardText">
								Rigorous testing to uncover vulnerabilities in systems,
								applications, and networks. Our ethical hackers simulate
								real-world cyberattacks.
							</p>
							<img className="home-img" src={dataProtection}></img>
						</div>
					</a>
					<a href="#security-assessment-audit">
						<div className="home-card">
							<h2 className="home-cardTitle">Security Assessment & Audit</h2>
							<p className="home-cardText">
								Meticulous examination of your security infrastructure,
								identifying potential weaknesses and areas for improvement.
							</p>
							<img className="home-img" src={securityNews}></img>
						</div>
					</a>
					<a href="#security-operation-center">
						<div className="home-card">
							<h2 className="home-cardTitle">
								Security Operation Center (SOC)
							</h2>
							<p className="home-cardText">
								Continuous monitoring, incident response, and vigilant threat
								hunting to safeguard your digital assets
							</p>
							<img className="home-img" src={dataLossPrevention}></img>
						</div>
					</a>
					<a href="#vulnerability-testing">
						<div className="home-card">
							<h2 className="home-cardTitle">Vulnerability Testing</h2>
							<p className="home-cardText">
								Thorough evaluation of your digital infrastructure to identify
								potential weaknesses. Our testing uncovers points of entry for
								cyber threats.
							</p>
							<img className="home-img" src={websiteScanning}></img>
						</div>
					</a>
				</div>
			</article>

			<main className="home-landingMain">
				<section className="home-sectionService" id="cyber-security-consulting">
					<h2 className="home-section-title">Cyber Security Consulting</h2>
					<img
						src={cyberSecurityConsulting}
						alt="cyber-security-consulting"
					></img>
					<p>
						In an interconnected world, safeguarding your digital assets is
						paramount. Our Cyber Security Consulting services offer a fortified
						defense against the evolving landscape of cyber threats. Our team of
						seasoned experts combines cutting-edge technology with strategic
						insights to fortify your digital infrastructure.
					</p>
				</section>
				<section
					className="home-sectionService"
					id="compilance-security-program"
				>
					<h2 className="home-section-title">Compilance Security Program</h2>
					<img src={malwareSection}></img>
					<p>
						Navigating the intricate landscape of regulatory compliance demands
						a strategic and vigilant approach. Our Compliance Security Program
						provides a comprehensive framework to ensure your organization meets
						and exceeds industry-specific compliance standards.
					</p>
				</section>
				<section
					className="home-sectionService"
					id="cloud-access-security-broker"
				>
					<h2 className="home-section-title">Cloud Access Security Broker</h2>
					<img src={cloudSection}></img>
					<p>
						In today's dynamic digital landscape, securing cloud environments is
						paramount. Our Cloud Access Security Broker (CASB) solutions empower
						organizations with the control and visibility needed to safeguard
						sensitive data in the cloud.
					</p>
				</section>
				<section
					className="home-sectionService"
					id="digital-forensics-dark-web"
				>
					<h2 className="home-section-title">Digital Forensics & Dark Web</h2>
					<img src={websiteSection}></img>
					<p>
						In an age where digital footprints hold critical insights, our
						Digital Forensics & Dark Web expertise empowers organizations to
						uncover hidden truths and fortify their cybersecurity posture. Our
						seasoned team of experts combines cutting-edge forensic techniques
						with extensive knowledge of the Dark Web's clandestine networks.
					</p>
				</section>
				<section className="home-sectionService" id="cyber-awareness-education">
					<h2 className="home-section-title">Cyber Awareness Education</h2>
					<img src={securitySection}></img>
					<p>
						In the face of evolving cyber threats, knowledge is the most potent
						defense. Our Cyber Awareness Education program empowers individuals
						and organizations with the tools and insights needed to navigate the
						digital world securely.
					</p>
				</section>
				<section className="home-sectionService" id="data-loss-prevention">
					<h2 className="home-section-title">Data Loss Prevention</h2>
					<img src={dataLossSection}></img>
					<p>
						Data loss prevention is a security solution that identifies and
						helps prevent unsafe or inappropriate sharing, transfer, or use of
						sensitive data. It can help your organization monitor and protect
						sensitive information across on-premises systems, cloud-based
						locations, and endpoint devices.
					</p>
				</section>
				<section
					className="home-sectionService"
					id="incident-response-ransom-payment"
				>
					<h2 className="home-section-title">
						Incident Response & Ransom Payment
					</h2>
					<img src={incidentResponse} alt="website-scanning"></img>
					<p>
						In the face of a cyber crisis, strategic decisions must be made
						swiftly and with precision. Our Incident Response & Ransom Payment
						Consultation services provide a clear roadmap for navigating these
						high-stakes situations. Our seasoned experts bring a wealth of
						experience to the table, guiding you through the intricacies of
						incident response.
					</p>
				</section>
				<section className="home-sectionService" id="managed-security-services">
					<h2 className="home-section-title">Managed Security Services</h2>
					<img src={managesSecurityServices} alt="website-scanning"></img>
					<p>
						In an era of relentless cyber threats, proactive defense is
						paramount. Our Managed Security Services offer a comprehensive and
						vigilant approach to safeguarding your digital assets. Our dedicated
						team of security experts works around the clock to monitor, detect,
						and respond to potential threats.
					</p>
				</section>
				<section
					className="home-sectionService"
					id="managed-detection-response"
				>
					<h2 className="home-section-title">
						Managed Detection & Response (MDR)
					</h2>
					<img src={managedSecurityResponse} alt="website-scanning"></img>
					<p>
						In the ever-evolving landscape of cyber threats, a proactive defense
						is non-negotiable. Our Managed Detection & Response (MDR) services
						provide a vigilant shield against potential breaches, ensuring your
						organization remains resilient.
					</p>
				</section>
				<section className="home-sectionService" id="penetration-testing">
					<h2 className="home-section-title">Penetration Testing</h2>
					<img src={penetrationTest} alt="website-scanning"></img>
					<p>
						Penetration testing is a vital component of any robust cybersecurity
						strategy. Our comprehensive Penetration Testing services provide a
						systematic evaluation of your digital infrastructure, uncovering
						vulnerabilities before malicious actors can exploit them.
					</p>
				</section>
				<section className="home-sectionService" id="security-assessment-audit">
					<h2 className="home-section-title">Security Assessment & Audit</h2>
					<img src={securityAssessment} alt="website-scanning"></img>
					<p>
						Ensuring the integrity and resilience of your security
						infrastructure is paramount. Our Security Assessment & Audit
						services provide a meticulous examination of your digital defenses,
						offering valuable insights to fortify your organization against
						evolving cyber threats.
					</p>
				</section>
				<section className="home-sectionService" id="security-operation-center">
					<h2 className="home-section-title">Security Operation Center(SOC)</h2>
					<img src={securityOperation} alt="website-scanning"></img>
					<p>
						In an era of persistent cyber threats, a proactive defense strategy
						is indispensable. Our Security Operations Center (SOC) stands as the
						vanguard of your organization's digital security, providing
						continuous monitoring, rapid incident response, and vigilant threat
						hunting.
					</p>
				</section>
				<section className="home-sectionService" id="vulnerability-testing">
					<h2 className="home-section-title">Vulnerability Testing</h2>
					<img src={vulnerabilityTesting} alt="website-scanning"></img>
					<p>
						Vulnerability testing is a critical pillar of comprehensive
						cybersecurity. Our dedicated Vulnerability Testing services provide
						a meticulous examination of your digital infrastructure, uncovering
						potential weaknesses and fortifying your organization against
						emerging threats.
					</p>
				</section>
			</main>
		</div>
	);
};

export default Landing;
