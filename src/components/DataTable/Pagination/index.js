import React, { useEffect, useMemo, useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ( { total=0, itemsPerPage=10, currentPage=1, onPageChange }) => {
  
  const [totalPages, setTotalPages] = useState(0)

  useEffect( ()=>{
    if( total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage))
  }, [ total, itemsPerPage ])


  const paginationItems = useMemo(() => {
    
    const createPaginationItem = (i) => {
      return <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
    };

    const pages = [];

    pages.push(createPaginationItem(1));

    pages.push(<Pagination.Ellipsis />);
    const midpoint = totalPages /2;

    for (let i = midpoint; i<= midpoint + 4; i++) {
      pages.push(createPaginationItem(i));
    }

    pages.push(<Pagination.Ellipsis />);

    pages.push(createPaginationItem(totalPages));

    // for(let i=1; i <= totalPages; i++) {
      // pages.push(
      //   <Pagination.Item 
      //     key={i} 
      //     active={i === currentPage} 
      //     onClick={() => onPageChange(i)}
      //   >
      //     {i}
      //   </Pagination.Item>
      // );
    // }
    return pages
  }, [totalPages, currentPage, onPageChange]);

  if( totalPages === 0 ) return null;

  return (
    <Pagination className="pagination">
      <Pagination.Prev 
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {paginationItems}
      <Pagination.Next 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </Pagination>
  )
}

export default PaginationComponent;