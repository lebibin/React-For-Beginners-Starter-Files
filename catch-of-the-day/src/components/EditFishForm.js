import React from 'react';
import PropTypes from 'prop-types';

class EditFishForm extends React.Component {
  static propTypes = {
    fish: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      description: PropTypes.string,
      status: PropTypes.string,
      price: PropTypes.number,
    }),
    index: PropTypes.number,
    updateFish: PropTypes.func,
  };
  handleChange = e => {
    const updatedFish = {
      ...this.props.fish,
      [e.currentTarget.name]: e.currentTarget.value,
    };
    this.props.updateFish(updatedFish, this.props.id);
  };
  deleteFish = e => {
    e.preventDefault();
    this.props.deleteFish(this.props.id);
  };
  render() {
    return (
      <div className="fish-edit">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          value={this.props.fish.status}
          onChange={this.handleChange}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="description"
          placeholder="Description"
          onChange={this.handleChange}
          value={this.props.fish.description}></textarea>
        <input
          type="text"
          name="image"
          placeholder="Image"
          onChange={this.handleChange}
          value={this.props.fish.image}
        />
        <button onClick={this.deleteFish}>- Remove Fish</button>
      </div>
    );
  }
}

export default EditFishForm;
