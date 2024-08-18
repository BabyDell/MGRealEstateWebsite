"use client";
import React, { useEffect, useState } from "react";
import { houses } from "../data.js";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['600'],
})

const PaginationComponent = () => {
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(window.innerWidth <= 640 ? 3 : 6);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = houses.map((house) => (
    <a className="" target="_blank" href={house.link}>
      <div
        className="image-container bg-cover rounded-lg h-52 w-full"
        style={{ backgroundImage: `url(${house.image})` }}
      >
        <div className="flex flex-col justify-end w-full h-full text-white bg-gradient-to-t from-black via-transparent to-transparent text-xs ">
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
    </a>
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
    <header id="header" className="text-4xl mt-10 mb-2 font-medium ">Listings</header>
    <div className={`text-xl mb-10 text-gray-600 ${montserrat.className}`}>Click on a Listing to View More Information</div>
    <section id="body" className="pb-20">
      <div className="flex grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-x-2 gap-y-2 w-auto mx-auto md:w-[700px] lg:w-[1100px]">

      {content
        .slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
        .map((item, index) => (
          <div key={index} className="w-80 mx-auto">
            {item}
          </div>
        ))}
        </div>
      <article id="pagin" className="mt-5">
        <nav className="flex space-x-2 justify-center">
          <span>
            <button className="prev" onClick={prevPage}>
              {"<<"}
            </button>
          </span>
          <ul className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <li key={index} className={index === currentPage ? "active bg-sky-800 text-white px-1 rounded-md" : "hover:bg-sky-200 rounded-md px-1"}>
                <button className="" onClick={(event) => handlePageClick(event, index)}>
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
