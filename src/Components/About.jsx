import React from 'react'

const About = () => {
  return (
    <>
      <div className="h-[84vh] sm:flex items-center max-w-screen-xl ">
        <div className="sm:w-1/2 p-10 max-sm:hidden">
          <div className="flex justify-center">
            <img src="logo.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <h2 className="my-4 font-bold text-3xl text-gray-800  sm:text-4xl ">About <span className="text-indigo-800">Museum Mate</span>
            </h2>
            <p className="text-gray-800">
            MuseumMate is an innovative platform that simplifies the museum
            experience through a chatbot-based ticket booking system. We aim to
            make museum visits more accessible, personalized, and enjoyable by
            integrating technology with cultural exploration. Whether booking
            tickets or discovering exhibits, MuseumMate is your companion for a
            seamless and enriching museum journey.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About