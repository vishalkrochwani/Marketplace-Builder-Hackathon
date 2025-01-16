import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import deskStructure from './studio/deskStructure';

export default defineConfig({
  projectId: 'your_project_id', // Replace with your Sanity project ID
  dataset: 'production', // Or your custom dataset
  plugins: [
    deskTool({
      structure: deskStructure,
    }),
    visionTool(),
  ],
});
