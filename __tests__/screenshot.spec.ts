import * as fs from "fs";

import { argosScreenshot } from "@argos-ci/playwright";
import { test } from "@playwright/test";

import { extractSitemapPathnames, pathnameToArgosName } from "./utils";

// Constants
const siteUrl = process.env.BASE_URL ?? "http://localhost:3000";
const sitemapPath = "./build/sitemap.xml";
const stylesheetPath = "./__tests__/screenshot.css";
const stylesheet = fs.readFileSync(stylesheetPath).toString();

// Skip screenshot tests when testing against remote URLs
// Screenshot comparisons require pixel-perfect matches that don't work with deployed sites
const isRemoteUrl = process.env.BASE_URL && !process.env.BASE_URL.includes("localhost");
const testFn = isRemoteUrl ? test.skip : test;

function waitForDocusaurusHydration() {
  return document.documentElement.dataset.hasHydrated === "true";
}

function screenshotPathname(pathname: string) {
  testFn(`pathname ${pathname}`, async ({ page }) => {
    const url = siteUrl + pathname;

    await page.goto(url);
    // Wait for hydration, requires Docusaurus v2.4.3+
    // Docusaurus adds a <html data-has-hydrated="true"> once hydrated
    // See https://github.com/facebook/docusaurus/pull/9256
    await page.waitForFunction(waitForDocusaurusHydration);
    await page.addStyleTag({ content: stylesheet });
    await argosScreenshot(page, pathnameToArgosName(pathname));
  });
}

function isNotVersionedDocsPathname(pathname: string): boolean {
  return !/^\/[^/]+\/docs\/((\d+\.\d+\.\d+)|(next))\//.test(pathname);
}

test.describe("Docusaurus site screenshots", () => {
  const pathnames = extractSitemapPathnames(sitemapPath).filter(
    isNotVersionedDocsPathname,
  );

  console.log("Pathnames to screenshot:", pathnames);
  pathnames.forEach(screenshotPathname);
});
