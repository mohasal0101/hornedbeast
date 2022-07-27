import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            likesCounter: 0
        }
    }

   likesCounter = ()=>{
       this.setState({
           likesCounter: this.state.likesCounter+1
       })
   }

displayAsCard = ()=>{
    this.props.displayCardAsModel(this.props.title)
}  

   
    render() {
        return (
            <div>
            <Card style={{ width: '14rem'}}>
            <Card.Img 
            variant="top" 
            src={this.props.imgUrl} 
            title={this.props.title} 
            onClick={this.displayAsCard}
            />
            <Card.Body>
                <Card.Title>{this.props.title}</Card.Title>
                <Card.Text>💖{this.state.likesCounter}</Card.Text>
               
                <Button variant="danger" onClick={this.likesCounter} >Like</Button>
            </Card.Body>
            </Card>
            </div>
        )
    }
}

export default HornedBeast;