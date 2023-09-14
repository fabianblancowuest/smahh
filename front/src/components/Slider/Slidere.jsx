import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import malwareRemoval from "../../assets/images/services/malware-removal.jpg";
import cloudSecurity from "../../assets/images/services/cloud-security.jpg";

const Slidere = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
	};

	return (
		<div className="home-container">
			{/* Resto del código */}
			<article id="principal-main" className="home-principalMain">
				<Slider {...settings}>
					<div className="home-cards">
						{/* Contenido de tu primera sección de cards */}
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
					</div>
					<div className="home-cards">
						{/* Contenido de tu segunda sección de cards */}
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
					</div>
					<div>
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
					</div>
					{/* ... y así sucesivamente */}
				</Slider>
			</article>
		</div>
	);
};

export default Slidere;
