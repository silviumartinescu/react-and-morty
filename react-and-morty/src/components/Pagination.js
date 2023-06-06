import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ pageNumber, setPageNumber, info }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateDimension = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimension);
    return () => window.removeEventListener("resize", updateDimension);
  });
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .next,
            .prev {
              display: none;
            }
            .pagination {
              font-size: 4px;
            }
          } ;
        `}
      </style>
      <ReactPaginate
        className="pagination justify-content-center gap-4 mb-3"
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        nextClassName="btn bg-primary text-white next"
        nextLinkClassName="text-white text-decoration-none"
        previousClassName="btn bg-primary text-white prev"
        previousLinkClassName="text-white text-decoration-none"
        nextLabel="NEXT"
        previousLabel="PREV"
        pageClassName="page-item text-white"
        pageLinkClassName="page-link"
        marginPagesDisplayed={width < 768 ? 1 : width < 1024 ? 2 : 3}
        pageRangeDisplayed={width < 768 ? 2 : width < 1024 ? 2 : 3}
        activeClassName="active"
        onPageChange={(data) => {
          setPageNumber(data.selected + 1);
          document.documentElement.scrollTop = 0;
        }}
        pageCount={info?.pages}
      />
    </>
  );
};

export default Pagination;
