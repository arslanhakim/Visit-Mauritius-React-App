import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()]
// })
// https://vitejs.dev/config/
export default defineConfig({
  // base: "/Stakepool-Frontend/",
  plugins: [react()],
  // resolve: {
  //   alias: {
  //     "~": path.resolve(__dirname, "node_modules"),
  //     "@": path.resolve(__dirname, "src"),
  //   },
  // },
  build: {
    chunkSizeWarningLimit: 1600,
  },
});
