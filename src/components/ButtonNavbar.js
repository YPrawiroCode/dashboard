import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../components/ButttonNavbar.css'

const ButtonNavbar = (props) => {
  return(
    <div className='flex-container'>
      <div className='btn-navbar'>
        <Button variant="primary">Expo</Button>
      </div>
      <div className='btn-navbar2'>
        <Button variant="outline-secondary">Logout</Button>
      </div>
    </div>
  ) 
}

export default ButtonNavbar