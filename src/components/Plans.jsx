import React from "react";

const Plans = () => {
  return (
    <div className="max-w-[1400px] m-auto grid lg:grid-cols-2 p-2 mb-8 md:mx-8">
      {/* left side- images */}
      <div className="grid grid-cols-2 grid-rows-10 h-[90vh] gap-4 ">
        <img
          className="row-span-3 object-cover w-full h-full"
          src="../src/assets/img1.jpg"
          alt=""
        />
        <img
          className="row-span-4 object-cover w-full h-full"
          src="../src/assets/img3.jpg"
          alt=""
        />
        <img
          className="row-span-3 object-cover w-full h-full"
          src="../src/assets/img5.jpg"
          alt=""
        />
        <img
          className="row-span-8 object-cover w-full h-full"
          src="../src/assets/img4.jpg"
          alt=""
        />
        <img
          className="row-span-6 object-cover w-full h-full"
          src="../src/assets/slider2.jpg"
          alt=""
        />
      </div>
      {/* right-side content */}
      <div className="flex flex-col justify-center ml-4">
        <h3 className="text-5xl md:text-6xl font-bold">Plan Your Next Trip</h3>
        <p className="text-2xl py-4">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <p className="text-lg font-thin pb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam debitis
          nostrum rem porro enim sequi possimus excepturi ullam voluptatum
          reprehenderit est quod repellat dicta, pariatur, rerum officiis sit at
          quis!
        </p>
        <div className="">
          <button className="bg-white text-sm border-black text-black hover:bg-gray-300/45 mx-4 hover:shadow-xl">
            Explore
          </button>
          <button className="bg-white text-sm border-black text-black hover:bg-gray-300/45  hover:shadow-xl">
            Book Your Next Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plans;
