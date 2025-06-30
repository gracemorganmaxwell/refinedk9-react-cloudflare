// Review Types for RefinedK9 Landing Page

export interface ReviewItem {
	id: number;
	text: string;
	author: string;
	title?: string; // Job title or relationship to pet
	date?: string;
	rating: number; // 1-5 stars
	source?: ReviewSource;
	petName?: string; // Name of the pet that was groomed
	serviceType?: ServiceType;
	verified?: boolean; // Whether the review is verified
	photoUrl?: string; // Optional photo of the reviewer or pet
	location?: string; // City or area
	avatarUrl?: string; // Profile image URL
	initials?: string; // Fallback initials if no avatar
}

export type ReviewSource =
	| "google"
	| "facebook"
	| "direct"
	| "yelp"
	| "website";

export type ServiceType =
	| "full-groom"
	| "mini-groom"
	| "puppy-groom"
	| "nail-trim"
	| "bath-only"
	| "de-shedding";

export interface ReviewProps {
	reviews?: ReviewItem[];
	maxReviews?: number;
	showSource?: boolean;
	showServiceType?: boolean;
	showRating?: boolean;
	showAvatar?: boolean;
	layout?: "grid" | "carousel" | "list";
	filterByRating?: number; // Show only reviews with this rating or higher
}

export type RatingDistribution = {
	[key in 1 | 2 | 3 | 4 | 5]: number;
};

export interface ReviewStats {
	totalReviews: number;
	averageRating: number;
	ratingDistribution: RatingDistribution;
	mostRecentDate?: string;
}

// Example usage when you have real reviews:
export const exampleReviewItem: ReviewItem = {
	id: 1,
	text: "Tyla did an amazing job with our Golden Retriever Bella. She was so gentle and patient, and Bella looked absolutely beautiful afterward!",
	author: "Sarah Johnson",
	title: "Dog mom",
	date: "2024-01-15",
	rating: 5,
	source: "google",
	petName: "Bella",
	serviceType: "full-groom",
	verified: true,
	location: "Christchurch",
	avatarUrl: "https://example.com/avatars/sarah.jpg",
	initials: "SJ",
};

// Utility functions
export const calculateAverageRating = (reviews: ReviewItem[]): number => {
	if (reviews.length === 0) return 0;
	const total = reviews.reduce((sum, review) => sum + review.rating, 0);
	return Math.round((total / reviews.length) * 10) / 10;
};

export const filterReviewsByRating = (
	reviews: ReviewItem[],
	minRating: number
): ReviewItem[] => {
	return reviews.filter((review) => review.rating >= minRating);
};

export const filterReviewsByService = (
	reviews: ReviewItem[],
	serviceType: ServiceType
): ReviewItem[] => {
	return reviews.filter((review) => review.serviceType === serviceType);
};

export const getReviewStats = (reviews: ReviewItem[]): ReviewStats => {
	const ratingDistribution: RatingDistribution = {
		1: 0,
		2: 0,
		3: 0,
		4: 0,
		5: 0,
	};

	reviews.forEach((review) => {
		// Ensure rating is within valid range before using as index
		if (review.rating >= 1 && review.rating <= 5) {
			ratingDistribution[review.rating as keyof RatingDistribution]++;
		}
	});

	const dates = reviews
		.map((review) => review.date)
		.filter((date): date is string => date !== undefined)
		.sort();

	return {
		totalReviews: reviews.length,
		averageRating: calculateAverageRating(reviews),
		ratingDistribution,
		mostRecentDate: dates[dates.length - 1],
	};
};

export const formatReviewDate = (dateString: string): string => {
	const date = new Date(dateString);
	const now = new Date();
	const diffTime = Math.abs(now.getTime() - date.getTime());
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

	if (diffDays === 1) return "Yesterday";
	if (diffDays < 7) return `${diffDays} days ago`;
	if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
	if (diffDays < 365) return `${Math.ceil(diffDays / 30)} months ago`;

	return date.toLocaleDateString("en-NZ", {
		year: "numeric",
		month: "long",
		day: "numeric",
	});
};

// Avatar utility functions
export const generateInitials = (name: string): string => {
	return name
		.split(" ")
		.map((word) => word.charAt(0))
		.join("")
		.substring(0, 2)
		.toUpperCase();
};

export const generateAvatarColor = (name: string): string => {
	// Generate a consistent color based on name
	const colors = [
		"#e74c3c",
		"#3498db",
		"#2ecc71",
		"#f39c12",
		"#9b59b6",
		"#e67e22",
		"#1abc9c",
		"#34495e",
		"#e91e63",
		"#8bc34a",
	];

	let hash = 0;
	for (let i = 0; i < name.length; i++) {
		hash = name.charCodeAt(i) + ((hash << 5) - hash);
	}

	return colors[Math.abs(hash) % colors.length];
};

export const getAvatarProps = (review: ReviewItem) => {
	const initials = review.initials || generateInitials(review.author);
	const backgroundColor = generateAvatarColor(review.author);

	return {
		initials,
		backgroundColor,
		hasImage: !!review.avatarUrl,
	};
};
