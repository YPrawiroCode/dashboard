import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import '../components/ButttonNavbar.css';
import * as MdIcons from "react-icons/md"

const ButtonNavbar = (props) => {
  return(
    <div className='flex-container'>
      <div className='btn-navbar'>
        <Button variant="primary"><i className='btn-expo'><MdIcons.MdRemoveRedEye/> </i> <p className='txt-expo'>Expo</p></Button>
      </div>
      <div className='btn-navbar2'>
        <Button variant="outline-secondary"><i className='btn-expo'> <MdIcons.MdPowerSettingsNew/>  </i> <p className='txt-expo'>Logout</p></Button>
      </div>
    </div>
  ) 
}

export default ButtonNavbar