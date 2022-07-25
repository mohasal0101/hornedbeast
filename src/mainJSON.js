import React from "react";

const horned = [{
    "_id": 1,
    "image_url": "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg",
    "title": "UniWhal",
    "description": "A unicorn and a narwhal nuzzling their horns",
    "keyword": "narwhal",
    "horns": 1
},

{
    "_id": 2,
    "image_url": "https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80",
    "title": "Rhino Family",
    "description": "Parent rhino with two babies",
    "keyword": "rhino",
    "horns": 2
},

{
    "_id": 3,
    "image_url": "https://www.dhresource.com/0x0s/f2-albu-g5-M00-1A-11-rBVaI1hsIIiALxKzAAIHjSU3VkE490.jpg/wholesale-halloween-costume-prop-unicorn.jpg",
    "title": "Unicorn Head",
    "description": "Someone wearing a very silly unicorn head mask",
    "keyword": "unicorn",
    "horns": 1
}];

// reference for loop in react https://stackabuse.com/how-to-loop-in-react-jsx/

class mainJSON extends React.Component {

    render() {
        return (
            horned.map((beast) => (
                <div title="containerDiv">
                    <div className="beastTitle">
                        <h2 key={beast.id}>
                            {beast.title}
                        </h2>
                    </div>
                    <div>
                        <img src={beast.image_url} className='hornedBeast' alt="Ancestor Spirit" />
                    </div>
                    <div className="hornedBeastParagraph">
                    <p key={beast.id}>
                        {beast.description}
                    </p>
                    </div>
                </div>
            )))
    }
}
export default mainJSON;