import React from "react";
import "./BookNowButton.css";

interface BookNowButtonProps {
	variant?: "primary" | "secondary" | "compact";
	size?: "small" | "medium" | "large";
	onClick?: () => void;
	className?: string;
	children?: React.ReactNode;
	disabled?: boolean;
	href?: string;
	target?: string;
}

export const BookNowButton: React.FC<BookNowButtonProps> = ({
	variant = "primary",
	size = "medium",
	onClick,
	className = "",
	children = "Book Now",
	disabled = false,
	href,
	target,
}) => {
	const handleBookNow = () => {
		if (onClick) {
			onClick();
		} else {
			// Default booking action
			window.open(
				"https://book.itsallsavvy.com?id=683ac52c86c8d06b19ae1ecd&bookingDefinitionId=683ac531e7008b2a82558da7",
				"_blank"
			);
		}
	};

	const buttonClasses = `
		book-now-button 
		book-now-button--${variant} 
		book-now-button--${size} 
		${className}
	`.trim();

	// If href is provided, render as a link
	if (href) {
		return (
			<a
				href={href}
				target={target}
				className={buttonClasses}
				onClick={onClick}
			>
				{children}
			</a>
		);
	}

	// Otherwise render as a button
	return (
		<button
			className={buttonClasses}
			onClick={handleBookNow}
			disabled={disabled}
		>
			{children}
		</button>
	);
};
