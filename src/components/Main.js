import React from "react";
import HornedBeasts from "./HornedBeasts";
const array = require('../data.json');


class Main extends React.Component {
    render() {
    return (
        <>
    {array.map((item) => 
        {
            return (
                <HornedBeasts  imgUrl={item.image_url} title={item.title} description={item.description} />
            )
        }
        )
    }
        </>
    )
    }
}
export default Main;