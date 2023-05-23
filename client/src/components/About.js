import React from "react";
import buddylogo from "../assets/buddylogo.png";
import location from "../assets/location.png";
const About = () => {
  return (
    <div className="bg-black border-b-4 border-yellow-500">
      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-white text-6xl font-medium pb-5">About Us</h2>
          <p className="text-2xl text-white whitespace-break-spaces">
            Welcome to Bite Buddy, your go-to destination for convenient and
            delicious food delivery! We are a team of passionate food
            enthusiasts who believe that great meals should be just a few taps
            away. Our mission is to bring you a seamless and delightful food
            ordering experience, all while supporting local restaurants and
            ensuring your satisfaction. With just a few taps, you can customize
            your order, add special instructions, and even schedule deliveries
            in advance. We believe that personalization is key, and we want to
            ensure that every meal you receive is exactly the way you like it.
            Customer satisfaction is at the core of our values, and we are
            constantly working to enhance your experience. Savor the flavors,
            embrace the convenience, and let us be your reliable companion on
            your culinary journey. Welcome to Bite Buddy! Happy ordering, Bite
            Buddy Team
          </p>
        </div>
        <div className="flex items-center justify-center">
          <img
            src={buddylogo}
            alt="buddylogo"
            className="w-[400] h-[600px] object-cover"
          />
        </div>
      </div>

      <div className="p-24 grid grid-cols-2">
        <div className="">
          <h2 className="text-white text-6xl font-medium  pb-5">Contact Us</h2>
          <h4 className="text-3xl text-white whitespace-break-spaces ">
            (415) 623-8048
          </h4>
          <h4 className="text-3xl text-white whitespace-break-spaces">
            bitebuddy@gmail.com
          </h4>
          <h4 className="text-3xl text-white flex ">
            <img src={location} alt="location" className="h-[30px]" />
            San Francisco, California
          </h4>
        </div>
        <div className="flex items-center justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12615.533892790765!2d-122.3889394!3d37.7693304!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7ffbac5f6e43%3A0x32c5daf2dfd50eb5!2sUber%20Headquarters!5e0!3m2!1sen!2sus!4v1684783154244!5m2!1sen!2sus"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default About;
