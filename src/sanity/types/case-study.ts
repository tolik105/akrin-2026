import { defineField, defineType } from 'sanity'

export const caseStudyType = defineType({
  name: 'caseStudy',
  title: 'Case Study',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'titleEN', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleEN',
      title: 'Title (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'titleJA',
      title: 'Title (Japanese)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryEN',
      title: 'Category (English)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'categoryJA',
      title: 'Category (Japanese)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerptEN',
      title: 'Excerpt (English)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'excerptJA',
      title: 'Excerpt (Japanese)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'metaDescriptionEN',
      title: 'Meta Description (English)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'metaDescriptionJA',
      title: 'Meta Description (Japanese)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        { name: 'alt', type: 'string', title: 'Alt (English)' },
        { name: 'altJA', type: 'string', title: 'Alt (Japanese)' },
        { name: 'caption', type: 'string', title: 'Caption' },
      ],
    }),
    defineField({
      name: 'imageUrl',
      title: 'Image URL (Legacy)',
      type: 'string',
    }),
    defineField({
      name: 'htmlContentEN',
      title: 'Content (English HTML)',
      type: 'text',
    }),
    defineField({
      name: 'htmlContentJA',
      title: 'Content (Japanese HTML)',
      type: 'text',
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'titleEN',
      subtitle: 'categoryEN',
      media: 'mainImage',
    },
  },
})
