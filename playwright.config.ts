import { devices } from "@playwright/test";

import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000",
  },
  webServer: process.env.BASE_URL
    ? undefined
    : {
        port: 3000,
        command: "yarn docusaurus serve",
        reuseExistingServer: true,
      },
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },
  ],
};

export default config;
