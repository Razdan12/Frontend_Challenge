import React from "react";
import { Carousel } from "antd";

const Carousell = () => {
  return (
    <div className="w-full h-80">
      <Carousel
        autoplay
        effect="fade"
        className="bg-gray-800 flex justify-center items-center"
      >
        <div className="w-full h-80 flex justify-center items-center">
          <img
            className="object-fill h-full w-full"
            src="https://static9.depositphotos.com/1011646/1236/i/950/depositphotos_12369509-stock-photo-breaking-news-screen.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-80 justify-center items-center">
          <img
            className="object-fill h-full w-full"
            src="https://www.smkkbw.sch.id/webv2/home/images/material/article/anggia.p_news2.jpg"
            alt=""
          />
        </div>
        <div className="w-full h-80 justify-center items-center">
          <img
            className="object-fill h-full w-full"
            src="data:image/png;base64,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"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousell;
