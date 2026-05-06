"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var HoverableKeyboardSVG_1 = require("./HoverableKeyboardSVG");
var alphabet = "zxcvbnmasdfghjklqwertyuiop_";
var storyToTell = "Hello, World!".toLowerCase().replace(/ /g, "_");
function HoverableKeyboard() {
    var timerRef = (0, react_1.useRef)(null);
    var currentLetterRef = (0, react_1.useRef)("");
    var cleanCurrentlyAnimatedLetter = (0, react_1.useCallback)(function () {
        var _a;
        (_a = document
            .getElementById(currentLetterRef.current)) === null || _a === void 0 ? void 0 : _a.classList.remove("hover");
    }, []);
    var onStopAnimation = (0, react_1.useCallback)(function () {
        clearInterval(timerRef.current);
        cleanCurrentlyAnimatedLetter();
    }, [cleanCurrentlyAnimatedLetter]);
    var onStartAnimation = (0, react_1.useCallback)(function () {
        var i = 0;
        timerRef.current = setInterval(function () {
            var _a;
            if (i >= storyToTell.length) {
                i = 0;
                return;
            }
            setTimeout(cleanCurrentlyAnimatedLetter, 200);
            currentLetterRef.current = storyToTell[i++];
            if (!alphabet.includes(currentLetterRef.current)) {
                return;
            }
            (_a = document.getElementById(currentLetterRef.current)) === null || _a === void 0 ? void 0 : _a.classList.add("hover");
        }, 350);
    }, [cleanCurrentlyAnimatedLetter]);
    (0, react_1.useEffect)(function () {
        onStartAnimation();
        return onStopAnimation;
    }, [onStartAnimation, onStopAnimation]);
    return (<HoverableKeyboardSVG_1.default onHoverBlur={onStartAnimation} onHoverFocus={onStopAnimation}/>);
}
exports.default = HoverableKeyboard;
