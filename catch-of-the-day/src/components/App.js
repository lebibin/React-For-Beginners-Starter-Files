import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';
import {renameProperty} from '../helpers';
import base from '../base';

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
  componentDidMount() {
    const {params} = this.props.match;
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });
  }
  componentDidUpdate() {
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order),
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addFish = fish => {
    const fishes = {...this.state.fishes};
    const id = Date.now();
    const key = `fish${id}`;
    fishes[key] = fish;
    this.setState({fishes});
  };
  updateFish = (fish, id) => {
    const fishes = {...this.state.fishes};
    fishes[id] = fish;
    this.setState({fishes});
  };
  removeOrder = id => {
    const order = {...this.state.order};
    delete order[id];
    this.setState({order});
  };
  deleteFish = id => {
    const fishes = {...this.state.fishes};
    fishes[id] = null;
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
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeOrder={this.removeOrder}
        />
        <Inventory
          addFish={this.addFish}
          deleteFish={this.deleteFish}
          fishes={this.state.fishes}
          loadSampleFishes={this.loadSampleFishes}
          updateFish={this.updateFish}
        />
      </div>
    );
  }
}

export default App;
