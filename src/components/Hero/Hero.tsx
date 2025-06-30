import React from "react";
import "./Hero.css";

export const Hero: React.FC = () => {
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
				<div className="hero-placeholder">🐕‍🦺</div>
			</div>
		</section>
	);
};
