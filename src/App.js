import React from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import horneddata from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectedBeast from './components/SelectedBeast';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      horneddata:horneddata,
      selectedHorned:{},
      displayHorned:false
    }
  }
  
  displayCardAsModel =(clickedHornedTitle) => {
    const selectedHorned = horneddata.find(element=>element.title === clickedHornedTitle)

    this.setState({
      selectedHorned:selectedHorned,
      displayHorned:true
    })

  }
  handleClose =()=>{
    this.setState({
      displayHorned:false
    })
  }
  
  render() {
  
    return (
      <div>
            <Header/>
          <Main
          horneddata={this.state.horneddata}
          displayCardAsModel={this.displayCardAsModel}
          />
        <SelectedBeast
          displayHornedObject={this.state.selectedHorned}
          showSelectedHorned={this.state.displayHorned}
          handleClose={this.handleClose}
          />
          <Footer/>
      </div>
    )
   
  }
  }

export default App;