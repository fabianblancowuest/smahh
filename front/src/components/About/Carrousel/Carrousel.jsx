import React, { useState, useEffect } from "react";
import styles from "./Carrousel.module.css";
import img3 from "./../../../assets/images/About/blog-1.jpg";
import img1 from "./../../../assets/images/About/blog-2.jpg";
import img2 from "./../../../assets/images/About/blog-3.jpg";

const Carousel = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const slides = [
		{
			text: "By working together and sharing knowledge, we can build a resilient online community that stands strong against cyber threats. trategies for detecting and mitigating phishing attacks, advice on securing your home network, and much more",
			imageUrl: img1,
		},
		{
			text: "We offer step-by-step guides for implementing strong passwords and multi-factor authentication, strategies for detecting and mitigating phishing attacks, advice on securing your home network, and much more.",
			imageUrl: img2,
		},
		{
			text: "Thank you for joining us on this journey to establish a safer digital world. By working together and sharing knowledge, we can build a resilient online community that stands strong against cyber threats.",
			imageUrl: img3,
		},
		// {
		// 	text: "Additionally, we delve into the realm of secure software development practices. For developers, understanding how to write code that is resilient to vulnerabilities is paramount. We cover secure coding practices, emphasize the importance of regular software updates, and provide insights into designing applications with security as a core principle.",
		// 	imageUrl: "",
		// },
		// {
		// 	text: "At our Cybersecurity Initiative, we believe that education is the first line of defense against cyber threats. By staying informed, you can take proactive measures to protect yourself, your family, and your digital assets. Explore our collection of articles, video tutorials, and interactive workshops to deepen your understanding of cybersecurity concepts and practical implementation.",
		// 	imageUrl: "",
		// },
		// {
		// 	text: "Thank you for joining us on this journey to establish a safer digital world. By working together and sharing knowledge, we can build a resilient online community that stands strong against cyber threats. Remember, cybersecurity is not just a responsibility—it's an opportunity to empower yourself in the digital age.",
		// 	imageUrl: "",
		// },
	];

	useEffect(() => {
		const carouselInterval = setInterval(nextSlide, 3000); // Cambiar cada 1 segundos
		return () => clearInterval(carouselInterval);
	}, [currentIndex]);

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
	};

	return (
		<div className={styles.carrousel}>
			<img
				src={slides[currentIndex].imageUrl}
				alt={`Slide ${currentIndex + 1}`}
				className={styles.carrouselImg}
			/>
			<p className={styles.carrouselParagraph}>{slides[currentIndex].text}</p>
		</div>
	);
};

export default Carousel;
