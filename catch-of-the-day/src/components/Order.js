import React from 'react';
import {formatPrice} from '../helpers';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import PropTypes from 'prop-types';

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    removeFromOrder: PropTypes.func,
  };
  renderOrder = key => {
    const defaultTransitionOptions = {
      classNames: 'order',
      key,
      timeout: {enter: 250, exit: 250},
    };
    const fish = this.props.fishes[key];
    if (!fish) return null;
    const count = this.props.order[key];
    if (fish.status === 'available') {
      return (
        <CSSTransition {...defaultTransitionOptions}>
          <li key={key}>
            <span>
              <TransitionGroup component="span" className="count">
                <CSSTransition
                  classNames="count"
                  key={count}
                  timeout={{enter: 250, exit: 250}}>
                  <span>{count}</span>
                </CSSTransition>
              </TransitionGroup>
              lbs {fish.name}
              {formatPrice(count * fish.price)}
              <button onClick={() => this.props.removeOrder(key)}>
                &times;
              </button>
            </span>
          </li>
        </CSSTransition>
      );
    } else {
      return (
        <CSSTransition {...defaultTransitionOptions}>
          <li key={key}>
            Sorry {fish ? fish.name : 'fish'} is no longer available
          </li>
        </CSSTransition>
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
        <TransitionGroup component="ul" className="order">
          {orderIds.map(this.renderOrder)}
        </TransitionGroup>
        <br />
        <div className="total">
          Total: <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}
export default Order;
