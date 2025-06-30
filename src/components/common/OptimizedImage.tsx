import React from "react";

interface OptimizedImageProps {
	src: string;
	alt: string;
	width?: number;
	height?: number;
	className?: string;
	loading?: "lazy" | "eager";
	placeholder?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
	src,
	alt,
	width,
	height,
	className,
	loading = "lazy",
	placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+",
}) => {
	const [isLoaded, setIsLoaded] = React.useState(false);
	const [hasError, setHasError] = React.useState(false);

	const handleLoad = () => {
		setIsLoaded(true);
	};

	const handleError = () => {
		setHasError(true);
	};

	return (
		<div className={`optimized-image-container ${className || ""}`}>
			{!isLoaded && !hasError && (
				<img
					src={placeholder}
					alt=""
					style={{
						width: width || "100%",
						height: height || "auto",
						filter: "blur(2px)",
						transition: "filter 0.3s ease",
					}}
				/>
			)}
			<img
				src={src}
				alt={alt}
				width={width}
				height={height}
				loading={loading}
				onLoad={handleLoad}
				onError={handleError}
				style={{
					display: isLoaded ? "block" : "none",
					width: width || "100%",
					height: height || "auto",
					transition: "opacity 0.3s ease",
				}}
			/>
			{hasError && (
				<div
					style={{
						width: width || "100%",
						height: height || "200px",
						backgroundColor: "#f5f5f5",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						color: "#999",
						fontSize: "14px",
					}}
				>
					Image not available
				</div>
			)}
		</div>
	);
};
