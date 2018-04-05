import React from 'react';
import ReactDOM from 'react-dom';
import FormOne from './formOne.jsx';
import FormTwo from './formTwo.jsx';
import FormThree from './formThree.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [],
      currentPageIndex: 1,
      user: {
        name: '',
        email: '',
        password: '',
        address: {
          line1: '',
          line2: '',
          city: '',
          state: '',
          zipcode: '',
        phoneNumber: '',
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        billingZipCode: '',
        },
      }
    };
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  saveAndContinue(input) {
    const user = this.state.user;
    for (var key in input) {
      user[key] = input[key];
    }
    this.setState({
      user: this.state.user,
      currentPageIndex: this.state.currentPageIndex + 1, 
    })
    console.log('input: ', this.state.user);
  }


  render() {
    var currentForm = () => {
      if (this.state.currentPageIndex === 1) {
        return <FormOne user={this.state.user} saveAndContinue={this.saveAndContinue} />
      } else if (this.state.currentPageIndex === 2) {
        return <FormTwo user={this.state.user} saveAndContinue={this.saveAndContinue} />
      } else if (this.state.currentPageIndex === 3) {
        return <FormThree user={this.state.user} saveAndContinue={this.saveAndContinue} />        
      }
    }
    return (
      <div>
        <h1>Checkout</h1>
        <div>{currentForm()}</div>
      </div>
    )
  }
}

export default App;


