// lib/sanity.js
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'your-project-id', // Find this in your Sanity project settings
  dataset: 'production', // Use the dataset you created
  useCdn: process.env.NODE_ENV === 'production',
});

export default client;
