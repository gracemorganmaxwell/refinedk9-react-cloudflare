import React from "react";
import "./Contact.css";

export const Contact: React.FC = () => {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<h2 className="section-title">Ready to Book?</h2>
				<p className="contact-subtitle">
					Secure a spot for your furry friend today!
				</p>

				<div className="contact-content">
					<div className="booking-section">
						<h3 className="booking-title">Book Your Appointment</h3>
						<div className="booking-widget">
							{/* Savvy Pet Spa Booking Integration - Exact configuration as provided */}
							<iframe
								title="Book Appointment with Savvy Pet Spa"
								width="100%"
								height="700"
								style={{ border: 0 }}
								src="https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7"
								frameBorder="0"
								allowFullScreen
							/>
						</div>
						<p className="booking-note">
							* If the booking widget doesn't load, please contact us directly
							using the information below.
						</p>
					</div>

					<div className="contact-info">
						<h3 className="contact-title">Get In Touch</h3>
						<div className="contact-details">
							<div className="contact-item">
								<span className="contact-icon">📧</span>
								<div className="contact-text">
									<strong>Email:</strong>
									<a href="mailto:refinedk-9grooming@gmail.com">
										refinedk-9grooming@gmail.com
									</a>
								</div>
							</div>

							<div className="contact-item">
								<span className="contact-icon">📱</span>
								<div className="contact-text">
									<strong>Mobile:</strong>
									<a href="tel:+64273977641">+64 27 397 7641</a>
								</div>
							</div>

							<div className="contact-item">
								<span className="contact-icon">⏰</span>
								<div className="contact-text">
									<strong>Availability via appointment:</strong>
									<span>Mon-Sat 9:30AM - 8:00PM</span>
								</div>
							</div>

							<div className="contact-item">
								<span className="contact-icon">📍</span>
								<div className="contact-text">
									<strong>Service Areas:</strong>
									<span>Christchurch, New Zealand</span>
								</div>
							</div>
						</div>

						<div className="social-links">
							<h4>Follow Us</h4>
							<div className="social-icons">
								<a href="#" className="social-link" aria-label="Instagram">
									📸 Instagram
								</a>
								<a href="#" className="social-link" aria-label="TikTok">
									🎵 TikTok
								</a>
								<a href="#" className="social-link" aria-label="Facebook">
									📘 Facebook
								</a>
								<a href="#" className="social-link" aria-label="WhatsApp">
									💬 WhatsApp
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
