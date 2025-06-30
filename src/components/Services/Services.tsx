import React from "react";
import "./Services.css";

export const Services: React.FC = () => {
	const services = [
		{
			title: "Full Groom",
			description: "Complete grooming experience for your furry friend",
			features: [
				"Bath, shampoo and conditioning",
				"Blow dry",
				"Full brush-out",
				"Paw pads shaved",
				"Feet tidied",
				"Nails trimmed",
				"Sanitary shaved",
				"Ears wiped clean",
				"Clipping/scissoring",
				"Spritz of cologne",
			],
			icon: "✂️",
		},
		{
			title: "Mini Groom",
			description: "Essential grooming services for maintenance",
			features: [
				"Bath with shampoo and conditioning",
				"Blow dry",
				"Nails trimmed",
				"Sanitary shave",
			],
			icon: "🛁",
		},
		{
			title: "Puppy Groom",
			description: "Gentle introduction to grooming for young pups",
			features: [
				"Gentle bath and light trimming",
				"Face, paws, and sanitary areas",
				"Nail trim",
				"Positive introduction to grooming tools",
				"Treats and praise throughout",
				"Setting up for lifelong grooming comfort",
			],
			icon: "🐶",
		},
	];

	return (
		<section id="services" className="services">
			<div className="container">
				<h2 className="section-title">Paw-some Services</h2>
				<p className="section-subtitle">
					Our services are designed to enhance your dog's natural beauty while
					prioritising their comfort and well-being.
				</p>
				<div className="services-grid">
					{services.map((service, index) => (
						<div key={index} className="service-card">
							<div className="service-icon">{service.icon}</div>
							<h3 className="service-title">{service.title}</h3>
							<p className="service-description">{service.description}</p>
							<ul className="service-features">
								{service.features.map((feature, featureIndex) => (
									<li key={featureIndex} className="service-feature">
										<span className="feature-check">✓</span>
										{feature}
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};
