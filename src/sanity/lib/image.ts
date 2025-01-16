import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

import { dataset, projectId } from '../env';

// Ensure dataset and projectId are strings
if (!projectId || !dataset) {
  throw new Error("Missing Sanity project ID or dataset in environment variables.");
}

// Initialize the builder
const builder = createImageUrlBuilder({ projectId, dataset });

/**
 * Generates a URL for a Sanity image source.
 * @param source - The source image from Sanity.
 * @returns A URL string for the image.
 */
export const urlFor = (source: SanityImageSource): string => {
  return builder.image(source).url();
};
