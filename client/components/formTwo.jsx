import React from 'react';


class FormTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        address: {
          name: null,
          line1: null,
          line2: null,
          city: null,
          state: null,
          zipcode: null,
          phoneNumber: '',
        },

    };
    this.save = this.save.bind(this);
  }

  handleChange(propertyName, event) {
      const address = this.state.address;
      address[propertyName] = event.target.value;
  }


  save() {
    this.props.saveAndContinue(this.state);
  }

  //line 1, line2, city, state, zip code


  render () {
    return (
      <div>
        <label>Name</label> 
        <input type="text"
               id="name"
               onChange={this.handleChange.bind(this, 'name')} />

        <label>Line 1</label> 
        <input type="text"
               id="line1"
               onChange={this.handleChange.bind(this, 'line1')} />

        <label>Line 2</label>
        <input type="text"
               id="line2"
               onChange={this.handleChange.bind(this, 'line2')} />

        <label>City</label>
        <input type="text"
               id="city"
               onChange={this.handleChange.bind(this, 'city')} />

        <label>State</label> 
        <input type="text"
               id="state"
               onChange={this.handleChange.bind(this, 'state')} />

        <label>Zip Code</label> 
        <input type="text"
               id="zipcode"
               onChange={this.handleChange.bind(this, 'zipcode')} />

        <label>Phone Number</label> 
        <input type="text"
               id="phoneNumber"
               onChange={this.handleChange.bind(this, 'phoneNumber')} />

        <button onClick={this.save}>Save and Continue</button>
      </div>
    );
  }
}


export default FormTwo