import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="flex bg-slate-100 items-center p-2 justify-between px-10 pr-12 max-md:flex-col max-md:gap-2">
         <div className="flex items-center gap-1 cursor-pointer">
           <img className="h-12" src="logo.png" />
         <h1 className="text-xl font-bold">Museum Mate</h1>
         </div>
          <ul className="flex items-center gap-12 font-semibold">
            <li className="cursor-pointer hover:scale-125 duration-200"><Link to="/">Home</Link></li>
            {/* <li className="cursor-pointer hover:scale-125 duration-200"><Link to="#">Explore</Link></li> */}  
            <li className="cursor-pointer hover:scale-125 duration-200"><Link to="/about">About Us</Link></li>  
            <li className="cursor-pointer hover:scale-125 duration-200"><Link to="/help">Help</Link></li>
            <li class="max-md:hidden cursor-pointer bg-black text-white px-5 py-2 rounded-lg shadow-lg shadow-black/30 duration-200 hover:shadow-black/50 hover:scale-105"><a target="_blank" href="https://mediafiles.botpress.cloud/7925452c-b1bb-42b9-9b4a-9384afe8669d/webchat/bot.html">Museum buddy</a></li>
          </ul>
      </nav>
    </>
  );
};

export default Navbar;