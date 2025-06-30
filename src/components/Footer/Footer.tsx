import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section">
						<div className="footer-logo">
							<span className="logo-icon">🐾</span>
							<span className="logo-text">Refined K-9 Dog Grooming</span>
						</div>
						<p className="footer-tagline">
							A compassionate and eco-friendly mobile grooming service guided by
							the philosophy of humanity over vanity.
						</p>
					</div>

					<div className="footer-section">
						<h4 className="footer-title">Quick Links</h4>
						<ul className="footer-links">
							<li>
								<a href="#about">About</a>
							</li>
							<li>
								<a href="#services">Services</a>
							</li>
							<li>
								<a href="#reviews">Reviews</a>
							</li>
							<li>
								<a href="#contact">Contact</a>
							</li>
						</ul>
					</div>

					<div className="footer-section">
						<h4 className="footer-title">Get In Touch</h4>
						<div className="footer-contact">
							<p>📧 refinedk-9grooming@outlook.com</p>
							<p>📱 +64 27 397 7641</p>
						</div>
					</div>

					<div className="footer-section">
						<h4 className="footer-title">Follow Us</h4>
						<div className="footer-social">
							<a href="#" className="social-link">
								📸 Instagram
							</a>
							<a href="#" className="social-link">
								🎵 TikTok
							</a>
							<a href="#" className="social-link">
								📘 Facebook
							</a>
							<a href="#" className="social-link">
								💬 WhatsApp
							</a>
						</div>
					</div>
				</div>

				<div className="footer-bottom">
					<p>&copy; {currentYear} All Rights Reserved.</p>
					<p>Made with 💛 by Gracie</p>
				</div>
			</div>
		</footer>
	);
};
