"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HomepageFeatures;
var clsx_1 = require("clsx");
var lottie_react_1 = require("lottie-react");
var react_1 = require("react");
var cross_platform_lottie_json_1 = require("./cross-platform.lottie.json");
var interactive_lottie_json_1 = require("./interactive.lottie.json");
var styles_module_css_1 = require("./styles.module.css");
var text_inputs_lottie_json_1 = require("./text-inputs.lottie.json");
var transform_lottie_json_1 = require("./transform.lottie.json");
var FeatureList = [
    {
        title: "Track each keyboard frame",
        lottie: transform_lottie_json_1.default,
        description: (<>
        Take an advantage of mapping keyboard movement to animated values and
        apply any UI transformations that you can imagine 😎
      </>),
    },
    {
        title: "Interactive keyboard",
        lottie: interactive_lottie_json_1.default,
        description: <>Dismiss your keyboard interactively without a hassle</>,
    },
    {
        title: "Cross platform",
        lottie: cross_platform_lottie_json_1.default,
        description: (<>
        Library uses all power of each platform capabilities and provides
        unified API which works on all platforms.
      </>),
    },
    {
        title: "Rich metadata",
        lottie: text_inputs_lottie_json_1.default,
        description: (<>
        Take a power of enhanced metadata and check how easily you can control
        each aspect of the keyboard movement
      </>),
    },
];
var lottieStyle = {
    height: 400,
    marginBottom: 24,
};
function Feature(_a) {
    var title = _a.title, lottie = _a.lottie, description = _a.description;
    return (<div className={(0, clsx_1.default)("col col--3")}>
      <div className="text--center">
        <lottie_react_1.default loop animationData={lottie} className="lottie" style={lottieStyle}/>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>);
}
function HomepageFeatures() {
    return (<section className={styles_module_css_1.default.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map(function (props, idx) { return (<Feature key={idx} {...props}/>); })}
        </div>
      </div>
    </section>);
}
