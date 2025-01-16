import { defineField } from "sanity";

// sanity/pet.ts
export default {
    name: 'post',
    type: 'document',
    title: 'Post',
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Name'
        },
        //slug field
        defineField(
            {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            description: 'tilte of the post',
            options: {
                source: 'name',
                maxLength: 96
            }
        }),
        defineField(
            {
            name: 'summary',
            type: 'text',
            title: 'Summary',
            description: 'short summary of the post',
        }),
        defineField(
            {
            name: 'image',
            type: 'image',
            title: 'Image',
}),
        defineField(
            {
            name: 'content',
            type: 'array',
            of: [{type: 'block'}],
            }
        ),
    ]
}