import React from "react";

const Faq = () => {
    return (
        <>
            <p className="ml-32 text-2xl font-bold">Frequently asked questions (FAQ)</p>
        <ul className="mb-8 w-4/5 mx-auto mt-3 divide-y bg-gray-50 shadow-lg rounded-xl">
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        <span>About MuseumMate</span>
                    </summary>
                    <article className="px-4 pb-4">
                        <p>Welcome to MuseumMate, your ultimate companion for exploring and experiencing the world's finest museums with ease and convenience.</p>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        <span>What We Do</span>
                    </summary>
                    <article className="px-4 pb-4">
                        <p>
                            MuseumMate offers a user-friendly platform that integrates a sophisticated chatbot with a seamless website interface. Our chatbot assists users in discovering museums, exploring exhibits, and managing their visit with just a few clicks. Whether you’re planning a visit to a local museum or a renowned cultural institution across the globe, MuseumMate is here to help.
                        </p>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        <span>Key Features</span>
                    </summary>
                    <article className="px-4 pb-4">
                        <ul className="list-disc list-inside">
                            <li>Effortless Booking: Our chatbot streamlines the ticket booking process, allowing you to easily select your preferred date, time, and seats for a smooth museum visit.</li>
                            <li>Comprehensive Museum Information: Get detailed insights into museums, including their history, exhibits, opening hours, and special events.</li>
                            <li>Multi-Language Support: With support for multiple languages, MuseumMate ensures that users from diverse backgrounds can access museum information in their preferred language.</li>
                            <li>Payment Integration: Secure and convenient payment options for a hassle-free booking experience.</li>
                            <li>Explore Multiple Museums: Discover a variety of museums, whether you’re interested in art, history, science, or any other field of interest.</li>
                        </ul>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        <span>Our Vision</span>
                    </summary>
                    <article className="px-4 pb-4">
                        <p>We envision a world where everyone can effortlessly connect with cultural and educational institutions. By harnessing the power of technology, we aim to enhance the museum-going experience and promote a deeper appreciation for the arts and history.</p>
                    </article>
                </details>
            </li>
            <li>
                <details className="group">
                    <summary className="flex items-center gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer">
                        <svg className="w-5 h-5 text-gray-500 transition group-open:rotate-90" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"></path>
                        </svg>
                        <span>Join Us</span>
                    </summary>
                    <article className="px-4 pb-4">
                        <p>Whether you’re a museum enthusiast, a casual visitor, or someone new to the world of museums, MuseumMate is here to guide and enrich your journey. Explore, learn, and enjoy with ease—experience the future of museum visits with MuseumMate.</p>
                    </article>
                </details>
            </li>
        </ul>
        </>
    );
};

export default Faq;
