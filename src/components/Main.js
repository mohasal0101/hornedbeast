import React from 'react';
import HornedBeast from './HornedBeast';
import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            SelectedBeast:this.props.horneddata
        }
    }
   
    render() {
        return (
        <div>
          
            <CardGroup className="container">
                {this.state.SelectedBeast.map((item,index)=>
                
                <HornedBeast 
                key={index} 
                imgUrl={item.image_url} 
                title={item.title} 
                description={item.description}
                horns={item.horns}
                displayCardAsModel={this.props.displayCardAsModel}
                />
                )}
                
            </CardGroup>
        </div>
        )
    }
}

export default Main;