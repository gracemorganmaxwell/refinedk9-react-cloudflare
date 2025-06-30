// Gallery Types for RefinedK9 Landing Page

export interface GalleryItem {
	id: number;
	alt: string;
	src?: string; // Optional - for when you add real images
	placeholder?: string; // For emoji placeholders or loading states
	title?: string;
	category?: GalleryCategory;
	date?: string; // When the photo was taken
	clientName?: string; // Optional - for client attribution (with permission)
}

export type GalleryCategory =
	| "before-after"
	| "grooming"
	| "puppy"
	| "full-service"
	| "mini-groom"
	| "special-occasion";

export interface GalleryProps {
	items?: GalleryItem[];
	showCategories?: boolean;
	categoryFilter?: GalleryCategory;
	maxItems?: number;
}

// Example usage when you add real images:
export const exampleGalleryItem: GalleryItem = {
	id: 1,
	alt: "Golden Retriever after full grooming service",
	src: "/src/assets/images/gallery/golden-retriever-after.jpg",
	title: "Golden Retriever - Full Groom",
	category: "full-service",
	date: "2024-01-15",
	clientName: "Bella", // With permission
};

// Utility function to filter gallery items
export const filterGalleryByCategory = (
	items: GalleryItem[],
	category: GalleryCategory
): GalleryItem[] => {
	return items.filter((item) => item.category === category);
};

// Utility function to get unique categories
export const getGalleryCategories = (
	items: GalleryItem[]
): GalleryCategory[] => {
	const categories = items
		.map((item) => item.category)
		.filter((category): category is GalleryCategory => category !== undefined);

	return Array.from(new Set(categories));
};
