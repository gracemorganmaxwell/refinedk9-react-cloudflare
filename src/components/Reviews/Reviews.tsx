import React from "react";
import "./Reviews.css";
import type { ReviewItem, ReviewProps } from "../../types/review";
import { formatReviewDate, getAvatarProps } from "../../types/review";

export const Reviews: React.FC<ReviewProps> = ({
	reviews,
	maxReviews = 6,
	showSource = false,
	showServiceType = false,
	showRating = true,
	showAvatar = true,
	layout = "grid",
	filterByRating,
}) => {
	// Default review data with proper typing and avatars
	const defaultReviews: ReviewItem[] = [
		{
			id: 1,
			text: "I highly recommend, fantastic service with a smile, amazing work, Bella always looks great after her groom and it last for so long. Very happy",
			author: "Sapphire Huijbregts",
			title: "Dog mumma",
			date: "2024-05-21",
			rating: 5,
			petName: "Bella",
			serviceType: "full-groom",
			source: "google",
			initials: "SH",
		},
		{
			id: 2,
			text: "Absolutely recommend Tyla to everyone! My normally very anxious dog was so happy and relaxed after finishing her groom! Tyla was very patient with our 5 month pup getting his nails trimmed for the first time and let him sit in on the whole grooming process so he could hear all the noises! 10/10 experience",
			author: "Bella Cranness",
			title: "CEO",
			date: "2023-12-15",
			rating: 5,
			serviceType: "puppy-groom",
			source: "facebook",
			initials: "BC",
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
			source: "direct",
			initials: "KW",
		},
		{
			id: 4,
			text: "Can't recommend Tyla enough! She looked after my little pup and worked at his pace as it was his first groom with her. Thank you, Tyla!",
			author: "Brydee Gibbins",
			title: "Doggo mum",
			rating: 5,
			serviceType: "mini-groom",
			source: "website",
			initials: "BG",
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
			source: "google",
			initials: "TN",
			avatarUrl: "src/assets/images/reviews/tayler_newall.jpg",
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
			avatarUrl: "src/assets/images/reviews/gracie_elizabeth.jpg",
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
			avatarUrl: "src/assets/images/reviews/matthew_harvey_may.jpg",
		},
		{
			id: 8,
			text: "We took Fletcher in for his first groom since he was re-homed with us and given it was the first time, I was a little nervous! Tyla instantly calmed my nerves with her confidence and knowledge. On pick up, Fletch was happy as Larry looking fresh and clean, ready for Christmas! Can’t recommend Tyla enough, definitely our new regular!",
			author: "Clare Crooks",
			title: "Dog mumma",
			date: "2022-12-23",
			rating: 5,
			serviceType: "full-groom",
			source: "facebook",
			initials: "CC",
			petName: "Fletcher",
			avatarUrl: "src/assets/images/reviews/clare_crooks.jpg",
		},
	];

	// Process reviews based on filters
	let processedReviews = reviews || defaultReviews;

	if (filterByRating) {
		processedReviews = processedReviews.filter(
			(review) => review.rating >= filterByRating
		);
	}

	if (maxReviews) {
		processedReviews = processedReviews.slice(0, maxReviews);
	}

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
								target.nextElementSibling.classList.remove("hidden");
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
			google: { icon: "🔍", label: "Google", color: "#4285f4" },
			facebook: { icon: "📘", label: "Facebook", color: "#1877f2" },
			direct: { icon: "💬", label: "Direct", color: "#e74c3c" },
			yelp: { icon: "🥇", label: "Yelp", color: "#ff1a1a" },
			website: { icon: "🌐", label: "Website", color: "#27ae60" },
		};

		const config = sourceConfig[source as keyof typeof sourceConfig];
		if (!config) return null;

		return (
			<div className="review-source" style={{ backgroundColor: config.color }}>
				<span className="source-icon">{config.icon}</span>
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
					{processedReviews.map(renderReviewItem)}
				</div>
			</div>
		</section>
	);
};
