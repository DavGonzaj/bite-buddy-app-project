// import { Button } from "bootstrap";
import Button from "./elements/Button";
import React from "react";

const Banner = () => {
  return (
    <div className="border-b-4 border-yellow-500 pb-10 banner w-full md-w-2/3 mx-auto relative flex items-center justify-between">
      <div className="banner-description w-full md:w-1/2 p-3 text-center">
        <h2 className="mb-6 text-4xl font-bold text-white">
          Order. Eat. Repeat:
        </h2>
        <p className="font-semibold text-lg text-red-600 py-2 pb-4">
          Elevate Your Dining Experience Today!
        </p>
        <div className="btn-container">
          <Button className="text-black p-2 bg-yellow-500 border-2 border-white rounded-full">
            Order Now
          </Button>
          {/* <a
            href="/menu"
            className="text-yellow-400 hover:text-yellow-500 font-bold text-decoration-line px-3"
          >
            Menu
          </a> */}
        </div>
      </div>
      <div className="banner-image w-full md:w-1/2 p-3 flex justify-evenly">
        <img
          src={require("../assets/enchiladas.png.png")}
          alt="topimg"
          className="max-h-95"
        />
      </div>
    </div>
  );
};

export default Banner;
