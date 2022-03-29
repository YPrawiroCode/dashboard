import "./Header.css"
import IMAGES from "../images/index"

const Header = (props) => {
  return(
    <div>
      <div className="main-header">
        <img src={IMAGES.threeLine} alt=""/>
        <div>
          <h2>Welcome, admin</h2>

        </div>
      </div>
      <div className="float-bar-title">
        <h1>Dashboard</h1>
      </div>
    </div>
    
  )
}

export default Header