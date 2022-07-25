import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import  './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function App() {
  return (
    <div className="App">
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
        <div className="cont">
        <Main/>
        </div>
        <Footer/>
      </div>
     
    </div>
  );
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
  

