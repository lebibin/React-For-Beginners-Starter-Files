import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

const App = ({match}) => (
  <div className="catch-of-the-day">
    <div className="menu">
      <Header tagLine={match.params.storeId} />
    </div>
    <Order />
    <Inventory />
  </div>
);

export default App;
