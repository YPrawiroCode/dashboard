import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../components/ButttonNavbar.css';
import * as MdIcons from "react-icons/md"

const ButtonNavbar = (props) => {
  return(
    <div className='flex-container'>
      <div className='btn-navbar'>
        <Button variant="primary"><MdIcons.MdOutlineRemoveRedEye/> Expo</Button>
      </div>
      <div className='btn-navbar2'>
        <Button variant="outline-secondary"><MdIcons.MdPowerSettingsNew/> Logout</Button>
      </div>
    </div>
  ) 
}

export default ButtonNavbar