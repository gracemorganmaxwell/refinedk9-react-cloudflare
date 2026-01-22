import React, { useState, useEffect } from "react";
import "./Header.css";
import logoImage from "../../assets/images/logo/logo.png";
import { BookNowButton } from "../common/BookNowButton";

export const Header: React.FC = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Close menu when clicking outside or on menu item
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as HTMLElement;
			if (!target.closest(".header")) {
				setIsMobileMenuOpen(false);
			}
		};

		if (isMobileMenuOpen) {
			document.addEventListener("click", handleClickOutside);
			document.body.style.overflow = "hidden"; // Prevent background scroll
		} else {
			document.body.style.overflow = "unset";
		}

		return () => {
			document.removeEventListener("click", handleClickOutside);
			document.body.style.overflow = "unset";
		};
	}, [isMobileMenuOpen]);

	const handleMenuItemClick = () => {
		setIsMobileMenuOpen(false);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="header">
			<div className="container">
				<div className="logo">
					<img src={logoImage} alt="Refined K-9 Logo" className="logo-icon" />
					<span className="logo-text">Refined K-9</span>
				</div>

				{/* Desktop Navigation */}
				<nav className="nav desktop-nav">
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
					<BookNowButton variant="primary" size="medium" href="https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7" target="_blank" />
				</nav>

				{/* Hamburger Menu Button */}
				<button
					className={`hamburger-menu ${isMobileMenuOpen ? "active" : ""}`}
					onClick={toggleMobileMenu}
					aria-label="Toggle navigation menu"
				>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
					<span className="hamburger-line"></span>
				</button>

				{/* Mobile Navigation Overlay */}
				<div
					className={`mobile-nav-overlay ${isMobileMenuOpen ? "active" : ""}`}
				>
					<nav className="mobile-nav">
						<a
							href="#about"
							className="mobile-nav-link"
							onClick={handleMenuItemClick}
						>
							About
						</a>
						<a
							href="#services"
							className="mobile-nav-link"
							onClick={handleMenuItemClick}
						>
							Services
						</a>
						<a
							href="#reviews"
							className="mobile-nav-link"
							onClick={handleMenuItemClick}
						>
							Reviews
						</a>
						<a
							href="#contact"
							className="mobile-nav-link"
							onClick={handleMenuItemClick}
						>
							Contact
						</a>
						<BookNowButton
							variant="primary"
							size="large"
							href="https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7"
							target="_blank"
							className="book-now-button--mobile-cta"
							onClick={handleMenuItemClick}
						/>
					</nav>
				</div>
			</div>
		</header>
	);
};
