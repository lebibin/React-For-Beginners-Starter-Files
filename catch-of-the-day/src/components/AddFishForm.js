import React from 'react';

class AddFishForm extends React.Component {
  name = React.createRef();
  price = React.createRef();
  status = React.createRef();
  description = React.createRef();
  image = React.createRef();
  createFish = e => {
    e.preventDefault();
    const fish = {
      name: this.name.current.value,
      price: parseFloat(this.price.current.value),
      description: this.description.current.value,
      status: this.status.current.value,
      image: this.image.current.value,
    };
    this.props.addFish(fish);
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="fish-edit" action="" onSubmit={this.createFish}>
        <input type="text" name="name" placeholder="Name" ref={this.name} />
        <input
          type="number"
          name="price"
          placeholder="Price"
          ref={this.price}
        />
        <select name="status" ref={this.status}>
          <option value="available">Fresh</option>
          <option value="unavailable">Sold Out</option>
        </select>
        <textarea
          name="desc"
          placeholder="Description"
          ref={this.description}></textarea>
        <input type="text" name="image" placeholder="Image" ref={this.image} />
        <button type="submit">+ Add Fish</button>
      </form>
    );
  }
}

export default AddFishForm;
