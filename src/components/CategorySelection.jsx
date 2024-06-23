import React from 'react'

const CategorySelection = ({onSelectCategory, activeCategory}) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"]
  return (
    <div className="text-md px-4 mb-8 space-x-6 lg:space-x-16 flex flex-wrap items-center my-5 text-neutral-600">
        <button onClick={() => onSelectCategory(null)} className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}>All</button>
        {
            categories.map((category) => (
                <button onClick={() => onSelectCategory(category)} className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`} key={category}>{category}</button>
            ))
        }
    </div>
  )
}

export default CategorySelection