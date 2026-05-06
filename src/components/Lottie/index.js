"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Lottie;
var lottie_react_1 = require("lottie-react");
var react_1 = require("react");
var lottieView = { paddingLeft: "20%", paddingRight: "20%" };
function Lottie(_a) {
    var src = _a.src;
    return (<lottie_react_1.default loop animationData={src} className="lottie" style={lottieView}/>);
}
