"use client";
import React from 'react';

const Contact: React.FC = () => {

  return (
    <section id="contact" className="pt-8 pb-8 mb-40 px-4 bg-gray-900/30 rounded-3xl backdrop-blur-xl text-white md:w-[40vw] w-[80vw]">
      <form className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:outline-none"
            required
          ></textarea>
        </div>
        <div className='text-center'>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded"
          >
            Send
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;