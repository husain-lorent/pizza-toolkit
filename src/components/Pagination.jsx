import React from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ onChangePage,currentPage }) => {
  return (
    <div className="py-10 container mx-auto">
      <ReactPaginate
        className="paginate"
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage -1}
        renderOnZeroPageCount={null}
      />
    </div>
  );
};

export default Pagination;
