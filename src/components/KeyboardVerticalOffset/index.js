"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeyboardVerticalOffsetIcon;
var theme_common_1 = require("@docusaurus/theme-common");
var react_1 = require("react");
var kvo_dark_svg_1 = require("./kvo-dark.svg");
var kvo_light_svg_1 = require("./kvo-light.svg");
function KeyboardVerticalOffsetIcon() {
    var colorMode = (0, theme_common_1.useColorMode)().colorMode;
    return (<div className="center">
      {colorMode === "dark" ? (<kvo_dark_svg_1.default className="svg"/>) : (<kvo_light_svg_1.default className="svg"/>)}
    </div>);
}
