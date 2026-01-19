import { devices } from "@playwright/test";

import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "./tests",
  use: {
    baseURL: process.env.BASE_URL ?? "http://localhost:3000/react-native-keyboard-controller/",
  },
  webServer: process.env.BASE_URL
    ? undefined
    : {
        port: 3000,
        command: "yarn start",
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
