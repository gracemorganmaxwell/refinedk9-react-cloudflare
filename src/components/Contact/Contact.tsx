import React from "react";
import "./Contact.css";

export const Contact: React.FC = () => {
	const handleBookNow = () => {
		window.open(
			"https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7",
			"_blank"
		);
	};

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
						<button className="booking-button" onClick={handleBookNow}>
							📅 Book Now
						</button>
						<p className="booking-note">
							* The booking form will open in a new tab for your convenience.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};
