"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ComparisonTable;
var react_1 = require("react");
var withoutBorders = { border: "none" };
var label = __assign(__assign({}, withoutBorders), { maxWidth: 400, textAlign: "center" });
var labels = __assign(__assign({}, withoutBorders), { backgroundColor: "#00000000" });
function ComparisonTable(_a) {
    var left = _a.left, leftText = _a.leftText, right = _a.right, rightText = _a.rightText;
    return (<table>
      <tbody>
        <tr style={withoutBorders}>
          <td style={withoutBorders}>{left}</td>
          <td style={withoutBorders}>{right}</td>
        </tr>
        <tr style={labels}>
          <td style={label}>{leftText}</td>
          <td style={label}>{rightText}</td>
        </tr>
      </tbody>
    </table>);
}
