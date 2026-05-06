"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = KeyboardAvoidingViewComparison;
var react_1 = require("react");
var ComparisonTable_1 = require("../ComparisonTable");
var Lottie_1 = require("../Lottie");
var kav_animated_lottie_json_1 = require("./kav-animated.lottie.json");
var kav_lottie_json_1 = require("./kav.lottie.json");
var After = <Lottie_1.default src={kav_animated_lottie_json_1.default}/>;
var Before = <Lottie_1.default src={kav_lottie_json_1.default}/>;
function KeyboardAvoidingViewComparison() {
    return (<ComparisonTable_1.default left={Before} leftText={<i>
          Default <code>react-native</code> implementation on Android
        </i>} right={After} rightText={<i>
          Implementation from <code>react-native-keyboard-controller</code> with
          better animations
        </i>}/>);
}
