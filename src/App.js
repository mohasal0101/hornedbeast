  import React from "react";
  import './App.css';
  import Header from './header.js';
  import Footer from './footer.js';
  import Main from './main.js';
  import Container from 'react-bootstrap/Container';
  import Nav from 'react-bootstrap/Nav';
  import Navbar from 'react-bootstrap/Navbar';
  import 'bootstrap/dist/css/bootstrap.min.css';
  import MainJSON from './mainJSON.json';






  class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        MainJSON:MainJSON,
        displayHorned:false
      }
    }
  
    handleClose =()=>{
      this.setState({
        displayHorned:false
      })
    }
  
    render() {
    
      return (
        <div className="App">
           <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Salah</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Horned Beasts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
              <Header/>
            <Main/>
  
            <Footer/>
        </div>
      )
     
    }
  }
  export default App;


    /*   <div className="App">
          <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Salah</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Horned Beasts</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Header/>
        <Main/>
        <Footer/>
      </div> */
  

