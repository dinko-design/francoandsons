import { defineType, defineField } from "sanity";

export const galleryImage = defineType({
  name: "galleryImage",
  title: "Gallery Image",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "Kitchen Island Close-up"',
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alt Text",
      type: "string",
      description: "Descriptive text for screen readers and SEO (e.g. 'modern white kitchen with quartz countertops in Roseville, CA')",
    }),
    defineField({
      name: "caption",
      title: "Caption",
      type: "string",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Kitchen", value: "Kitchen" },
          { title: "Bathroom", value: "Bathroom" },
          { title: "Commercial", value: "Commercial" },
          { title: "ADA", value: "ADA" },
          { title: "Home Addition", value: "Home Addition" },
          { title: "Before & After", value: "Before & After" },
          { title: "Interior", value: "Interior" },
          { title: "Exterior", value: "Exterior" },
        ],
      },
    }),
    defineField({
      name: "service",
      title: "Service",
      type: "reference",
      to: [{ type: "service" }],
    }),
    defineField({
      name: "project",
      title: "Project",
      type: "reference",
      to: [{ type: "project" }],
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Roseville, CA"',
    }),
    defineField({
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "image",
    },
  },
});
