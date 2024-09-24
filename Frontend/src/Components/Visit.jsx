import React, { useState, useEffect } from "react";
import Card from "./Card";

const Visit = () => {
  const [museums, setMuseums] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    const fetchMuseums = async () => {
      try {
        const response = await fetch('http://localhost:5000/museums');
        const data = await response.json();
        setMuseums(data);
      } catch (error) {
        console.error('Error fetching museum data:', error);
      }
    };

    fetchMuseums();
  }, []);

  return (
    <>
      <div className="text-3xl pl-28 font-bold pt-5 px-4">
        Best Museums to Visit in India
      </div>
      <div className="flex justify-center p-6 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {museums.map((museum) => (
            <Card
              // key={museum._id}
              title={museum.name}
              desc={museum.description}
              img={museum.img}
              // link={museum.website}
              // location={museum.location}
              // ticketPrice={museum.ticket_price}
              // timings={museum.timings}
              // visitorCount={museum.visitor_count}
              seatsAvailable={museum.seats_available}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Visit;
