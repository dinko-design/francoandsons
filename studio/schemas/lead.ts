import { defineType, defineField } from "sanity";

export const lead = defineType({
  name: "lead",
  title: "Lead",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name: "phone",
      title: "Phone",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "service",
      title: "Service Requested",
      type: "string",
    }),
    defineField({
      name: "city",
      title: "City / Zip",
      type: "string",
    }),
    defineField({
      name: "message",
      title: "Message",
      type: "text",
    }),
    defineField({
      name: "submittedAt",
      title: "Submitted At",
      type: "datetime",
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "New", value: "new" },
          { title: "Contacted", value: "contacted" },
          { title: "Quoted", value: "quoted" },
          { title: "Won", value: "won" },
          { title: "Lost", value: "lost" },
        ],
      },
      initialValue: "new",
    }),
    defineField({
      name: "notes",
      title: "Internal Notes",
      type: "text",
      description: "Private notes about this lead (not visible to the customer)",
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "service",
      date: "submittedAt",
      status: "status",
    },
    prepare({ title, subtitle, status }) {
      const statusEmoji: Record<string, string> = {
        new: "🔵",
        contacted: "🟡",
        quoted: "🟠",
        won: "🟢",
        lost: "🔴",
      };
      return {
        title: `${statusEmoji[status] || ""} ${title}`,
        subtitle: subtitle || "No service selected",
      };
    },
  },
  orderings: [
    {
      title: "Newest First",
      name: "submittedAtDesc",
      by: [{ field: "submittedAt", direction: "desc" }],
    },
  ],
});
