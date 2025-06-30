import React from "react";
import "./Header.css";

export const Header: React.FC = () => {
	return (
		<header className="header">
			<div className="container">
				<div className="logo">
					<span className="logo-icon">🐾</span>
					<span className="logo-text">Refined K-9</span>
				</div>
				<nav className="nav">
					<a href="#about" className="nav-link">
						About
					</a>
					<a href="#services" className="nav-link">
						Services
					</a>
					<a href="#reviews" className="nav-link">
						Reviews
					</a>
					<a href="#contact" className="nav-link">
						Contact
					</a>
					<a href="#contact" className="nav-link cta-button">
						Book Now
					</a>
				</nav>
			</div>
		</header>
	);
};
