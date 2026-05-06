"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getDocsMain() {
    // match "docMainContainer_<hash>" no matter where it appears in class attr
    return document.querySelector('main[class^="docMainContainer_"], main[class*=" docMainContainer_"]');
}
function scrollIntoView(element) {
    // let layout settle first
    requestAnimationFrame(function () {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
}
function runFadeInAnimation(element) {
    element.classList.remove("doc-fade--run");
    void element.offsetWidth; // reflow
    requestAnimationFrame(function () {
        element.classList.add("doc-fade--run");
    });
}
var client = {
    onRouteDidUpdate: function (_a) {
        var location = _a.location, previousLocation = _a.previousLocation;
        if (!previousLocation) {
            // first mount should not play an animation
            return;
        }
        var pathChanged = location.pathname !== previousLocation.pathname;
        var hashChanged = location.hash !== previousLocation.hash;
        if (!hashChanged && !pathChanged) {
            // nothing changed, do nothing
            return;
        }
        var mainElement = getDocsMain();
        if (!mainElement) {
            // we're not on our docs page
            return;
        }
        if (hashChanged && !pathChanged) {
            // anchor changed - smoothly scroll to new anchor
            var id = decodeURIComponent(location.hash.replace(/^#/, ""));
            var target = id ? document.getElementById(id) : null;
            if (target) {
                scrollIntoView(target);
            }
            return;
        }
        if (pathChanged) {
            // page changed - run fade-in animation
            runFadeInAnimation(mainElement);
        }
    },
};
exports.default = client;
