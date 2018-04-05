import React from 'react';

class OrderPlaced extends React.Component {
  constructor(props) {
    super(props);
    this.save = this.save.bind(this);
    };

  save() {
    this.props.saveAndContinue();
  }
  

  render() {
    return (
      <div>
      <h3>Thank you! Your order has been placed </h3>
      <div> 
        <button id="backToHomePage"onClick={this.save}>Back to Homepage</button>
      </div>
      </div>
    )
  }
}


export default OrderPlaced;