import { defineType, defineField } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Client Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string",
      description: 'e.g. "Roseville, CA"',
    }),
    defineField({
      name: "service",
      title: "Service",
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
          "Electrical & Plumbing Upgrades",
          "Interior Home Painting",
          "Exterior Home Improvements",
        ],
      },
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "rating",
      title: "Rating (1-5)",
      type: "number",
      validation: (Rule) => Rule.min(1).max(5),
      initialValue: 5,
    }),
    defineField({
      name: "image",
      title: "Project Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "featured",
      title: "Show on Homepage",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "service",
      media: "image",
    },
  },
});
