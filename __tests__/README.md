# Playwright Test Suite for react-native-keyboard-controller Documentation

This directory contains comprehensive end-to-end tests for the Docusaurus 3 documentation site using Playwright.

## Test Files

### 1. `screenshot.spec.ts`
- **Purpose**: Visual regression testing using Argos CI
- **Coverage**: Takes screenshots of all site pages for visual comparison
- **Features**:
  - Waits for Docusaurus hydration before capturing
  - Filters out versioned docs to avoid duplication
  - Applies custom CSS to hide dynamic/animated elements
  - Extracts pathnames from sitemap.xml

### 2. `docusaurus-features.spec.ts`
- **Purpose**: Comprehensive functional testing of documentation features
- **Coverage**: Tests critical Docusaurus functionality including:

#### Navigation and Sidebar Tests
- ✅ Sidebar navigation with active state tracking
- ✅ Expandable/collapsible sidebar categories
- ✅ Navbar navigation (Guides, API, Blog)
- ✅ Cross-page navigation maintaining context

#### Version Switching Tests
- ✅ Version dropdown visibility and interaction
- ✅ Switching between different documentation versions (1.0.0 - 1.20.0)
- ✅ Version context persistence across page navigation
- ✅ Multiple version options validation

#### Theme Toggle Tests
- ✅ Dark/light mode switching
- ✅ Theme persistence across page navigation
- ✅ Theme button visibility and functionality

#### Search Functionality Tests (Algolia)
- ✅ Search modal opening and interaction
- ✅ Search input visibility and focus
- ✅ Search results display
- ✅ Keyboard shortcuts (ESC to close)

#### Code Snippet Tests
- ✅ Syntax highlighting with Prism
- ✅ Copy button functionality
- ✅ Multiple programming language support (Bash, JavaScript, TypeScript, Java, Kotlin, Swift)

#### Responsive Design Tests
- ✅ Mobile viewport (375x667) - hamburger menu, mobile sidebar
- ✅ Tablet viewport (768x1024) - content readability, navigation
- ✅ Desktop viewport (1920x1080) - sidebar visibility, layout

#### Additional Features Tests
- ✅ External links (GitHub)
- ✅ Breadcrumb navigation
- ✅ Footer links and sections

### 3. `utils.ts`
Helper utilities for test suite:
- `extractSitemapPathnames()`: Parses sitemap.xml to extract page URLs
- `pathnameToArgosName()`: Converts pathnames to screenshot names

### 4. `screenshot.css`
Custom CSS applied during screenshot tests to hide:
- Lazy-loaded iframes
- External avatars (GitHub/Unavatar)
- Animated GIFs
- Algolia keyboard shortcuts
- Live playground previews
- Date/time displays
- Mermaid diagrams
- Lottie animations
- Videos

## Configuration

### `playwright.config.ts`
```typescript
{
  webServer: {
    port: 3000,
    command: "yarn docusaurus serve"
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ]
}
```

## Running Tests

### Prerequisites
```bash
npm install
npm run build  # Required: builds the site to ./build
```

### Run All Tests
```bash
npx playwright test
```

### Run Specific Test Suite
```bash
# Run only feature tests
npx playwright test docusaurus-features.spec.ts

# Run only screenshot tests
npx playwright test screenshot.spec.ts
```

### Run in UI Mode (Recommended for Development)
```bash
npx playwright test --ui
```

### Run with Headed Browser
```bash
npx playwright test --headed
```

### Run Specific Test
```bash
npx playwright test -g "should toggle between dark and light themes"
```

### Debug Tests
```bash
npx playwright test --debug
```

## Test Development Guidelines

### 1. Wait for Hydration
Always wait for Docusaurus hydration before interacting with the page:
```typescript
await page.waitForFunction(() => {
  return document.documentElement.dataset.hasHydrated === "true";
});
```

### 2. Use Proper Locators
- Prefer role-based and text-based locators
- Use `data-testid` for stable selectors when needed
- Avoid CSS class selectors that may change

### 3. Handle Dynamic Content
- Use `waitForTimeout()` sparingly, prefer `waitForSelector()` or `waitForFunction()`
- Account for Algolia search delays
- Consider animation durations

### 4. Test Independence
- Each test should be independent
- Don't rely on state from previous tests
- Clean up any side effects

### 5. Mobile Testing
Test on multiple viewport sizes:
```typescript
await page.setViewportSize({ width: 375, height: 667 }); // Mobile
await page.setViewportSize({ width: 768, height: 1024 }); // Tablet
await page.setViewportSize({ width: 1920, height: 1080 }); // Desktop
```

## CI/CD Integration

### GitHub Actions Example
```yaml
name: E2E Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - run: npm install
      - run: npm run build
      - run: npx playwright install --with-deps chromium
      - run: npx playwright test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Troubleshooting

### Tests Timing Out
- Increase timeout in test: `test.setTimeout(60000)`
- Check that dev server is running on port 3000
- Verify build was successful

### Search Tests Failing
- Algolia search may be slow or rate-limited
- Results depend on Algolia index state
- Consider mocking Algolia in CI environment

### Version Tests Failing
- Ensure all versions exist in `versions.json`
- Verify versioned docs are properly generated
- Check that version dropdown is rendered

### Responsive Tests Failing
- Clear viewport state between tests
- Ensure animations complete before assertions
- Check for viewport-specific CSS

## Coverage Summary

| Category | Tests | Description |
|----------|-------|-------------|
| Navigation | 3 | Sidebar, navbar, cross-page navigation |
| Versioning | 2 | Version switching, context persistence |
| Theme | 2 | Dark/light toggle, persistence |
| Search | 3 | Algolia integration, modal, keyboard |
| Code | 3 | Syntax highlighting, copy, languages |
| Responsive | 4 | Mobile, tablet, desktop layouts |
| Features | 3 | Links, breadcrumbs, footer |
| **Total** | **20** | **Comprehensive coverage** |

## Dependencies

- `@playwright/test`: ^1.46.0 - Test framework
- `@argos-ci/playwright`: ^1.0.1 - Visual testing
- `cheerio`: ^1.0.0-rc.12 - XML/HTML parsing for sitemap

## Maintenance

### Adding New Tests
1. Follow existing test structure and naming conventions
2. Add descriptive test names with "should..." pattern
3. Include comments for complex interactions
4. Update this README with coverage details

### Updating for New Docusaurus Versions
- Review Docusaurus changelog for breaking changes
- Update selectors if theme structure changes
- Test on multiple viewport sizes
- Verify hydration detection still works

## Resources

- [Playwright Documentation](https://playwright.dev/)
- [Docusaurus Testing](https://docusaurus.io/docs/advanced/testing)
- [Argos CI](https://argos-ci.com/docs)
- [Best Practices for E2E Testing](https://playwright.dev/docs/best-practices)

## License

This test suite is part of the react-native-keyboard-controller project.
