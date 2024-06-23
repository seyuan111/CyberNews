import React from 'react'
import {contacts} from '../resources/resource'

const Contact = () => {
  return (
    <div>
      <div className="py-40 bg-neutral-800 text-center text-white px-4">
        <h1 className="text-3xl lg:text-5xl leading-snug mb-5">Contact Us</h1>
      </div>

      <div>
        <h2 className="sm:text-3xl text-xl lg:4xl text-center tracking-wider my-8 font-bold">Contact Support</h2>
        <div className="flex flex-wrap justify-center">
        {contacts.map((contact, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 py-2">
            <div className="bg-neutral rounded-md p-6 border text-md font-thin">
              <p>{contact.text}</p>
              <div className="flex mt-8 items-start">
                <div>
                  <h5 className="font-bold text-neutral-500">{contact.helper}</h5>
                  <span className="text-neutral-500">{contact.number}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  )
}

export default Contact