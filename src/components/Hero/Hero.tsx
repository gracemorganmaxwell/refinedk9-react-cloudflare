import React, { useState, useEffect } from "react";
import "./Hero.css";
import { BookNowButton } from "../common/BookNowButton";

export const Hero: React.FC = () => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const heroImages = [
		"/hero/hero_two.jpg",
		"/hero/hero_three.jpg",
		"/hero/hero_four.jpg",
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
			<div className="container">
				<div className="hero-wrapper">
					{/* Hero Title - Mobile: Row 1, Desktop: Part of Content */}
					<div className="hero-title-section">
						<h1 className="hero-title">
							Dog grooming
							<br />
							<span className="hero-highlight">with heart.</span>
						</h1>
					</div>

					{/* Hero Image - Mobile: Row 2, Desktop: Right Side */}
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

					{/* Hero Subtitle & CTA - Mobile: Row 3, Desktop: Part of Content */}
					<div className="hero-subtitle-section">
						<p className="hero-subtitle">
							Bringing out the best in the canines of Christchurch.
						</p>
						<BookNowButton
							variant="secondary"
							size="large"
							href="https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7" target="_blank"
						/>
					</div>

					{/* Desktop Content Container (hidden on mobile) */}
					<div className="hero-content desktop-only">
						<h1 className="hero-title">
							Dog grooming
							<br />
							<span className="hero-highlight">with heart.</span>
						</h1>
						<p className="hero-subtitle">
							Bringing out the best in the canines and pups of Christchurch,
							everyday.
						</p>
						<BookNowButton
							variant="secondary"
							size="large"
							href="https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7" target="_blank"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};
