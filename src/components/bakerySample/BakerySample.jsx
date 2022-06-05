import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./bakeryStyle.css";
import MenuItem from "./MenuItem";
import BakeryFooter from "./BakeryFooter";


const BakerySample = () => {


    const menuItems = [
        {
            title: "Pound Cake",
            description: "A soft, vanilla pound cake with a rich, buttery taste.",
            image: "https://upload.wikimedia.org/wikipedia/commons/0/04/Pound_layer_cake.jpg",
            price: "£ 2",
            imgAlt: "Pound Cake",
            allergens: "dairy, eggs, wheat"

        },
        {
            title: "Rustic Apple Tart",
            description: "French apple tart consisting of a thin layer of cinnamon-scented apples atop a buttery, flaky crust.",
            image: "https://www.onceuponachef.com/images/2017/10/rustic_french_apple_tart.jpg",
            price: "£ 2.50",
            imgAlt: "Rustic French Apple Tart",
            allergens: "dairy, nuts, soy, eggs, wheat"

        },
        {
            title: "Salted Caramel cookies",
            description: "Soft chewy caramel cookies with sea salt and drizzled with salted caramel.",
            image: "https://i0.wp.com/brownedbutterblondie.com/wp-content/uploads/2021/02/Salted-Caramel-Choco-Chip-Cookies-For-Two-BP-1-1.jpg",
            price: "£ 3.15",
            imgAlt: "salted caramel cookies",
            allergens: "dairy, nuts, soy, eggs, wheat, lactose"


        },
        {
            title: "Baklava",
            description: "A combination of sticky, crisp pastry and nuts.",
            image: "https://www.carolinescooking.com/wp-content/uploads/2020/10/Greek-recipes-square.jpg",
            imgAlt: "Baklava",
            price: "£ 2",
            allergens: "dairy, nuts, eggs, wheat, lactose"
        },
    ]


    return (
        <Container className="bakeryContainer">
            <Row className="">
                {/* Side Menu Start */}
                <Col md={2} className="sticky-top d-none d-md-inline-flex bakerySideMenu px-3 m-0">
                    <Row className="p-3">
                    <img className="bakeryLogoImage" src="https://i.ibb.co/crStXGQ/bakery-Logo.png"/>
                    </Row>
                    <div className=" text-center align-middle">
                        <a className="bakeryLink"><span>Home</span></a>
                        <a className="bakeryLink"><span>Menu</span></a>
                        <a className="bakeryLink"><span>Gallery</span></a>
                        <a className="bakeryLink"><span>About Us</span></a>
                        <a className="bakeryLink"><span>Contact</span></a>
                    </div>
                    <div className="pt-3 text-center">
                    <p>1 Dunira Close, Newcastle Upon Tyne,NE2 2EL</p>
                    </div>
                </Col>
                {/* Side Menu END */}

                <Col md={10} className="fullWidth p-0 m-0">
                    <Row className="mainBakeryInfoContainer m-0 p-0">
                        <Col className="m-0 p-0" style={{overflowY: "scroll", overflowY: "hidden"}}>
                            {/* First Section START*/}
                            <Row className="m-0 p-0 bakeryBackgroundImage">
                            </Row>
                            {/* First Section END */}


                            {/* Menu Section Section START*/}
                            <Row className="m-0 p-0">
                                <div className="bakeryMenuContainer">
                                    <div className="leftMenuPanel">
                                        <div className="menuTitle text-center">
                                            <h2>Our Menu</h2>
                                        </div>
                                    </div>
                                    <Row className="mt-5 rightMenuPanel">
                                        { menuItems.length > 0 && menuItems.map((item, index) => 
                                        <Col md={4} className="col-12">
                                            <MenuItem className="" key={index+Math.random()} items={item} />
                                        </Col>
                                        )
                                            
                                        }
                                    </Row>
                                </div>
                            </Row>
                            {/* Menu Section Section END*/}

                            <Row className="m-0 p-0">
                            <BakeryFooter/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}


export default BakerySample;