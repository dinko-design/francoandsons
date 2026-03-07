import { defineType, defineField } from "sanity";

export const promotion = defineType({
  name: "promotion",
  title: "Promotion",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "Spring Kitchen Special"',
    }),
    defineField({
      name: "subtitle",
      title: "Subtitle",
      type: "string",
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "$1,500 OFF"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "validThrough",
      title: "Valid Through",
      type: "date",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Promo Code",
      type: "string",
      description: "Promo code if applicable",
    }),
    defineField({
      name: "applicableServices",
      title: "Applicable Services",
      type: "array",
      of: [{ type: "reference", to: [{ type: "service" }] }],
    }),
    defineField({
      name: "badge",
      title: "Badge",
      type: "string",
      description: 'e.g. "Limited Time"',
    }),
    defineField({
      name: "active",
      title: "Active",
      type: "boolean",
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "discount",
    },
  },
});
