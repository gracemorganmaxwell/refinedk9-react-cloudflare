import React, { useState } from "react";
import "./Reviews.css";
import type { ReviewItem, ReviewProps } from "../../types/review";
import { formatReviewDate, getAvatarProps } from "../../types/review";

export const Reviews: React.FC<ReviewProps> = ({
	reviews,
	maxReviews = 10,
	showSource = true,
	showServiceType = true,
	showRating = true,
	showAvatar = true,
	layout = "grid",
	filterByRating,
}) => {
	const [showAllReviews, setShowAllReviews] = useState(false);

	// Default review data with proper typing and avatars
	const defaultReviews: ReviewItem[] = [
		{
			id: 1,
			text: "Excellent job and communication. She managed to trim Bentley's nails where others have feared to try as he is very sensitive around his paws. Highly recommended.",
			author: "Angela Bourke",
			title: "Dog mumma",
			date: "2024-07-01",
			rating: 5,
			petName: "Bentley",
			serviceType: "full-groom",
			source: "google",
			initials: "AB",
		},
		{
			id: 2,
			text: "Fantastic grooming service Ollie came out a completely different dog, to make things better she is also a mobile service if needed.",
			author: "Barry Catto",
			title: "CEO",
			date: "2024-06-21",
			rating: 5,
			serviceType: "full-groom",
			source: "google",
			initials: "BC",
			petName: "Ollie",
		},
		{
			id: 3,
			text: "Freddy got a great haircut and is looking very handsome now! Tyla was friendly and professional, and it was super convenient for us, but the really cool thing is how relaxed Freddy was about it all. Today was his first time meeting Tyla, and for the first time ever after a groom he's his usual chilled self afterward.",
			author: "Kate Woodward",
			title: "Dog mumma",
			date: "2023-08-19",
			rating: 5,
			petName: "Freddy",
			serviceType: "full-groom",
			source: "facebook",
			initials: "KW",
		},
		{
			id: 4,
			text: "Can't recommend Tyla enough! She looked after my little pup and worked at his pace as it was his first groom with her. Thank you, Tyla!",
			author: "Brydee Gibbins",
			title: "Doggo mum",
			rating: 5,
			serviceType: "puppy-groom",
			source: "facebook",
			initials: "BG",
			avatarUrl: "/src/assets/images/reviews/brydee_gibbins.jpeg",
		},
		{
			id: 5,
			text: "Our little guy had such an amazing time with Tyla, she was amazing with Theo and had great communication, would definitely recommend to anyone.",
			author: "Tayler Newall",
			title: "Doggo dad",
			date: "2023-08-02",
			rating: 5,
			petName: "Theo",
			serviceType: "full-groom",
			source: "facebook",
			initials: "TN",
			avatarUrl: "/src/assets/images/reviews/tayler_newall.png",
		},
		{
			id: 6,
			text: "Tyla is excellent with our two girls. We love her services and will continue with her for dog grooming services in the future. Love how she can come to your home; it makes it much more manageable.",
			author: "Gracie Morgan-Maxwell",
			title: "Dog mum",
			date: "2023-05-06",
			rating: 5,
			serviceType: "full-groom",
			source: "facebook",
			initials: "GM",
			petName: "Inky & Pepper",
			avatarUrl: "/src/assets/images/reviews/gracie_elizabeth.jpeg",
		},
		{
			id: 7,
			text: "Thanks so much for looking after our Artoo! she looks like a new dog after our visit. would highly reccomend Tyla from Refined K-9 to anyone looking to get their fur baby groomed.",
			author: "Matthew Harvey-May",
			title: "Dog dad",
			date: "2023-02-21",
			rating: 5,
			serviceType: "full-groom",
			source: "facebook",
			initials: "MH",
			petName: "Artoo",
			avatarUrl: "/src/assets/images/reviews/matthew_harvey-may.png",
		},
		{
			id: 8,
			text: "We took Fletcher in for his first groom since he was re-homed with us and given it was the first time, I was a little nervous! Tyla instantly calmed my nerves with her confidence and knowledge. On pick up, Fletch was happy as Larry looking fresh and clean, ready for Christmas! Can't recommend Tyla enough, definitely our new regular!",
			author: "Clare Crooks",
			title: "Dog mumma",
			date: "2022-12-23",
			rating: 5,
			serviceType: "full-groom",
			source: "facebook",
			initials: "CC",
			petName: "Fletcher",
			avatarUrl: "/src/assets/images/reviews/clare_crooks.png",
		},
		{
			id: 9,
			text: "Tyla did an amazing dog with my chocolate labrador! He is so shiny and clean and she even managed to trim his nails which I was very unsure of! He absolutely hates having it done but she managed to do it. miracle worker!",
			author: "Alison Van Minnen",
			title: "Dog mumma",
			date: "2024-05-31",
			rating: 5,
			serviceType: "full-groom",
			source: "facebook",
			initials: "AVM",
			avatarUrl: "/src/assets/images/reviews/alison_van_minnen.jpeg",
		},
	];

	// Process reviews based on filters
	let processedReviews = reviews || defaultReviews;

	if (filterByRating) {
		processedReviews = processedReviews.filter(
			(review) => review.rating >= filterByRating
		);
	}

	// Determine which reviews to show
	const initialReviewCount = 6;
	const displayedReviews = showAllReviews
		? processedReviews.slice(0, maxReviews || processedReviews.length)
		: processedReviews.slice(0, initialReviewCount);

	const renderStars = (rating: number) => {
		return Array.from({ length: 5 }, (_, index) => (
			<span
				key={index}
				className={`star ${index < rating ? "filled" : "empty"}`}
			>
				⭐
			</span>
		));
	};

	const renderAvatar = (review: ReviewItem) => {
		if (!showAvatar) return null;

		const { initials, backgroundColor, hasImage } = getAvatarProps(review);

		return (
			<div className="reviewer-avatar">
				{hasImage && review.avatarUrl ? (
					<img
						src={review.avatarUrl}
						alt={`${review.author}'s profile`}
						className="avatar-image"
						onError={(e) => {
							// Fallback to initials if image fails to load
							const target = e.target as HTMLImageElement;
							target.style.display = "none";
							if (target.nextElementSibling) {
								(target.nextElementSibling as HTMLElement).classList.remove(
									"hidden"
								);
							}
						}}
					/>
				) : null}
				<div
					className={`avatar-initials ${hasImage ? "hidden" : ""}`}
					style={{ backgroundColor }}
				>
					{initials}
				</div>
			</div>
		);
	};

	const renderSourceBadge = (source?: string) => {
		if (!source || !showSource) return null;

		const sourceConfig = {
			google: {
				icon: "🔍",
				label: "Google",
				color: "#4285f4",
				logo: (
					<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
						<path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
						<path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
						<path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
						<path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
					</svg>
				),
			},
			facebook: {
				icon: "📘",
				label: "Facebook",
				color: "#1877f2",
				logo: (
					<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
						<path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
					</svg>
				),
			},
			direct: { icon: "💬", label: "Direct", color: "#e74c3c" },
			yelp: { icon: "🥇", label: "Yelp", color: "#ff1a1a" },
			website: { icon: "🌐", label: "Website", color: "#27ae60" },
		};

		const config = sourceConfig[source as keyof typeof sourceConfig];
		if (!config) return null;

		return (
			<div className="review-source" style={{ backgroundColor: config.color }}>
				<span className="source-icon">
					{"logo" in config && config.logo ? config.logo : config.icon}
				</span>
				<span className="source-label">{config.label}</span>
			</div>
		);
	};

	const renderServiceTypeBadge = (serviceType?: string) => {
		if (!serviceType || !showServiceType) return null;

		const serviceLabels = {
			"full-groom": "Full Groom",
			"mini-groom": "Mini Groom",
			"puppy-groom": "Puppy Groom",
			"nail-trim": "Nail Trim",
			"bath-only": "Bath Only",
			"de-shedding": "De-shedding",
		};

		return (
			<div className="service-type-badge">
				{serviceLabels[serviceType as keyof typeof serviceLabels] ||
					serviceType}
			</div>
		);
	};

	const renderReviewItem = (review: ReviewItem) => (
		<div key={review.id} className={`review-card ${layout}`}>
			<div className="review-header">
				{showRating && (
					<div className="review-stars">{renderStars(review.rating)}</div>
				)}
				<div className="review-badges">
					{renderSourceBadge(review.source)}
					{renderServiceTypeBadge(review.serviceType)}
				</div>
			</div>

			<p className="review-text">"{review.text}"</p>

			<div className="review-footer">
				<div className="review-author-section">
					{renderAvatar(review)}
					<div className="review-author">
						<strong>{review.author}</strong>
						{review.title && (
							<span className="review-title">{review.title}</span>
						)}
						{review.petName && (
							<span className="pet-name">Pet: {review.petName}</span>
						)}
					</div>
				</div>
				{review.date && (
					<span className="review-date">{formatReviewDate(review.date)}</span>
				)}
			</div>
		</div>
	);

	return (
		<section id="reviews" className="reviews">
			<div className="container">
				<h2 className="section-title">Barks of Approval</h2>
				<div className={`reviews-container ${layout}`}>
					{displayedReviews.map(renderReviewItem)}
				</div>

				{!showAllReviews && processedReviews.length > initialReviewCount && (
					<div className="reviews-see-more">
						<button
							className="see-more-reviews-button"
							onClick={() => setShowAllReviews(true)}
						>
							⭐ See More Reviews
						</button>
					</div>
				)}
			</div>
		</section>
	);
};
