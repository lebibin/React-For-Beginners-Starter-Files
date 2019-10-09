import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import {renameProperty} from '../helpers';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  addFish = fish => {
    const fishes = {...this.state.fishes};
    const id = Date.now();
    const key = `fish${id}`;
    fishes[key] = fish;
    this.setState({fishes});
  };
  loadSampleFishes = () => {
    const transformedFishes = sampleFishes;
    for (let properties of Object.values(transformedFishes)) {
      renameProperty(properties, 'desc', 'description');
    }
    this.setState({fishes: transformedFishes});
  };
  addToOrder = key => {
    const order = {...this.state.order};
    order[key] = order[key] + 1 || 1;
    this.setState({order});
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine={this.props.match.params.storeId} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                fish={this.state.fishes[key]}
                id={key}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;
