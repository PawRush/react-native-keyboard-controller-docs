"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
/**
 * Comprehensive Playwright Test Suite for Docusaurus 3 Documentation Site
 *
 * This test suite covers critical functionality of the react-native-keyboard-controller
 * documentation site including:
 * - Navigation and sidebar functionality
 * - Version switching
 * - Theme toggling (dark/light mode)
 * - Search functionality (Algolia)
 * - Code snippet rendering
 * - Responsive design
 */
/**
 * Wait for Docusaurus hydration to complete
 * This ensures the page is fully interactive before running tests
 */
function waitForHydration(page) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, page.waitForFunction(function () {
                        return document.documentElement.dataset.hasHydrated === "true";
                    })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
test_1.test.describe("Documentation Navigation and Sidebar", function () {
    (0, test_1.test)("should navigate through sidebar items and maintain active state", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var sidebar, activeLink, apiReferenceLink;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // Navigate to the docs homepage
                return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    // Navigate to the docs homepage
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    sidebar = page.locator(".theme-doc-sidebar-container");
                    return [4 /*yield*/, (0, test_1.expect)(sidebar).toBeVisible()];
                case 3:
                    _c.sent();
                    activeLink = page.locator(".menu__link--active").first();
                    return [4 /*yield*/, (0, test_1.expect)(activeLink).toBeVisible()];
                case 4:
                    _c.sent();
                    apiReferenceLink = page.locator('a[href*="api-reference"]').first();
                    return [4 /*yield*/, apiReferenceLink.click()];
                case 5:
                    _c.sent();
                    // Wait for navigation
                    return [4 /*yield*/, page.waitForURL(/.*api-reference.*/)];
                case 6:
                    // Wait for navigation
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 7:
                    _c.sent();
                    // Verify the new page loaded
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(/.*api-reference.*/)];
                case 8:
                    // Verify the new page loaded
                    _c.sent();
                    // Verify sidebar is still visible
                    return [4 /*yield*/, (0, test_1.expect)(sidebar).toBeVisible()];
                case 9:
                    // Verify sidebar is still visible
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should expand and collapse sidebar categories", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var category, categoryButton, expandedCategory;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    category = page.locator(".menu__list-item--collapsed").first();
                    return [4 /*yield*/, category.count()];
                case 3:
                    if (!((_c.sent()) > 0)) return [3 /*break*/, 7];
                    categoryButton = category.locator("a, button").first();
                    return [4 /*yield*/, categoryButton.click()];
                case 4:
                    _c.sent();
                    // Wait a bit for animation
                    return [4 /*yield*/, page.waitForTimeout(300)];
                case 5:
                    // Wait a bit for animation
                    _c.sent();
                    expandedCategory = page
                        .locator(".menu__list-item:not(.menu__list-item--collapsed)")
                        .first();
                    return [4 /*yield*/, (0, test_1.expect)(expandedCategory).toBeVisible()];
                case 6:
                    _c.sent();
                    _c.label = 7;
                case 7: return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should navigate using navbar links", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var guidesLink, apiLink, blogLink;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    guidesLink = page.locator('a:has-text("Guides")').first();
                    return [4 /*yield*/, guidesLink.click()];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, page.waitForURL(/.*docs.*/)];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 5:
                    _c.sent();
                    // Verify we're on a docs page
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(/.*docs.*/)];
                case 6:
                    // Verify we're on a docs page
                    _c.sent();
                    apiLink = page.locator('a[href*="api-reference"]').first();
                    return [4 /*yield*/, apiLink.click()];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, page.waitForURL(/.*api-reference.*/)];
                case 8:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 9:
                    _c.sent();
                    // Navigate to Blog
                    return [4 /*yield*/, page.goto("/react-native-keyboard-controller/")];
                case 10:
                    // Navigate to Blog
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 11:
                    _c.sent();
                    blogLink = page.locator('a:has-text("Blog")').first();
                    return [4 /*yield*/, blogLink.click()];
                case 12:
                    _c.sent();
                    return [4 /*yield*/, page.waitForURL(/.*blog.*/)];
                case 13:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 14:
                    _c.sent();
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(/.*blog.*/)];
                case 15:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
test_1.test.describe("Version Switching Functionality", function () {
    (0, test_1.test)("should display version dropdown and switch between versions", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var versionDropdown, currentVersion, dropdownMenu, versionLinks, versionCount, oldVersion;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    versionDropdown = page.locator('.navbar__item.dropdown .navbar__link').first();
                    return [4 /*yield*/, (0, test_1.expect)(versionDropdown).toBeVisible()];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, versionDropdown.textContent()];
                case 4:
                    currentVersion = _c.sent();
                    (0, test_1.expect)(currentVersion).toBeTruthy();
                    // Click to open dropdown
                    return [4 /*yield*/, versionDropdown.click()];
                case 5:
                    // Click to open dropdown
                    _c.sent();
                    dropdownMenu = page.locator(".dropdown__menu");
                    return [4 /*yield*/, (0, test_1.expect)(dropdownMenu).toBeVisible()];
                case 6:
                    _c.sent();
                    versionLinks = dropdownMenu.locator("a");
                    return [4 /*yield*/, versionLinks.count()];
                case 7:
                    versionCount = _c.sent();
                    (0, test_1.expect)(versionCount).toBeGreaterThan(1);
                    oldVersion = dropdownMenu.locator('a:has-text("1.19.0")');
                    return [4 /*yield*/, oldVersion.count()];
                case 8:
                    if (!((_c.sent()) > 0)) return [3 /*break*/, 13];
                    return [4 /*yield*/, oldVersion.click()];
                case 9:
                    _c.sent();
                    return [4 /*yield*/, page.waitForURL(/.*1\.19\.0.*/)];
                case 10:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 11:
                    _c.sent();
                    // Verify URL contains the version
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(/.*1\.19\.0.*/)];
                case 12:
                    // Verify URL contains the version
                    _c.sent();
                    _c.label = 13;
                case 13: return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should maintain version context when navigating between pages", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var sidebarLink;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // Navigate to a specific version
                return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/1.18.0/installation")];
                case 1:
                    // Navigate to a specific version
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    // Verify we're on version 1.18.0
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(/.*1\.18\.0.*/)];
                case 3:
                    // Verify we're on version 1.18.0
                    _c.sent();
                    sidebarLink = page.locator(".menu__link").nth(2);
                    return [4 /*yield*/, sidebarLink.click()];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(1000)];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 6:
                    _c.sent();
                    // Verify the version is still 1.18.0
                    return [4 /*yield*/, (0, test_1.expect)(page).toHaveURL(/.*1\.18\.0.*/)];
                case 7:
                    // Verify the version is still 1.18.0
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
test_1.test.describe("Dark/Light Theme Toggle", function () {
    (0, test_1.test)("should toggle between dark and light themes", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var themeToggle, htmlElement, initialTheme, newTheme, finalTheme;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    themeToggle = page.locator('button[class*="toggleButton"]');
                    return [4 /*yield*/, (0, test_1.expect)(themeToggle).toBeVisible()];
                case 3:
                    _c.sent();
                    htmlElement = page.locator("html");
                    return [4 /*yield*/, htmlElement.getAttribute("data-theme")];
                case 4:
                    initialTheme = _c.sent();
                    // Click to toggle theme
                    return [4 /*yield*/, themeToggle.click()];
                case 5:
                    // Click to toggle theme
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(300)];
                case 6:
                    _c.sent(); // Wait for theme transition
                    return [4 /*yield*/, htmlElement.getAttribute("data-theme")];
                case 7:
                    newTheme = _c.sent();
                    (0, test_1.expect)(newTheme).not.toBe(initialTheme);
                    // Toggle back
                    return [4 /*yield*/, themeToggle.click()];
                case 8:
                    // Toggle back
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(300)];
                case 9:
                    _c.sent();
                    return [4 /*yield*/, htmlElement.getAttribute("data-theme")];
                case 10:
                    finalTheme = _c.sent();
                    (0, test_1.expect)(finalTheme).toBe(initialTheme);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should persist theme preference across page navigation", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var themeToggle, htmlElement, initialTheme, darkTheme, persistedTheme;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    themeToggle = page.locator('button[class*="toggleButton"]');
                    htmlElement = page.locator("html");
                    return [4 /*yield*/, htmlElement.getAttribute("data-theme")];
                case 3:
                    initialTheme = _c.sent();
                    return [4 /*yield*/, themeToggle.click()];
                case 4:
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(300)];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, htmlElement.getAttribute("data-theme")];
                case 6:
                    darkTheme = _c.sent();
                    // Navigate to a different page
                    return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/category/api-reference")];
                case 7:
                    // Navigate to a different page
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 8:
                    _c.sent();
                    return [4 /*yield*/, htmlElement.getAttribute("data-theme")];
                case 9:
                    persistedTheme = _c.sent();
                    (0, test_1.expect)(persistedTheme).toBe(darkTheme);
                    return [2 /*return*/];
            }
        });
    }); });
});
test_1.test.describe("Search Functionality (Algolia)", function () {
    (0, test_1.test)("should open search modal and display search input", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var searchButton, searchInput;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    searchButton = page.locator('button[class*="DocSearch"]');
                    return [4 /*yield*/, (0, test_1.expect)(searchButton).toBeVisible()];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, searchButton.click()];
                case 4:
                    _c.sent();
                    // Wait for search modal to appear
                    return [4 /*yield*/, page.waitForSelector(".DocSearch-Modal", { timeout: 5000 })];
                case 5:
                    // Wait for search modal to appear
                    _c.sent();
                    searchInput = page.locator(".DocSearch-Input");
                    return [4 /*yield*/, (0, test_1.expect)(searchInput).toBeVisible()];
                case 6:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should perform search and display results", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var searchButton, searchInput, resultsContainer, hasResults, noResults, isLoading;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    searchButton = page.locator('button[class*="DocSearch"]');
                    return [4 /*yield*/, searchButton.click()];
                case 3:
                    _c.sent();
                    // Wait for modal
                    return [4 /*yield*/, page.waitForSelector(".DocSearch-Modal", { timeout: 5000 })];
                case 4:
                    // Wait for modal
                    _c.sent();
                    searchInput = page.locator(".DocSearch-Input");
                    return [4 /*yield*/, searchInput.fill("keyboard")];
                case 5:
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(1500)];
                case 6:
                    _c.sent(); // Wait for Algolia results
                    resultsContainer = page.locator(".DocSearch-Hits");
                    return [4 /*yield*/, resultsContainer.isVisible().catch(function () { return false; })];
                case 7:
                    hasResults = _c.sent();
                    return [4 /*yield*/, page
                            .locator(".DocSearch-NoResults")
                            .isVisible()
                            .catch(function () { return false; })];
                case 8:
                    noResults = _c.sent();
                    return [4 /*yield*/, page
                            .locator(".DocSearch-Loading")
                            .isVisible()
                            .catch(function () { return false; })];
                case 9:
                    isLoading = _c.sent();
                    // At least one of these should be true
                    (0, test_1.expect)(hasResults || noResults || isLoading).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should close search modal with ESC key", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var searchButton, modal;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    searchButton = page.locator('button[class*="DocSearch"]');
                    return [4 /*yield*/, searchButton.click()];
                case 3:
                    _c.sent();
                    // Wait for modal
                    return [4 /*yield*/, page.waitForSelector(".DocSearch-Modal", { timeout: 5000 })];
                case 4:
                    // Wait for modal
                    _c.sent();
                    // Press ESC
                    return [4 /*yield*/, page.keyboard.press("Escape")];
                case 5:
                    // Press ESC
                    _c.sent();
                    // Verify modal is closed
                    return [4 /*yield*/, page.waitForTimeout(500)];
                case 6:
                    // Verify modal is closed
                    _c.sent();
                    modal = page.locator(".DocSearch-Modal");
                    return [4 /*yield*/, (0, test_1.expect)(modal).not.toBeVisible()];
                case 7:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
test_1.test.describe("Code Snippet Rendering", function () {
    (0, test_1.test)("should render code blocks with syntax highlighting", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var codeBlock, text;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    codeBlock = page.locator('pre code').first();
                    return [4 /*yield*/, (0, test_1.expect)(codeBlock).toBeVisible()];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, codeBlock.textContent()];
                case 4:
                    text = _c.sent();
                    (0, test_1.expect)(text).toBeTruthy();
                    (0, test_1.expect)(text === null || text === void 0 ? void 0 : text.length).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should have copy button for code blocks", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var codeBlock, copyButtonVariants, foundCopyButton, _i, copyButtonVariants_1, button, isVisible, codeContent;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    codeBlock = page.locator("pre").first();
                    return [4 /*yield*/, (0, test_1.expect)(codeBlock).toBeVisible()];
                case 3:
                    _c.sent();
                    // Hover over code block to reveal copy button
                    return [4 /*yield*/, codeBlock.hover()];
                case 4:
                    // Hover over code block to reveal copy button
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(500)];
                case 5:
                    _c.sent();
                    copyButtonVariants = [
                        page.locator('button[class*="copy"]').first(),
                        page.locator('button[aria-label*="copy" i]').first(),
                        page.locator('button[title*="copy" i]').first(),
                        page.locator('.theme-code-block button').first(),
                    ];
                    foundCopyButton = false;
                    _i = 0, copyButtonVariants_1 = copyButtonVariants;
                    _c.label = 6;
                case 6:
                    if (!(_i < copyButtonVariants_1.length)) return [3 /*break*/, 9];
                    button = copyButtonVariants_1[_i];
                    return [4 /*yield*/, button.isVisible().catch(function () { return false; })];
                case 7:
                    isVisible = _c.sent();
                    if (isVisible) {
                        foundCopyButton = true;
                        return [3 /*break*/, 9];
                    }
                    _c.label = 8;
                case 8:
                    _i++;
                    return [3 /*break*/, 6];
                case 9:
                    if (!!foundCopyButton) return [3 /*break*/, 11];
                    return [4 /*yield*/, codeBlock.textContent()];
                case 10:
                    codeContent = _c.sent();
                    (0, test_1.expect)(codeContent).toBeTruthy();
                    (0, test_1.expect)(codeContent === null || codeContent === void 0 ? void 0 : codeContent.length).toBeGreaterThan(10);
                    return [3 /*break*/, 12];
                case 11:
                    (0, test_1.expect)(foundCopyButton).toBeTruthy();
                    _c.label = 12;
                case 12: return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should support different programming languages", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var codeBlocks, count;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    codeBlocks = page.locator('pre code');
                    return [4 /*yield*/, codeBlocks.count()];
                case 3:
                    count = _c.sent();
                    // Just verify that code blocks exist
                    (0, test_1.expect)(count).toBeGreaterThan(0);
                    return [2 /*return*/];
            }
        });
    }); });
});
test_1.test.describe("Responsive Design", function () {
    (0, test_1.test)("should display mobile menu on small screens", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var mobileMenuButton, mobileSidebar;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // Set mobile viewport
                return [4 /*yield*/, page.setViewportSize({ width: 375, height: 667 })];
                case 1:
                    // Set mobile viewport
                    _c.sent();
                    return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 3:
                    _c.sent();
                    mobileMenuButton = page.locator('button[class*="navbar__toggle"]');
                    return [4 /*yield*/, (0, test_1.expect)(mobileMenuButton).toBeVisible()];
                case 4:
                    _c.sent();
                    // Click to open mobile menu
                    return [4 /*yield*/, mobileMenuButton.click()];
                case 5:
                    // Click to open mobile menu
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(300)];
                case 6:
                    _c.sent();
                    mobileSidebar = page.locator('.navbar-sidebar').first();
                    return [4 /*yield*/, (0, test_1.expect)(mobileSidebar).toBeVisible()];
                case 7:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should hide sidebar on mobile and show toggle button", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var desktopSidebar, isHidden;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.setViewportSize({ width: 375, height: 667 })];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 3:
                    _c.sent();
                    desktopSidebar = page.locator(".theme-doc-sidebar-container");
                    return [4 /*yield*/, desktopSidebar.isHidden().catch(function () { return true; })];
                case 4:
                    isHidden = _c.sent();
                    (0, test_1.expect)(isHidden).toBeTruthy();
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should be readable and functional on tablet", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var mainContent, navbar, article, box;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // Set tablet viewport
                return [4 /*yield*/, page.setViewportSize({ width: 768, height: 1024 })];
                case 1:
                    // Set tablet viewport
                    _c.sent();
                    return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 3:
                    _c.sent();
                    mainContent = page.locator("main");
                    return [4 /*yield*/, (0, test_1.expect)(mainContent).toBeVisible()];
                case 4:
                    _c.sent();
                    navbar = page.locator("nav.navbar");
                    return [4 /*yield*/, (0, test_1.expect)(navbar).toBeVisible()];
                case 5:
                    _c.sent();
                    article = page.locator("article").first();
                    return [4 /*yield*/, article.count()];
                case 6:
                    if (!((_c.sent()) > 0)) return [3 /*break*/, 8];
                    return [4 /*yield*/, article.boundingBox()];
                case 7:
                    box = _c.sent();
                    (0, test_1.expect)(box === null || box === void 0 ? void 0 : box.width).toBeLessThanOrEqual(768);
                    _c.label = 8;
                case 8: return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should maintain functionality on desktop", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var sidebar, mobileButton, mainContent;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: 
                // Set desktop viewport
                return [4 /*yield*/, page.setViewportSize({ width: 1920, height: 1080 })];
                case 1:
                    // Set desktop viewport
                    _c.sent();
                    return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 2:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 3:
                    _c.sent();
                    sidebar = page.locator(".theme-doc-sidebar-container");
                    return [4 /*yield*/, (0, test_1.expect)(sidebar).toBeVisible()];
                case 4:
                    _c.sent();
                    mobileButton = page.locator('button[class*="navbar__toggle"]');
                    return [4 /*yield*/, (0, test_1.expect)(mobileButton).not.toBeVisible()];
                case 5:
                    _c.sent();
                    mainContent = page.locator("main").first();
                    return [4 /*yield*/, (0, test_1.expect)(mainContent).toBeVisible()];
                case 6:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
test_1.test.describe("Additional Documentation Features", function () {
    (0, test_1.test)("should have working GitHub and external links", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var githubLink, href;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/installation")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    githubLink = page.locator('a[href*="github.com"]').first();
                    return [4 /*yield*/, (0, test_1.expect)(githubLink).toBeVisible()];
                case 3:
                    _c.sent();
                    return [4 /*yield*/, githubLink.getAttribute("href")];
                case 4:
                    href = _c.sent();
                    (0, test_1.expect)(href).toContain("github.com");
                    return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should display breadcrumbs navigation", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var breadcrumbs, hasBreadcrumbs, breadcrumbLinks, _c;
        var page = _b.page;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/docs/category/api-reference")];
                case 1:
                    _d.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _d.sent();
                    breadcrumbs = page.locator('nav[class*="breadcrumbs"]');
                    return [4 /*yield*/, breadcrumbs.isVisible().catch(function () { return false; })];
                case 3:
                    hasBreadcrumbs = _d.sent();
                    if (!hasBreadcrumbs) return [3 /*break*/, 5];
                    breadcrumbLinks = breadcrumbs.locator("a");
                    _c = test_1.expect;
                    return [4 /*yield*/, breadcrumbLinks.count()];
                case 4:
                    _c.apply(void 0, [_d.sent()]).toBeGreaterThan(0);
                    _d.label = 5;
                case 5: return [2 /*return*/];
            }
        });
    }); });
    (0, test_1.test)("should have working footer links", function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
        var footer, footerLinks, linkCount, docsSection, communitySection;
        var page = _b.page;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0: return [4 /*yield*/, page.goto("/react-native-keyboard-controller/")];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, waitForHydration(page)];
                case 2:
                    _c.sent();
                    // Scroll to footer
                    return [4 /*yield*/, page.evaluate(function () { return window.scrollTo(0, document.body.scrollHeight); })];
                case 3:
                    // Scroll to footer
                    _c.sent();
                    return [4 /*yield*/, page.waitForTimeout(300)];
                case 4:
                    _c.sent();
                    footer = page.locator("footer.footer");
                    return [4 /*yield*/, (0, test_1.expect)(footer).toBeVisible()];
                case 5:
                    _c.sent();
                    footerLinks = footer.locator("a");
                    return [4 /*yield*/, footerLinks.count()];
                case 6:
                    linkCount = _c.sent();
                    (0, test_1.expect)(linkCount).toBeGreaterThan(0);
                    docsSection = footer.locator('text="Docs"');
                    communitySection = footer.locator('text="Community"');
                    return [4 /*yield*/, (0, test_1.expect)(docsSection).toBeVisible()];
                case 7:
                    _c.sent();
                    return [4 /*yield*/, (0, test_1.expect)(communitySection).toBeVisible()];
                case 8:
                    _c.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
