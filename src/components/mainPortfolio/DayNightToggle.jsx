import "./dayNightToggle.css"



const DayNightToggle = () => {
    
    return(
        <div className="toggleContainer">

        <label className="toggle-control">
  <input type="checkbox" checked="checked"/>
  <span className="control"></span>
        </label>
        </div>
        )
}

export default DayNightToggle