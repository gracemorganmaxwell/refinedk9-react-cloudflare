// Example usage of Gallery component with real images
// This file shows how to use the Gallery component once you have real photos

import React from "react";
import { Gallery } from "../components/Gallery/Gallery";
import type { GalleryItem } from "../types/gallery";

// Example 1: Gallery with real images
const realGalleryItems: GalleryItem[] = [
	{
		id: 1,
		alt: "Golden Retriever before and after grooming",
		src: "/src/assets/images/gallery/golden-retriever-before-after.jpg",
		title: "Golden Retriever - Full Transformation",
		category: "before-after",
		date: "2024-01-15",
		clientName: "Bella",
	},
	{
		id: 2,
		alt: "Poodle getting stylish haircut",
		src: "/src/assets/images/gallery/poodle-styling.jpg",
		title: "Poodle - Creative Styling",
		category: "grooming",
		date: "2024-01-10",
	},
	{
		id: 3,
		alt: "Puppy's first gentle grooming experience",
		src: "/src/assets/images/gallery/puppy-first-groom.jpg",
		title: "First Timer - Gentle Introduction",
		category: "puppy",
		date: "2024-01-08",
	},
];

// Example 2: Mixed content (some real images, some placeholders)
const mixedGalleryItems: GalleryItem[] = [
	{
		id: 1,
		alt: "Professional grooming result",
		src: "/src/assets/images/gallery/professional-result.jpg",
		title: "Professional Full Service",
		category: "full-service",
	},
	{
		id: 2,
		alt: "Coming soon - more photos",
		placeholder: "📸",
		title: "More Photos Coming Soon",
		category: "grooming",
	},
];

// Example usage components:

export const GalleryWithRealImages: React.FC = () => (
	<Gallery items={realGalleryItems} showCategories={true} />
);

export const GalleryWithCategories: React.FC = () => (
	<Gallery items={realGalleryItems} showCategories={true} />
);

export const SimplePlaceholderGallery: React.FC = () => (
	<Gallery /> // Uses default placeholder items
);

export const MixedContentGallery: React.FC = () => (
	<Gallery items={mixedGalleryItems} showCategories={false} />
);

// Example: How to integrate with your asset management
import heroImage from "../assets/images/hero/hero-dog.jpg";
// import galleryImage1 from '../assets/images/gallery/image1.jpg'
// import galleryImage2 from '../assets/images/gallery/image2.jpg'

export const GalleryWithImportedAssets: React.FC = () => {
	const galleryWithAssets: GalleryItem[] = [
		{
			id: 1,
			alt: "Hero dog grooming photo",
			src: heroImage, // Using imported asset
			title: "Featured Grooming Work",
			category: "full-service",
		},
		// Add more as you import more assets
	];

	return <Gallery items={galleryWithAssets} showCategories={true} />;
};

/*
MIGRATION GUIDE: From placeholders to real images

1. Add images to src/assets/images/gallery/
2. Import them or reference them by path
3. Create GalleryItem objects with src property
4. Replace placeholder gallery with real one:

// Before (current):
<Gallery />

// After (with real images):
<Gallery items={realGalleryItems} showCategories={true} />

*/
