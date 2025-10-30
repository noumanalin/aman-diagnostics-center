// const { defineConfig } = require("cypress");

import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // your Vite dev server URL
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
  },
});
