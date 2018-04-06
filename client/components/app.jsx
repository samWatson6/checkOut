import React from 'react';
import ReactDOM from 'react-dom';
import FormOne from './formOne.jsx';
import FormTwo from './formTwo.jsx';
import FormThree from './formThree.jsx';
import ConfirmationPage from './confirmationPage.jsx';
import OrderPlaced from "./orderPlaced.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: [FormOne, FormTwo, FormThree, ConfirmationPage, OrderPlaced],
      currentPageIndex: 0,
      user: {
        name: '',
        email: '',
        password: '',
        address: {
          name: '',
          line1: '',
          line2: '',
          city: '',
          state: '',
          zipcode: '',
        phoneNumber: '',
        },
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        billingZipCode: '',
      }
    };
    this.saveAndContinue = this.saveAndContinue.bind(this);
    this.goBack = this.goBack.bind(this);
  }

  saveAndContinue(input) {
    const user = this.state.user;
    for (var key in input) {
      user[key] = input[key];
    }
    //return to homepage if through checkout process
    if (this.state.currentPageIndex > 3) {
      console.log('above 1')
      this.state.currentPageIndex = -1;
      this.setState({currentPageIndex: this.state.currentPageIndex})
    }

    this.setState({
      user: this.state.user,
      currentPageIndex: this.state.currentPageIndex + 1, 
    })
  }

  goBack() {
    this.setState({currentPageIndex: this.state.currentPageIndex -1});
  }


  render() {
    var currentForm = () => {
      var CurrentPage = this.state.pages[this.state.currentPageIndex];
        return <CurrentPage user={this.state.user} saveAndContinue={this.saveAndContinue} goBack={this.goBack} />
    }

    return (
      <div>
        <h1>Checkout</h1>
        <div className="forms">{currentForm()}</div>
      </div>
    )
  }
}

export default App;


