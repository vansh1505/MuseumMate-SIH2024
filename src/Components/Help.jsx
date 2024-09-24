import React from 'react'

const Help = () => {
  return (
    <section>
  <div className="py-8 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl font-bold text-center text-gray-800 ">Contact Us</h2>
      <p className="mb-8 font-light text-center text-blue-800 sm:text-xl">Got a technical issue? Want to send feedback? Let us know.</p>
      <div className='shadow-xl rounded-xl p-3 border'>
      <form action="#" className="space-y-8">
          <div>
              <label for="email" className="block mb-2 text-sm font-medium text-gray-900">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="Enter your Email" required />
          </div>
          <div>
              <label for="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm " placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
              <label for="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
              <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-blue-800 text-white">Send message</button>
      </form>
      </div>
  </div>
</section>
  )
}

export default Help 