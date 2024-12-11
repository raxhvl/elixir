import { defineConfig } from "vocs";

export const githubUrl = "https://github.com/raxhvl/elixir";

export default defineConfig({
  title: "Elixir 🧪",
  sidebar: [
    {
      text: "Analysis",
      items: [
        {
          text: "EIPs",
          link: "/analysis/eips",
        },
      ],
    },
  ],
  socials: [
    {
      icon: "github",
      link: githubUrl,
    },
  ],
});
