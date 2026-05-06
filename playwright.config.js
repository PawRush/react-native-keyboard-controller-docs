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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var test_1 = require("@playwright/test");
var config = {
    testDir: "./tests",
    use: {
        baseURL: (_a = process.env.BASE_URL) !== null && _a !== void 0 ? _a : "http://localhost:3000/react-native-keyboard-controller/",
    },
    webServer: process.env.BASE_URL
        ? undefined
        : {
            port: 3000,
            command: "yarn start",
            reuseExistingServer: true,
        },
    projects: [
        {
            name: "chromium",
            use: __assign({}, test_1.devices["Desktop Chrome"]),
        },
    ],
};
exports.default = config;
