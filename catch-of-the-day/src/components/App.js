import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

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
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagLine={this.props.match.params.storeId} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;
