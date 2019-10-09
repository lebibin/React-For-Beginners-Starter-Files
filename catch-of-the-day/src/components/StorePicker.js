import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();
  goToStore = e => {
    e.preventDefault();
    const storeId = this.myInput.current.value;
    console.log(storeId);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore} action="">
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          required
          ref={this.myInput}
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
