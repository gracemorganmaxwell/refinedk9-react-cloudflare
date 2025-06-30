import React from "react";
import "./About.css";

export const About: React.FC = () => {
	return (
		<section id="about" className="about">
			<div className="container">
				<div className="about-content">
					<h2 className="section-title">About Refined K-9</h2>
					<h3 className="about-subtitle">A bit about us</h3>
					<p className="about-text">
						Where your dog's well-being is our masterpiece in mind, heart, and
						looking-boss. I offer mobile dog grooming services throughout
						Christchurch and Timaru. As a dog mum to two doggos myself, I want
						nothing more than to ensure each client feels calm and safe.
					</p>
					<p className="about-text">
						I offer a friendly environment for your pup, focusing on their
						health and comfort with a touch of style. Trust us to enhance your
						K-9's natural elegance with our compassionate, chemical-free, and
						tailored grooming experience.
					</p>
					<div className="about-features">
						<div className="feature">
							<span className="feature-icon">❤️</span>
							<span className="feature-text">Humanity over vanity</span>
						</div>
						<div className="feature">
							<span className="feature-icon">🚐</span>
							<span className="feature-text">Mobile service</span>
						</div>
						<div className="feature">
							<span className="feature-icon">🌿</span>
							<span className="feature-text">Chemical-free products</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
