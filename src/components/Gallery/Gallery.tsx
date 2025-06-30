import React from "react";
import "./Gallery.css";
import type { GalleryItem, GalleryProps } from "../../types/gallery";

export const Gallery: React.FC<GalleryProps> = ({
	items,
	showCategories = false,
}) => {
	// Default placeholder gallery items
	const defaultGalleryItems: GalleryItem[] = [
		{
			id: 1,
			alt: "Happy Golden Retriever after grooming",
			placeholder: "🐕",
			title: "Golden Retriever - Full Groom",
			category: "full-service",
		},
		{
			id: 2,
			alt: "Cute Poodle with fresh haircut",
			placeholder: "🐩",
			title: "Poodle - Styling & Trim",
			category: "grooming",
		},
		{
			id: 3,
			alt: "Border Collie looking fresh",
			placeholder: "🐕‍🦺",
			title: "Border Collie - De-shedding",
			category: "grooming",
		},
		{
			id: 4,
			alt: "Shih Tzu with bow tie",
			placeholder: "🎀",
			title: "Shih Tzu - Special Occasion",
			category: "special-occasion",
		},
		{
			id: 5,
			alt: "Labrador after bath time",
			placeholder: "🛁",
			title: "Labrador - Bath & Brush",
			category: "mini-groom",
		},
		{
			id: 6,
			alt: "Small dog getting pampered",
			placeholder: "✨",
			title: "Small Breed - Mini Groom",
			category: "mini-groom",
		},
		{
			id: 7,
			alt: "German Shepherd looking majestic",
			placeholder: "🐺",
			title: "German Shepherd - Full Service",
			category: "full-service",
		},
		{
			id: 8,
			alt: "Puppy's first grooming session",
			placeholder: "🦮",
			title: "Puppy Introduction Groom",
			category: "puppy",
		},
	];

	const galleryItems = items || defaultGalleryItems;

	const renderGalleryItem = (item: GalleryItem) => (
		<div key={item.id} className="gallery-item">
			<div className="gallery-placeholder">
				{item.src ? (
					// When real images are added
					<img
						src={item.src}
						alt={item.alt}
						className="gallery-image"
						loading="lazy"
					/>
				) : (
					// Current placeholder approach
					<>
						<span className="gallery-emoji">{item.placeholder}</span>
						<span className="gallery-text">
							{item.title || "Beautiful grooming result"}
						</span>
					</>
				)}
			</div>
			{item.category && showCategories && (
				<div className="gallery-category">
					{item.category.replace("-", " ").toUpperCase()}
				</div>
			)}
		</div>
	);

	return (
		<section className="gallery">
			<div className="container">
				<h2 className="section-title">Little 🐾 Paws Gallery</h2>
				<p className="gallery-subtitle">
					- Refined K-9's Mobile Dog Grooming -
				</p>

				<div className="gallery-grid">
					{galleryItems.map(renderGalleryItem)}
				</div>

				<p className="gallery-note">
					* Actual photos of our grooming work would be displayed here. We
					respect our clients' privacy and only use photos with permission.
				</p>
			</div>
		</section>
	);
};
