import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="w-80 pb-4 border shadow-xl rounded-xl flex flex-col justify-between h-full bg-gray-100 hover:scale-105 duration-300">
                <div>
                    <div className="overflow-hidden">
                        <img className="rounded-t-lg" src={props.img} alt="poster" />
                    </div>
                    <p className="m-3 text-2xl font-semibold text-gray-800">{props.title}</p>
                    <p className="mx-2 mb-4 text-gray-700">{props.desc}</p>
                </div>
                <div>
                    <a className="p-3 text-blue-600 hover:text-blue-800 duration-300"href={props.link}>Learn More</a>
                </div>
            </div>
        </>
    );
};

export default Card;
