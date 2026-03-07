import { defineType, defineField } from "sanity";

export const processStep = defineType({
  name: "processStep",
  title: "Process Step",
  type: "document",
  fields: [
    defineField({
      name: "step",
      title: "Step Number",
      type: "number",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
      description: 'e.g. "Free Consultation"',
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: {
    select: {
      step: "step",
      title: "title",
    },
    prepare({ step, title }) {
      return {
        title: `Step ${step}: ${title}`,
      };
    },
  },
});
