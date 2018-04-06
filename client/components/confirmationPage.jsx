import React from 'react';
import axios from 'axios';

class ConfirmationPage extends React.Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    };

  save() {
    axios.post('/save', this.props.user)
      .then(function(response){
      console.log('saved successfully')
    }); 
    this.props.saveAndContinue();
  }
  

  render() {
    return (
      <div>
        <h1>Confirmation Page </h1>
        <div> 
          <button onClick={this.save}>PLACE ORDER</button>
        </div>

        <h2> Order Information </h2>
        <div className="orderInfo">
          <div>Name: {this.props.user.address.name} </div>
          <div>Email: {this.props.user.email} </div>
          <div>Address: 
            <div>{this.props.user.address.line1} </div>
            <div>{this.props.user.address.line2} </div>
            <div>{this.props.user.address.city}, {this.props.user.address.state}{' '+' '}{this.props.user.address.zipcode} </div>
          </div>
          <div>Phone Number: {this.props.user.address.phoneNumber} </div>
          <div>Payment Information: 
            <div> ************  {this.props.user.cardNumber.slice(-4)}</div>
            <div> {this.props.user.billingZipCode}</div>
          </div>
    </div>
    </div>
    )
  }
}


export default ConfirmationPage;


