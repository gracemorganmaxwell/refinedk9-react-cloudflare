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
			alt: "a carmel and white border collie",
			src: "/gallery/1.png",
			title: "A Caramel and White Border Collie",
			category: "full-service",
		},
		{
			id: 2,
			alt: "Tyla smiles holding a small black dog beside her grroming trailer and a min-schnauzer sits by her feet.",
			src: "/gallery/2.png",
			title: "Happy Client After Groom",
			category: "grooming",
		},
		{
			id: 3,
			alt: "Cute small white dog after a groom wearing a red bowtie",
			src: "/gallery/3.png",
			title: "A Well-Groomed Pup",
			category: "full-service",
		},
		{
			id: 4,
			alt: "A small griffin dog after a groom, wearing a blue bowtie",
			src: "/gallery/4.png",
			title: "A Well-Groomed Griffin",
			category: "before-after",
		},
		{
			id: 5,
			alt: "A black and tan king charles spaniel after a groom",
			src: "/gallery/5.png",
			title: "A Black and Tan King Charles Spaniel",
			category: "grooming",
		},
		{
			id: 6,
			alt: "A white spoodle after a groom, wearing a blue bowtie",
			src: "/gallery/6.png",
			title: "A White Spoodle",
			category: "full-service",
		},
		{
			id: 7,
			alt: "A carmel king charles spaniel after a groom, in a red bowtie",
			src: "/gallery/7.png",
			title: "A Caramel King Charles Spaniel",
			category: "grooming",
		},
		{
			id: 8,
			alt: "The smallest and cutest black pomeranian in the world after a groom",
			src: "/gallery/8.png",
			title: "The Smallest Black Pomeranian",
			category: "full-service",
		},
		{
			id: 9,
			alt: "A black and white border collie after a groom, wearing a blue bowtie",
			src: "/gallery/9.png",
			title: "A Black and White Border Collie",
			category: "grooming",
		},
		{
			id: 10,
			alt: "A light carmel cavoodle after a groom, wearing a green bowtie",
			src: "/gallery/10.png",
			title: "A Light Carmell Cavoodle",
			category: "full-service",
		},
		{
			id: 11,
			alt: "Tiny black pup with fluffy ears and a green bowtie",
			src: "/gallery/11.png",
			title: "A Tiny Black Pup",
			category: "grooming",
		},
		{
			id: 12,
			alt: "Dog grooming artistry",
			src: "/gallery/12.png",
			title: "Grooming Artistry",
			category: "full-service",
		},
		{
			id: 13,
			alt: "Tyla standing with a small white dog with black ears after a groom inside the grooming trailer with a white background",
			src: "/gallery/13.png",
			title: "A White Dog with Black Ears",
			category: "before-after",
		},
		{
			id: 14,
			alt: "Smiling cream colored cavoodle after a groom, wearing a blue bowtie",
			src: "/gallery/14.png",
			title: "A Cream Colored Cavoodle",
			category: "grooming",
		},
		{
			id: 15,
			alt: "A pug after a groom, wearing a black bowtie",
			src: "/gallery/15.png",
			title: "A Pug",
			category: "full-service",
		},
		{
			id: 16,
			alt: "Cutest grey dogo with a white beard after a groom, wearing a green bowtie",
			src: "/gallery/16.png",
			title: "A Grey Dogo with a White Beard",
			category: "grooming",
		},
		{
			id: 17,
			alt: "Cute small white dog with black flopp ears after a groom, wearing a pink neck bow",
			src: "/gallery/17.png",
			title: "A White Dog with Black Floppy Ears",
			category: "full-service",
		},
		{
			id: 18,
			alt: "Black medium sized dog, with floppy ears after a groom, wearing a red bowtie",
			src: "/gallery/18.png",
			title: "A Black Medium Sized Dog",
			category: "grooming",
		},
		{
			id: 19,
			alt: "Salt and pepper small terrier during a groom having a treat.",
			src: "/gallery/19.png",
			title: "A Salt and Pepper Small Terrier",
			category: "full-service",
		},
		{
			id: 20,
			alt: "Happy small white dog after a groom, wearing a green bowtie",
			src: "/gallery/20.png",
			title: "A Happy White Dog",
			category: "grooming",
		},
		{
			id: 21,
			alt: "Smiling medium sized black dog after a groom, wearing a red bowtie",
			src: "/gallery/21.png",
			title: "A Black Dog",
			category: "full-service",
		},
		{
			id: 22,
			alt: "Sunset in the background. Tyla is smiling and leading a small white dog after a groom, out of the grooming trailer",
			src: "/gallery/22.png",
			title: "A White Dog",
			category: "grooming",
		},
		{
			id: 23,
			alt: "Golden retriever after a groom, wearing a red bowtie",
			src: "/gallery/23.png",
			title: "A Golden Retriever",
			category: "before-after",
		},
		{
			id: 24,
			alt: "Small grey and white dog after a groom, wearing a blue bowtie",
			src: "/gallery/24.png",
			title: "A Grey and White Dog",
			category: "full-service",
		},
		{
			id: 25,
			alt: "Husky pup after a groom",
			src: "/gallery/25.png",
			title: "A Husky Pup",
			category: "grooming",
		},
		{
			id: 26,
			alt: "Small light grey and brown dog after a groom, wearing a blue bowtie",
			src: "/gallery/26.png",
			title: "A Light Grey and Brown Dog",
			category: "full-service",
		},
		{
			id: 27,
			alt: "Two minature schnauzers after a groom, wearing a red bowtie",
			src: "/gallery/27.png",
			title: "Two Minature Schnauzers",
			category: "grooming",
		},
		{
			id: 28,
			alt: "Black welsh terrier after a groom",
			src: "/gallery/28.png",
			title: "A Black Welsh Terrier",
			category: "full-service",
		},
		{
			id: 29,
			alt: "Happy golden spaniel after a groom, being patted by Tyla in the grooming trailer",
			src: "/gallery/29.png",
			title: "A Happy Golden Spaniel",
			category: "full-service",
		},
		{
			id: 30,
			alt: "A pug and a black griffin sitting together after a groom.",
			src: "/gallery/30.png",
			title: "A Pug and a Black Griffin",
			category: "full-service",
		},
		{
			id: 31,
			alt: "The grooming trailer and truck",
			src: "/gallery/31.png",
			title: "The Grooming Trailer and Truck",
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
