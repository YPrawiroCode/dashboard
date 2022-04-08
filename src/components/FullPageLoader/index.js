import React from "react";
import Spinner  from "../resources/spinner.gif";
import './FullPageLoader.css'

const FullPageLoader = () => {
  return (
    <div className="fp-container">
      <img src={Spinner} className="fp-loader" alt="loading" />
    </div>
  )

}

export default FullPageLoader