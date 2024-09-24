import React from "react";

const Points = () => {
  return (
    <div className="flex justify-center max-md:overflow-x-auto overflow-x-auto">
      <div className="flex gap-12 mt-5 md:gap-8 p-4 md:p-0">
        <div className="flex border w-96 p-2 gap-8 items-center my-2 bg-gray-200 rounded-xl justify-center flex-shrink-0">
          <div>
            <img className="h-16" src="multulingual.png" alt="Multilingual support" />
          </div>
          <div>
            <h1 className="my-1 font-semibold text-lg">Multilingual bot support</h1>
            <h2 className="text-sm">Chat in any language</h2>
          </div>
        </div>
        <div className="flex border w-96 p-2 gap-8 items-center my-2 bg-gray-200 rounded-xl justify-center flex-shrink-0">
          <div>
            <img className="h-16" src="https://img.icons8.com/?size=100&id=68936&format=png" alt="Payment option" />
          </div>
          <div>
            <h1 className="my-1 font-semibold text-lg">Integrated payment option</h1>
            <h2 className="text-sm">Secured payment using Razorpay</h2></div>
        </div>
        <div className="flex border w-96 p-2 gap-8 items-center my-2 bg-gray-200 rounded-xl justify-center flex-shrink-0">
          <div>
            <img className="h-16" src="ticket.png" alt="Flexible cancellation" />
          </div>
          <div>
            <h1 className="my-1 font-semibold text-lg">Stay flexible</h1>
            <h2 className="text-sm">Flexible cancellation options on all venues</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
