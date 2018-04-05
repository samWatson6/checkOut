import React from 'react';


//credit card #, expiry date, CVV, and billing zip code.

class FormThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        billingZipCode: '',
      }
    };
    this.save = this.save.bind(this);
  }

  handleChange(propertyName, event) {
    const user = this.state.user;
    user[propertyName] = event.target.value;
  }


  save() {
    this.props.saveAndContinue(this.state.user);
  }

  //line 1, line2, city, state, zip code


  render () {
    return (
      <div>
        <label>Credit Card Number</label> 
        <input type="text"
               id="cardNumber"
               onChange={this.handleChange.bind(this, 'cardNumber')} />

        <label>Expiration Date</label>
        <input type="text"
               id="expirationDate"
               onChange={this.handleChange.bind(this, 'expirationDate')} />

        <label>CVV</label>
        <input type="text"
               id="cvv"
               onChange={this.handleChange.bind(this, 'cvv')} />

        <label>Billing Zip Code</label> 
        <input type="text"
               id="billingZipCode"
               onChange={this.handleChange.bind(this, 'billingZipCode')} />

        <button onClick={this.save}>Save and Continue</button>
      </div>
    );
  }
}


export default FormThree