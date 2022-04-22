import React, { useEffect, useMemo, useState } from "react";
import { Pagination } from "react-bootstrap";

const PaginationComponent = ( { total=0, itemsPerPage=10, currentPage=1, onPageChange }) => {
  
  const [totalPages, setTotalPages] = useState(0)

  useEffect( ()=>{
    if( total > 0 && itemsPerPage > 0)
      setTotalPages(Math.ceil(total / itemsPerPage))
  }, [ total, itemsPerPage ])


  const paginationItems = useMemo(() => {
    
    const createPaginationItem = (i, index) => {
      return <Pagination.Item
          key={index}
          active={i === currentPage}
          onClick={() => onPageChange(i)}
        >
          {i}
        </Pagination.Item>
    };

    const pages = [];

    if(totalPages > 10){
      pages.push(createPaginationItem(1));
    }

    if( 10 <  totalPages ){
      pages.push(<Pagination.Ellipsis />);
    }

    const midpoint = Math.floor(totalPages /2);

    if(totalPages > 10){
      for (let i = midpoint; i<= midpoint + 4; i++) {
        if(i < totalPages ){
          pages.push(createPaginationItem(i));
        }
      }
    }else {
      for (let i = 0; i <= totalPages - 1; i++) {
        if(i < totalPages ){
          pages.push(createPaginationItem(i + 1));
        }
      }
    }

    if( 10 < totalPages ){
      pages.push(<Pagination.Ellipsis />);
    }

    if(totalPages > 10){
      pages.push(createPaginationItem(totalPages));
    }
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
      >Previous</Pagination.Prev>
      {paginationItems}
      <Pagination.Next 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >Next</Pagination.Next>
    </Pagination>
  )
}

export default PaginationComponent;