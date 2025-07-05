import React from "react";
import "./Contact.css";
import { BookNowButton } from "../common/BookNowButton";

export const Contact: React.FC = () => {
	return (
		<section id="contact" className="contact">
			<div className="container">
				<h2 className="section-title">Ready to Book?</h2>
				<p className="contact-subtitle">
					Secure a spot for your furry friend today!
				</p>

				<div className="booking-section">
					<h3 className="booking-title">Book Your Appointment</h3>
					<div className="booking-content">
						<p className="booking-description">
							Ready to give your pup the pampering they deserve? Click below to
							book your appointment with our easy-to-use booking system.
						</p>
						<BookNowButton variant="primary" size="large">
							📅 Book Now
						</BookNowButton>
						<p className="booking-note">
							* The booking form will open in a new tab for your convenience.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
