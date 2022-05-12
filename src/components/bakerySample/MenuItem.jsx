import Col from 'react-bootstrap/Col'



const MenuItem = (props) => {


    return(
        <Col md={6} className="m-0 p-1">
            <div className="border">
                <h2>{props.items.title}</h2>
                <img src={props.items.image} alt={props.items.imgAlt} />
            </div>
        </Col>
    )
}

export default MenuItem;