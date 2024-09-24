import React from "react";
import Typical from "react-typical";
import Points from "./Points";
import Visit from "./Visit";
import Faq from "./Faq";

const Main = () => {
  return (
    <>
      <div
        className="relative h-96 bg-cover bg-center   "
        style={{ backgroundImage: `url('bg.jpg')` }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center">
          <h1 className="font-semibold text-3xl text-white mb-4">
            Explore Museum buddy: Your Expert in Museum {""}
            <Typical
      steps={[
        "Navigation", 1000, 
        "Booking", 1000, 
        "Exploring", 1000,
        "Discovering", 1000
      ]}
      loop={Infinity}
      wrapper="span"
    />
          </h1>
          <h2 className="text-xl text-white mb-6">
            Explore top attractions and book your next great experience today!
          </h2>
          <div className="flex justify-center">
            <button className="text-white rounded-3xl w-96 h-9 text-lg shadow-lg shadow-black/30 border hover:scale-105 transition-transform duration-300 ease-in-out flex items-center justify-center">
              <a
                target="_blank"
                href="https://mediafiles.botpress.cloud/7925452c-b1bb-42b9-9b4a-9384afe8669d/webchat/bot.html"
                rel="noreferrer"
              >
                Explore our Museum buddy
              </a>
            </button>
          </div>
        </div>
      </div>
      <Points />
      <Visit />
      <Faq />
    </>
  );
};

export default Main;
