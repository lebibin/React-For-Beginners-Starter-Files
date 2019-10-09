import React from 'react';
import {formatPrice} from '../helpers';

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    if (fish.status === 'available') {
      return (
        <li key={key}>
          <span className="count">
            {count} lbs {fish.name}
          </span>
          <span>{formatPrice(count * fish.price)}</span>
        </li>
      );
    } else {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : 'fish'} is no longer available
        </li>
      );
    }
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === 'available';
      return isAvailable ? prevTotal + count * fish.price : prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <br />
        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
