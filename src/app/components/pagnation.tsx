"use client";
import React, { useState } from "react";
import { houses } from "../data.js";

const PaginationComponent = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(0);

  const content = houses.map((house) => (
    <div className="">
      <div
        className="image-container bg-cover rounded-lg h-64 w-full"
        style={{ backgroundImage: `url(${house.image})` }}
      >
        <div className="flex flex-col justify-end w-full h-full  text-white bg-gradient-to-t from-black via-transparent to-transparent text-sm ">
          <div className="w-full ml-2 flex">
            <span className="">{house.price + " "}</span>
            <div className="w-px h-auto mx-2 bg-white"> </div>
            <span className="">{house.beds} Bed </span>
            <div className="w-px h-auto mx-2 bg-white"> </div>
            <span className="">{house.baths} Bath </span>
            <div className="w-px h-auto mx-2 bg-white"> </div>
            <span className="">{house.status}</span>
          </div>
          <div className=" ml-2 w-full flex mb-2 mt-1">
            <span className="mr-1">{house.address + ","}</span>
            <span>
              {house.city}, {house.state} {house.zip}
            </span>
          </div>
        </div>
      </div>
    </div>
  ));

  const totalPages = Math.ceil(content.length / itemsPerPage);

  const showPage = (page) => {
    if (page < 0 || page >= totalPages) return;
    setCurrentPage(page);
  };

  const prevPage = (event) => {
    showPage(currentPage - 1);
  };

  const nextPage = (event) => {
    showPage(currentPage + 1);
  };

  const handlePageClick = (event, page) => {
    showPage(page);
  };

  return (
    <>
    <header id="header" className="text-xl">Listings</header>
    <section id="body">
      <div className="flex grid grid-cols-2 lg:grid-cols-3 justify-center items-center w-full md:w-3/4 mx-auto gap-5">

      {content
        .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        .map((item, index) => (
          <div key={index} className="content">
            {item}
          </div>
        ))}
        </div>
      <article id="pagin">
        <nav>
          <span>
            <button className="prev" onClick={prevPage}>
              {"<<"}
            </button>
          </span>
          <ul>
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={index === currentPage ? "active" : ""}>
                <button  onClick={(event) => handlePageClick(event, index)}>
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
          <span>
            <button className="next" onClick={nextPage}>
              {">>"}
            </button>
          </span>
        </nav>
      </article>
    </section>
    </>
  );
};

export default PaginationComponent;
