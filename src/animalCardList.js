import React, { Component } from 'react';
import { AnimalCard } from '../components/AnimalCard';


export class AnimalList extends Component {

  constructor() {
    super();
    this.state = {
      animal: [1, 1, 1]
    }
  }

  renderAnimals() {
    return this.state.AnimalList.map((animal, i) => (
      <AnimalCard key={i} />
    ));
  }

  addAnimals() {
    const animal = this.state.animal;
    animal.push(1);
    this.setState({
      animal
    });
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col-md-3">
            <h2 className='page-title'>Horned Animals</h2>
          </div>
          <div className="col-md-6">
            <button onClick={() => { this.addAnimals() }} className="btn btn-dark">Add Room</button>
          </div>
        </div>
        <div className='row'>
          {this.renderAnimals()}
        </div>
      </section>
    )
  }
}