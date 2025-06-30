// Example usage of Reviews component with different configurations
// This file shows how to use the Reviews component with various options

import React from "react";
import { Reviews } from "../components/Reviews/Reviews";
import type { ReviewItem } from "../types/review";
import { calculateAverageRating, getReviewStats } from "../types/review";

// Example 1: Real Google Reviews Data
const googleReviews: ReviewItem[] = [
	{
		id: 1,
		text: "Outstanding service! Tyla came to our home and transformed our Golden Retriever Luna. She was so patient and gentle, and Luna looked absolutely stunning afterward. The convenience of mobile grooming is unbeatable!",
		author: "Sarah Thompson",
		title: "Pet Owner",
		date: "2024-01-20",
		rating: 5,
		source: "google",
		petName: "Luna",
		serviceType: "full-groom",
		verified: true,
		location: "Christchurch Central",
	},
	{
		id: 2,
		text: "Best grooming experience we've ever had! Our anxious rescue dog Max was so comfortable with Tyla's approach. She took her time and made sure he felt safe throughout the process.",
		author: "James Wilson",
		title: "Dog Dad",
		date: "2024-01-15",
		rating: 5,
		source: "google",
		petName: "Max",
		serviceType: "puppy-groom",
		verified: true,
		location: "Riccarton",
	},
];

// Example 2: Mixed source reviews
const mixedSourceReviews: ReviewItem[] = [
	{
		id: 1,
		text: "Incredible attention to detail and such a caring approach to our senior dog Buddy.",
		author: "Emma Davis",
		title: "Dog Mum",
		date: "2024-01-10",
		rating: 5,
		source: "facebook",
		petName: "Buddy",
		serviceType: "mini-groom",
		verified: true,
	},
	{
		id: 2,
		text: "Professional, punctual, and our Poodle Princess looks amazing! Highly recommend.",
		author: "Michael Brown",
		date: "2024-01-08",
		rating: 5,
		source: "direct",
		petName: "Princess",
		serviceType: "full-groom",
	},
	{
		id: 3,
		text: "Great experience! Tyla was fantastic with our puppy's first grooming session.",
		author: "Lisa Zhang",
		title: "First-time Pet Owner",
		date: "2024-01-05",
		rating: 4,
		source: "website",
		serviceType: "puppy-groom",
	},
];

// Example usage components:

// Basic reviews (uses defaults)
export const BasicReviews: React.FC = () => <Reviews />;

// Reviews with all badges shown
export const ReviewsWithBadges: React.FC = () => (
	<Reviews
		reviews={mixedSourceReviews}
		showSource={true}
		showServiceType={true}
		showRating={true}
	/>
);

// Carousel layout for showcasing
export const ReviewsCarousel: React.FC = () => (
	<Reviews
		reviews={googleReviews}
		layout="carousel"
		showSource={true}
		maxReviews={8}
	/>
);

// List layout for detailed view
export const ReviewsList: React.FC = () => (
	<Reviews
		reviews={mixedSourceReviews}
		layout="list"
		showSource={true}
		showServiceType={true}
	/>
);

// Only 5-star reviews
export const FiveStarReviews: React.FC = () => (
	<Reviews
		reviews={mixedSourceReviews}
		filterByRating={5}
		showRating={true}
		maxReviews={4}
	/>
);

// Reviews for specific service
export const PuppyGroomReviews: React.FC = () => {
	const puppyReviews = mixedSourceReviews.filter(
		(review) => review.serviceType === "puppy-groom"
	);

	return (
		<Reviews reviews={puppyReviews} showServiceType={true} layout="grid" />
	);
};

// Reviews stats component
export const ReviewsWithStats: React.FC = () => {
	const stats = getReviewStats(mixedSourceReviews);
	const averageRating = calculateAverageRating(mixedSourceReviews);

	return (
		<div>
			<div style={{ textAlign: "center", marginBottom: "2rem" }}>
				<h3>Customer Satisfaction</h3>
				<div style={{ fontSize: "2rem", color: "#e74c3c" }}>
					⭐ {averageRating}/5
				</div>
				<p>Based on {stats.totalReviews} reviews</p>
			</div>
			<Reviews
				reviews={mixedSourceReviews}
				showSource={true}
				showRating={true}
			/>
		</div>
	);
};

// Compact mobile-friendly reviews
export const CompactReviews: React.FC = () => (
	<Reviews
		reviews={mixedSourceReviews}
		maxReviews={3}
		showRating={true}
		layout="list"
	/>
);

/*
CONFIGURATION OPTIONS GUIDE:

reviews?: ReviewItem[]           // Custom review data
maxReviews?: number             // Limit number of reviews shown
showSource?: boolean            // Show Google/Facebook badges
showServiceType?: boolean       // Show service type badges
showRating?: boolean           // Show star ratings
layout?: 'grid' | 'carousel' | 'list'  // Layout style
filterByRating?: number        // Show only reviews >= rating

LAYOUT OPTIONS:

1. Grid (default) - Responsive card grid
2. Carousel - Horizontal scrolling cards
3. List - Vertical list, good for detailed view

BADGE TYPES:

Source badges:
- Google (blue) 🔍
- Facebook (blue) 📘  
- Direct (red) 💬
- Yelp (red) 🥇
- Website (green) 🌐

Service badges:
- Full Groom
- Mini Groom  
- Puppy Groom
- Nail Trim
- Bath Only
- De-shedding

MIGRATION FROM PLACEHOLDER TO REAL REVIEWS:

// Before (current):
<Reviews />

// After (with real data):
<Reviews 
  reviews={realReviewData}
  showSource={true}
  showServiceType={true}
  layout="grid"
/>

INTEGRATION WITH REVIEW PLATFORMS:

// Google Reviews API integration
const fetchGoogleReviews = async () => {
  // Fetch from Google My Business API
  // Transform to ReviewItem format
}

// Manual review entry for direct testimonials
const directReview: ReviewItem = {
  id: Date.now(),
  text: "Amazing service!",
  author: "Happy Customer",
  rating: 5,
  source: "direct",
  date: new Date().toISOString(),
  verified: true
}

*/
