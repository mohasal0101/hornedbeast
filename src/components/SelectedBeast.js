import React from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';


class SelectedBeast extends React.Component {
 
    handleClose=() => {
      this.props.handleClose();
    }

    render() {
        return(
           
       <Modal 
       show={this.props.showSelectedHorned} 
        size={'md'}
        animation={'true'} 
        onHide={this.handleClose}>      
        <Modal.Header closeButton>
        <Modal.Title>{this.props.displayHornedObject.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <img src={this.props.displayHornedObject.image_url} width = "250x250" alt={this.props.displayHornedObject.title}/> <br/>
        </Modal.Body>    
        <Modal.Body>
        <p>{this.props.displayHornedObject.description}</p><br/>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="danger" onClick={this.handleClose}> Close </Button>
        </Modal.Footer>
        </Modal>
            )
          }
        }
        
export default SelectedBeast;