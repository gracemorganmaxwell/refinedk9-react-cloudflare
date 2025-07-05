import React from "react";
import "./Footer.css";

export const Footer: React.FC = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="footer-section contact-emphasis">
						<div className="footer-logo">
							<span className="logo-icon">🐾</span>
							<span className="logo-text">Refined K-9 Dog Grooming</span>
						</div>
						<p className="footer-tagline">
							A compassionate and eco-friendly mobile grooming service guided by
							the philosophy of humanity over vanity.
						</p>
						<div className="footer-contact-social">
							<div className="contact-column">
								<h4 className="footer-title">Get In Touch</h4>
								<div className="footer-contact">
									<div className="contact-item">
										<span className="contact-icon">📧</span>
										<a
											href="mailto:refinedk9doggrooming94@gmail.com"
											className="contact-link"
										>
											refinedk9doggrooming94@gmail.com
										</a>
									</div>
									<div className="contact-item">
										<span className="contact-icon">📱</span>
										<a href="tel:+64273977641" className="contact-link">
											+64 27 397 7641
										</a>
									</div>
									<div className="contact-item">
										<span className="contact-icon">⏰</span>
										<span className="contact-text">
											Mon-Sat 9:30AM - 8:00PM
										</span>
									</div>
									<div className="contact-item">
										<span className="contact-icon">📍</span>
										<span className="contact-text">
											Christchurch, New Zealand
										</span>
									</div>
								</div>
							</div>
							<div className="social-column">
								<h4 className="footer-title">Follow Us</h4>
								<div className="footer-social">
									<a
										href="https://www.instagram.com/refinedk9doggrooming?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
									>
										📱 Instagram
									</a>
									<a
										href="https://www.tiktok.com/@therefinedk9"
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
									>
										🎵 TikTok
									</a>
									<a
										href="https://www.facebook.com/profile.php?id=100088409241507"
										target="_blank"
										rel="noopener noreferrer"
										className="social-link"
									>
										🌐 Facebook
									</a>
								</div>
							</div>
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
