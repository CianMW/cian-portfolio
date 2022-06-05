import Col from 'react-bootstrap/Col'



const MenuItem = (props) => {


    return(
        <div class="menu-wrapper">
  
  <div class="menu-card">
       
    <i class="fa fa-share-alt" id="share-toggle"></i>
    <div id="share">
      <i class="fa fa-google" aria-hidden="true"></i>
      <i class="fa fa-facebook" aria-hidden="true"></i>
      <i class="fa fa-twitter" aria-hidden="true"></i>
    </div> 
   
    <div class="cake-pic" style={{objectFit:"contain"}}>
        <img src={props.items.image} alt={props.items.imgAlt}/>
    </div>
    
    <h1>{props.items.title}</h1>
    <span class="dotted-line"></span>
    <p>{props.items.description}</p>
    <ul class="nutrition">
      <li>fat</li>
      <li>carbs</li>
      <li>salt</li>
    </ul>
    <ul class="nutrition">
      <li class="value">0.9g</li>
      <li class="value">22.1g</li>
      <li class="value">0.2g</li>
    </ul>
    <div class="warning">
      <p><span>ALLERGY</span>: Contains {props.items.allergens}</p>
    </div>
  </div>
</div>
    )
}

export default MenuItem;