import React, { useState, useEffect } from "react";
import "./Hero.css";

export const Hero: React.FC = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const heroImages = [
		"/src/assets/images/hero/hero_two.jpg",
		"/src/assets/images/hero/hero_three.jpg",
		"/src/assets/images/hero/hero_four.jpg",
	];

	// Rotate through hero images every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
		}, 5000);

		return () => clearInterval(interval);
	}, [heroImages.length]);

	return (
		<section className="hero">
			<div className="hero-content">
				<h1 className="hero-title">
					Dog grooming
					<br />
					<span className="hero-highlight">with heart.</span>
				</h1>
				<p className="hero-subtitle">
					Bringing out the best in the canines and pups of Christchurch,
					everyday.
				</p>
				<button
					className="hero-cta"
					onClick={() =>
						document
							.getElementById("contact")
							?.scrollIntoView({ behavior: "smooth" })
					}
				>
					Book Now
				</button>
			</div>
			<div className="hero-image">
				<div className="hero-image-container">
					{heroImages.map((image, index) => (
						<img
							key={index}
							src={image}
							alt={`Beautiful dog grooming showcase ${index + 1}`}
							className={`hero-background-image ${
								index === currentImageIndex ? "active" : ""
							}`}
							loading={index === 0 ? "eager" : "lazy"}
						/>
					))}
					<div className="hero-image-overlay"></div>
				</div>
			</div>
		</section>
	);
};
