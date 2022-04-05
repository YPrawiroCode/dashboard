import "./Body.css"
import { Button, Table, Pagination, Form, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import GetData from "./GetData";


const Body = (props) => {
  return(
    <div className="main-body">
      <div className="wrap-content">
        <div className="section-a">
          <h3>Total Visitor</h3>
          <Button variant="primary">Download report</Button>
        </div>
        <div className="card-head-body">
            <p className="text-atas">Total Visitor</p>
            <p className="text-bawah">Total visitor semua mobil adalah 100 orang</p>
        </div>
        <div className="head-table">
          <p className="txt1">Show</p>
          <Form.Select className='select-menu-show' aria-label="Default select example">
            <option value="10">10</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </Form.Select>
          <p className="txt2">Entries</p>
          <div className="search-bar">
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
        </div>
        <div className="body-table">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>No</th>
                <th>Kategori</th>
                <th>Total Visitor</th>
              </tr>
            </thead>
            <tbody>
              <GetData />
              {/* <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
              </tr> */}
            </tbody>
          </Table>
        </div>
        <div className="footer-table">
          <p className="txt-footer-table">
            Showing 1 to 10 of 13 entries
          </p>          
          <Pagination className="pagination">
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
        </div>
      </div>
      test
    </div>
  )
}

export default Body