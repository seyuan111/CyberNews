import React from 'react'
import {useLoaderData} from 'react-router-dom'

const SingleNews = () => {
    const data = useLoaderData()
    const {title, image, categories, author, published_date, content} = data[0]

  return (
    <div>

      <div className="py-40 bg-neutral-800 text-center text-white px-4">
        <h1 className="text-3xl lg:text-5xl leading-snug mb-5">Article</h1>
      </div>

      <div className="max-w-7xl mx-auto my-12">
        <div className="lg:w-3/4 mx-auto">
          <h2 className="text-2xl mb-4">{title}</h2>
          <div>
            <img src={image} className="w-full mx-auto rounded" />
          </div>
          <p className="text-neutral-500 mt-4">{author} | {published_date}</p>
          <p className="text-xl mt-6">{content}</p>
          <div className="text-xl mt-6">
            <p>This is a story about Cyber Security. This is where people website are being hacked by attackers. One member has a website that has been attacked and he had lost all his data.</p><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p><br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adip</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default SingleNews