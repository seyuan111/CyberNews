import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Pagination = ({onPageChange, firstPage, cyberNews, pageSize}) => {
  const totalPages = Math.ceil(cyberNews.length / pageSize)
  
  const renderedPaginationLinks = () => {
    return Array.from({length: totalPages}, (_, i) => i + 1).map((pageNumber) => (
      <li className={pageNumber === firstPage ? "activerPagination" : ""} key={pageNumber}>
        <a href="#" onClick={() => onPageChange(pageNumber)}>{pageNumber}</a>
      </li>
    ))
  }

  return (
    <ul className="pagination my-8 flex-wrap gap-4">
      <li>
        <button onClick={() => onPageChange(firstPage - 1)} disabled={firstPage === 1}><MdKeyboardArrowLeft className="text-2xl items-center justify-center" /></button>
      </li>
      <div className="flex">{renderedPaginationLinks()}</div>
      <li>
        <button onClick={() => onPageChange(firstPage + 1)} disabled={firstPage === totalPages}><MdKeyboardArrowRight className="text-2xl items-center justify-center" /></button>
      </li>
    </ul>
  )
}

export default Pagination