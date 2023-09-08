import { useState } from "react";

const Services = () => {
	// Nuevo estado para el select
	const [selectedSection, setSelectedSection] = useState("");

	const handleSelectChange = (event) => {
		const sectionId = event.target.value;
		const sectionElement = document.getElementById(sectionId);

		if (sectionElement) {
			sectionElement.scrollIntoView({ behavior: "smooth" });
		}
	};
	return (
		<div>
			<select
				value={selectedSection}
				onChange={(event) => {
					setSelectedSection(event.target.value);
					handleSelectChange(event);
				}}
			>
				<option value="" disabled>
					Select Section
				</option>
				<option value="website-scanning">Website Scanning</option>
				<option value="malware-removal">Malware Removal</option>
				<option value="cloud-security">Cloud Security</option>
				<option value="data-protection">Data Protection</option>
				<option value="security-news">Security News</option>
				<option value="data-loss">Data Loss Prevention</option>
			</select>
		</div>
	);
};

export default Services;
