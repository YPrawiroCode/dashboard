import React, { useEffect, useMemo, useState   } from "react";
import "./Body.css"
import { Button, Table, Form } from 'react-bootstrap';
// import { CSVLink } from 'react-csv';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TableHeader, Pagination, SearchBar } from "../components/DataTable/index";
import useFullPageLoader from "./hooks/useFullPageLoader";
// import GetData from "./GetData";

// const axios = require('axios');

const XLSX = require('xlsx')

const Body = (props) => {
  const [repo, setRepo] = useState([]);
  const [loader, showLoader, hideLoader] = useFullPageLoader();
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [sorting, setSorting] = useState({ field: "", order: "" })
  // const [loading, setLoading] = useState(false);
  // const [userData, setUserData] = useState([]);


  const getInitialState = () => {
    const value = 10;
    return value;
  };
  const [value, setValue] = useState(getInitialState);
  
  const ITEMS_PER_PAGE = parseInt(value);
  
  useEffect(() => {
    const getData = () => {
      showLoader();

      fetch("https://jsonplaceholder.typicode.com/comments")
        .then(response => response.json())
        .then(json => {
          hideLoader();
          setRepo(json);
        });
    }

    getData();
  }, []);

  // useEffect(() => {
  //   getUserData();
  // }, []);

  // const getUserData = () => {
  //   setLoading(true);
  //   axios.get('https://jsonplaceholder.typicode.com/comments')
  //       .then((res) => {
  //         setUserData(res.data);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log("Error: ", err);
  //         setLoading(false);
  //       })
  // }

  // const fileName = "Report-Data";
  
  const convertJsonToExcel = () => {
    const workSheet = XLSX.utils.json_to_sheet(repo);
    const workBook = XLSX.utils.book_new();

    XLSX.utils.book_append_sheet(workBook, workSheet, "students")

    XLSX.write(workBook, {bookType:'xlsx', type:'buffer'})

    XLSX.write(workBook,{bookType:"xlsx", type:"binary"})

    XLSX.writeFile(workBook,"reportData.xlsx")
  }

  const reposData = useMemo(() => {
    let computedRepos = repo;

    if(search){
      computedRepos = computedRepos.filter(
        repo => 
          repo.name.toLowerCase().includes( search.toLocaleLowerCase() ) ||
          repo.email.toLowerCase().includes( search.toLocaleLowerCase() )
      )
    }

    setTotalItems(computedRepos.length)

    //sorting data
    if( sorting.field ){
      const reversed = sorting.order === "asc" ? 1 : -1;
      computedRepos = computedRepos.sort(
        (a,b) => 
          reversed * a[sorting.field].localeCompare(b[sorting.field])
      )
    }

    // Current Page slice
    return computedRepos
    .slice(
        (currentPage - 1) * ITEMS_PER_PAGE, 
        (currentPage - 1) * ITEMS_PER_PAGE + ITEMS_PER_PAGE
      );
    }, [repo, search, sorting.field, sorting.order, currentPage, ITEMS_PER_PAGE])

  const headers = [
    { name: "No", field:"id", sortable: false },
    { name: "Kategori", field:"name", sortable: true },
    { name: "Total Visitor", field:"email", sortable: true },
  ]

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return(
    <>
    <div className="main-body">
      <div className="wrap-content">
        <div className="section-a">
          <h3>Total Visitor</h3>
          <Button variant="primary" onClick={convertJsonToExcel}>
            Download Report
          </Button>
        </div>
        <div className="card-head-body">
            <p className="text-atas">Total Visitor</p>
            <p className="text-bawah">Total visitor semua mobil adalah { totalItems } orang</p>
        </div>
        <div className="head-table">
          <p className="txt1">Show</p>
          <div>
            <Form.Select value={value} onChange={handleChange} className='select-menu-show' aria-label="Default select example">
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </Form.Select>
          </div>
          <p className="txt2">Entries</p>
          <div className="search-bar">
            <SearchBar onSearch={(value) => {
              setSearch(value);
              setCurrentPage(1);
            }}/>
          </div>
        </div>
        <div className="body-table">
          <Table striped bordered hover>
            <TableHeader 
              headers={headers} 
              onSorting={(field, order) => 
                setSorting({ field, order })
              }
            />
            <tbody>
              {reposData.map( (repo, index) => (
                <tr key={repo.id}>
                  <th scope="row">{repo.id}</th>
                  <th>{repo.name}</th>
                  <th>{repo.email}</th>
                </tr>) )}
              {/* <GetData loop={value}/> */}
            </tbody>
          </Table>
        </div>
        <div className="footer-table">
          <p className="txt-footer-table">
            Showing page { currentPage } from  { totalItems } entries
          </p>          
              <Pagination
                total={totalItems}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
                onPageChange={ page => setCurrentPage(page) }
              />
        </div>
      </div>
    </div>
    {loader}
    </>
  )
}

export default Body