"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CustomSwiper;
var modules_1 = require("swiper/modules");
var react_1 = require("swiper/react");
require("swiper/css");
require("swiper/css/pagination");
require("./styles.css");
var modules = [modules_1.Pagination];
function CustomSwiper(_a) {
    var images = _a.images;
    return (<react_1.Swiper className="custom-swiper" modules={modules} pagination={true}>
      {images.map(function (image, index) { return (<react_1.SwiperSlide key={index}>
          <img src={image} style={{ borderRadius: 10 }}/>
        </react_1.SwiperSlide>); })}
    </react_1.Swiper>);
}
