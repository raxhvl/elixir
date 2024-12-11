import { defineConfig } from "vocs";

import { githubUrl } from "./docs/config";

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
