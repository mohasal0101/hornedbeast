import React from 'react';
import HornedBeast from './hornedbeast';
import CardGroup from 'react-bootstrap/CardGroup';

class Main extends React.Component {

  constructor(props) {
      super(props);
      this.state={
          SelectedBeast:this.props.MainJSON
      }
  }
 
  render() {
      return (
      <div>
        
          <CardGroup className="App">
              {this.state.SelectedBeast.map((element,index)=>
              
              <HornedBeast 
              key={index} 
              imgUrl={element.image_url} 
              title={element.title} 
              description={element.description}
              horns={element.horns}
              displayCardAsModel={this.props.displayCardAsModel}
              />
              )}
              
          </CardGroup>
      </div>
      )
  }
}

export default Main;