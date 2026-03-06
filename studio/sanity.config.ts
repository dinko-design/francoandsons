import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

export default defineConfig({
  name: "francoandsons",
  title: "Franco and Sons Construction LLC",

  projectId: "7com7vhk",
  dataset: "production",

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Leads")
              .child(
                S.documentTypeList("lead")
                  .title("Form Submissions")
                  .defaultOrdering([{ field: "submittedAt", direction: "desc" }])
              ),
            S.divider(),
            S.listItem()
              .title("Blog Posts")
              .child(S.documentTypeList("blogPost").title("Blog Posts")),
            S.listItem()
              .title("Testimonials")
              .child(S.documentTypeList("testimonial").title("Testimonials")),
            S.listItem()
              .title("Projects")
              .child(S.documentTypeList("project").title("Portfolio Projects")),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
});
