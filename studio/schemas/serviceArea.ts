import { defineType, defineField } from "sanity";

export const serviceArea = defineType({
  name: "serviceArea",
  title: "Service Area",
  type: "document",
  fields: [
    defineField({
      name: "city",
      title: "City",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "Lincoln"',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "city", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "state",
      title: "State",
      type: "string",
      initialValue: "California",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{ type: "string" }],
      description: "Bullet points about this service area",
    }),
    defineField({
      name: "isPrimary",
      title: "Primary Service Area",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "seoContent",
      title: "SEO Content Sections",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "heading",
              type: "string",
              title: "Heading",
            },
            {
              name: "body",
              type: "text",
              title: "Body",
            },
            {
              name: "bullets",
              type: "array",
              title: "Bullets",
              of: [{ type: "string" }],
            },
          ],
        },
      ],
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "city",
      subtitle: "state",
      media: "image",
    },
  },
});
