import React from "react";

const HeadlineCards = () => {
  return (
    <div className="max-w-[1640px] mx-auto px-4 py-12 grid md:grid-cols-3 gap-6">
      {/*Card*/}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Sun's out BOGO's out</p>
          <p className="px-2">Through 7/24</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl"
          src="https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/*Card 2 */}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">New Restaurants</p>
          <p className="px-2">Added Daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl"
          src="https://images.pexels.com/photos/106343/pexels-photo-106343.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
      {/*Card 3 */}
      <div className="rounded-xl relative">
        {/*Overlay*/}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">We Deliver Desserts</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] object-cover w-full rounded-xl"
          src="https://images.pexels.com/photos/6947255/pexels-photo-6947255.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
