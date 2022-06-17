import React,{ useState } from "react"
import "./dayNightToggle.css"



const DayNightToggle = ({position = "top", isChecked, setIsChecked}) => {
    const changeCheck = () => {
           if ( isChecked ) {
            setIsChecked(false)
           } else {
            setIsChecked(true)
           }
           console.log(isChecked)
    }
    console.log("fuck")
    return(
        <div className={`toggleContainer ${position}`}>

        <label  className="toggle-control">
  <input type="checkbox" onClick={e =>  changeCheck()} className={isChecked && "night"} />
  <span className="control"></span>
        </label>
        </div>
        )
}

export default DayNightToggle