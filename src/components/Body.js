import "./Body.css"
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      </div>
      test
    </div>
  )
}

export default Body