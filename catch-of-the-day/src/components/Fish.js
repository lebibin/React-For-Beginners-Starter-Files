import React from 'react';
import {formatPrice} from '../helpers';

class Fish extends React.Component {
  addToOrder = () => {
    this.props.addToOrder(this.props.id);
  };
  actionName = isAvailable => {
    return isAvailable ? 'Add To Cart' : 'Sold Out';
  };
  render() {
    const {name, price, image, description, status} = this.props.fish;
    const isAvailable = status === 'available';
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{description}</p>
        <button disabled={!isAvailable} onClick={this.addToOrder}>
          {this.actionName(isAvailable)}
        </button>
      </li>
    );
  }
}
export default Fish;
