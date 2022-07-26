import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import HornedBeasts from "./HornedBeasts";
const array = require('../data.json');




class Main extends React.Component {
    render() {
    return (
        <Row xs={1} md={3} className="g-4">
    {array.map((item) => 
        {
            return (
                <Col>
                <HornedBeasts  imgUrl={item.image_url} title={item.title} description={item.description} />
                </Col>
                )
        }
        )
    }
        </Row>
    )
    }
}
export default Main;