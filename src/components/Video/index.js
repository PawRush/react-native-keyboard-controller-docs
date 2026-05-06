"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Video;
var useBaseUrl_1 = require("@docusaurus/useBaseUrl");
var react_1 = require("react");
function Video(_a) {
    var src = _a.src, _b = _a.width, width = _b === void 0 ? 100 : _b, props = __rest(_a, ["src", "width"]);
    var source = (0, useBaseUrl_1.default)(src);
    return (<div className="center video">
      <video autoPlay loop muted playsInline height="100%" src={source} width={"".concat(width, "%")} {...props}/>
    </div>);
}
