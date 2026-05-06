"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractSitemapPathnames = extractSitemapPathnames;
exports.pathnameToArgosName = pathnameToArgosName;
var fs = require("fs");
var cheerio = require("cheerio");
// Extract a list of pathnames, given a fs path to a sitemap.xml file
// Docusaurus generates a build/sitemap.xml file for you!
function extractSitemapPathnames(sitemapPath) {
    var sitemap = fs.readFileSync(sitemapPath).toString();
    var $ = cheerio.load(sitemap, { xmlMode: true });
    var urls = [];
    $("loc").each(function handleLoc() {
        urls.push($(this).text());
    });
    return urls.map(function (url) { return new URL(url).pathname; });
}
// Converts a pathname to a decent screenshot name
function pathnameToArgosName(pathname) {
    return pathname.replace(/^\/|\/$/g, "") || "index";
}
