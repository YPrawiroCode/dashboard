import "./Header.css"
// import IMAGES from "../../public/images/index"

const Header = (props) => {
  return(
    <div className="main-header">
        <img src="/public/images/bars-solid.svg"/> 
      <div>
        <h1>Welcome, admin</h1>
      </div>
    </div>
  )
}

export default Header