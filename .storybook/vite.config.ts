import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        {
          "nuxt-icons": ["NuxtIcon", ["default", "NuxtIcon"]],
        },
      ],
      dirs: ["../composables"],
      vueTemplate: true,
    }),
    Components({
      dirs: [
        "../components/",
      ],
      dts: true,
      directoryAsNamespace: true,
    }),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("../", import.meta.url)),
      // Add any other aliases you use in your code base
      // https://nuxt.com/docs/api/configuration/nuxt-config/#alias
    },
  },
  // optimizeDeps: { exclude: ["fsevents"] },
});
