"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { directusAssetUrl } from "@/lib/app-utils";

interface GalleryItem {
  directus_files_id: {
    id: string;
  };
}

interface FeaturedImage {
  id: string;
}

interface ArticleGalleryProps {
  title: string;
  featured?: FeaturedImage | null;
  gallery?: GalleryItem[] | null;
}

export default function ArticleGallery({
  title,
  featured,
  gallery,
}: ArticleGalleryProps) {
  // Create array of all images starting with featured, then gallery
  const allImages = [];

  if (featured) {
    allImages.push({
      id: featured.id,
      alt: title,
      isFeatured: true,
    });
  }

  if (gallery) {
    gallery.forEach((galleryItem, index) => {
      allImages.push({
        id: galleryItem.directus_files_id.id,
        alt: `${title} - Gallery ${index + 1}`,
        isFeatured: false,
      });
    });
  }

  // Don't render if no images
  if (allImages.length === 0) {
    return null;
  }

  return (
    <div className="mb-8 px-36">
      <Carousel className="w-full">
        <CarouselContent className="flex-row-reverse">
          {allImages.map((image) => (
            <CarouselItem key={image.id}>
              <div className="w-full">
                <img
                  src={directusAssetUrl(image.id)}
                  alt={image.alt}
                  className="w-full h-64 md:h-[700px] object-cover rounded-lg shadow-lg"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
