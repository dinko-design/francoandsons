import { defineType, defineField } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "Kitchen Remodel - Roseville"',
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "service",
      title: "Service Type",
      type: "string",
      options: {
        list: [
          "Kitchen Remodeling",
          "Bathroom Remodeling",
          "Commercial Remodeling",
          "ADA / Accessible Bathroom Remodeling",
          "Home Additions",
          "Interior Remodeling",
          "Custom Showers",
          "Flooring Installation",
        ],
      },
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "images",
      title: "Project Photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "beforeImage",
      title: "Before Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "afterImage",
      title: "After Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "completedDate",
      title: "Date Completed",
      type: "date",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "service",
      media: "images.0",
    },
  },
});
