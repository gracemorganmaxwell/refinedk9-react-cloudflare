import React, { useState } from "react";
import "./Gallery.css";
import type { GalleryItem, GalleryProps } from "../../types/gallery";

export const Gallery: React.FC<GalleryProps> = ({
	items,
	showCategories = false,
}) => {
	const [showAllImages, setShowAllImages] = useState(false);

	// Gallery items using actual images from the gallery folder
	const defaultGalleryItems: GalleryItem[] = [
		{
			id: 1,
			alt: "Beautiful dog grooming result",
			src: "/src/assets/images/gallery/one.png",
			title: "Professional Grooming Service",
			category: "full-service",
		},
		{
			id: 2,
			alt: "Happy dog after grooming session",
			src: "/src/assets/images/gallery/two.png",
			title: "Happy Client After Groom",
			category: "grooming",
		},
		{
			id: 3,
			alt: "Well-groomed dog portrait",
			src: "/src/assets/images/gallery/three.png",
			title: "Portrait of a Well-Groomed Pup",
			category: "full-service",
		},
		{
			id: 4,
			alt: "Dog grooming transformation",
			src: "/src/assets/images/gallery/four.png",
			title: "Grooming Transformation",
			category: "before-after",
		},
		{
			id: 5,
			alt: "Freshly groomed dog",
			src: "/src/assets/images/gallery/five.png",
			title: "Fresh and Clean",
			category: "grooming",
		},
		{
			id: 6,
			alt: "Professional dog grooming",
			src: "/src/assets/images/gallery/six.png",
			title: "Professional Grooming Service",
			category: "full-service",
		},
		{
			id: 7,
			alt: "Dog grooming excellence",
			src: "/src/assets/images/gallery/seven.png",
			title: "Grooming Excellence",
			category: "grooming",
		},
		{
			id: 8,
			alt: "Beautiful dog after grooming",
			src: "/src/assets/images/gallery/eight.png",
			title: "Beautiful Results",
			category: "full-service",
		},
		{
			id: 9,
			alt: "Well-cared for dog",
			src: "/src/assets/images/gallery/nine.png",
			title: "Well-Cared For Pup",
			category: "grooming",
		},
		{
			id: 10,
			alt: "Dog grooming showcase",
			src: "/src/assets/images/gallery/ten.png",
			title: "Grooming Showcase",
			category: "full-service",
		},
		{
			id: 11,
			alt: "Professional dog styling",
			src: "/src/assets/images/gallery/eleven.png",
			title: "Professional Styling",
			category: "grooming",
		},
		{
			id: 12,
			alt: "Dog grooming artistry",
			src: "/src/assets/images/gallery/twelve.png",
			title: "Grooming Artistry",
			category: "full-service",
		},
		{
			id: 13,
			alt: "Beautiful dog transformation",
			src: "/src/assets/images/gallery/thirteen.png",
			title: "Beautiful Transformation",
			category: "before-after",
		},
		{
			id: 14,
			alt: "Dog grooming perfection",
			src: "/src/assets/images/gallery/fourteen.png",
			title: "Grooming Perfection",
			category: "grooming",
		},
		{
			id: 15,
			alt: "Well-groomed dog portrait",
			src: "/src/assets/images/gallery/fifteen.png",
			title: "Portrait of Excellence",
			category: "full-service",
		},
		{
			id: 16,
			alt: "Dog grooming showcase",
			src: "/src/assets/images/gallery/sixteen.png",
			title: "Showcase of Quality",
			category: "grooming",
		},
		{
			id: 17,
			alt: "Professional dog care",
			src: "/src/assets/images/gallery/seventeen.png",
			title: "Professional Care",
			category: "full-service",
		},
		{
			id: 18,
			alt: "Dog grooming results",
			src: "/src/assets/images/gallery/eighteen.png",
			title: "Outstanding Results",
			category: "grooming",
		},
		{
			id: 19,
			alt: "Beautiful dog after grooming",
			src: "/src/assets/images/gallery/nineteen.png",
			title: "Beautiful After Groom",
			category: "full-service",
		},
		{
			id: 20,
			alt: "Dog grooming excellence",
			src: "/src/assets/images/gallery/twenty.png",
			title: "Excellence in Grooming",
			category: "grooming",
		},
		{
			id: 21,
			alt: "Professional dog styling",
			src: "/src/assets/images/gallery/twentyone.png",
			title: "Professional Styling",
			category: "full-service",
		},
		{
			id: 22,
			alt: "Dog grooming showcase",
			src: "/src/assets/images/gallery/twentytwo.png",
			title: "Showcase of Talent",
			category: "grooming",
		},
		{
			id: 23,
			alt: "Beautiful dog transformation",
			src: "/src/assets/images/gallery/twentythree.png",
			title: "Beautiful Transformation",
			category: "before-after",
		},
		{
			id: 24,
			alt: "Dog grooming artistry",
			src: "/src/assets/images/gallery/twentyfour.png",
			title: "Grooming Artistry",
			category: "full-service",
		},
		{
			id: 25,
			alt: "Professional dog care",
			src: "/src/assets/images/gallery/twentyfive.png",
			title: "Professional Care",
			category: "grooming",
		},
		{
			id: 26,
			alt: "Dog grooming excellence",
			src: "/src/assets/images/gallery/twentysix.png",
			title: "Excellence in Care",
			category: "full-service",
		},
		{
			id: 27,
			alt: "Beautiful dog after grooming",
			src: "/src/assets/images/gallery/twentyseven.png",
			title: "Beautiful Results",
			category: "grooming",
		},
		{
			id: 28,
			alt: "Dog grooming showcase",
			src: "/src/assets/images/gallery/twentyeight.png",
			title: "Showcase of Quality",
			category: "full-service",
		},
	];

	const galleryItems = items || defaultGalleryItems;
	const displayedItems = showAllImages
		? galleryItems
		: galleryItems.slice(0, 8);

	const renderGalleryItem = (item: GalleryItem) => (
		<div key={item.id} className="gallery-item">
			<div className="gallery-placeholder">
				{item.src ? (
					<img
						src={item.src}
						alt={item.alt}
						className="gallery-image"
						loading="lazy"
						onError={(e) => {
							// Fallback to placeholder if image fails to load
							const target = e.target as HTMLImageElement;
							target.style.display = "none";
							if (target.nextElementSibling) {
								target.nextElementSibling.classList.remove("hidden");
							}
						}}
					/>
				) : null}
				<div className={`gallery-fallback ${item.src ? "hidden" : ""}`}>
					<span className="gallery-emoji">{item.placeholder || "🐕"}</span>
					<span className="gallery-text">
						{item.title || "Beautiful grooming result"}
					</span>
				</div>
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
					{displayedItems.map(renderGalleryItem)}
				</div>

				{!showAllImages && galleryItems.length > 8 && (
					<div className="gallery-see-more">
						<button
							className="see-more-button"
							onClick={() => setShowAllImages(true)}
						>
							📸 See More Photos
						</button>
					</div>
				)}

				<p className="gallery-note">
					* All photos showcase our actual grooming work. We respect our
					clients' privacy and only use photos with permission.
				</p>
			</div>
		</section>
	);
};
