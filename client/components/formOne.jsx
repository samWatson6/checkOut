import React from 'react';


class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
        email: null,
        password: null,
      },
        alert: false,
    };
    this.save = this.save.bind(this);
    this.continueAsGuest = this.continueAsGuest.bind(this);
  }

  handleChange(propertyName, event) {
    const user = this.state.user;
    user[propertyName] = event.target.value;
  }


  save() {
    if (this.state.user.email !== null && this.state.user.password.length !== null) {
      this.props.saveAndContinue(this.state.user);
      this.setState({alert:false});
    } else {
      this.setState({alert:true});
    }
  }

  continueAsGuest(){
    this.props.saveAndContinue();
  }


  render () {
    var alert = () => {
      if (this.state.alert) {
        return <div id="alert">*Fields marked with * are required</div>
      }
    }
    return (
      <div className="formOne">
        <h1>Login</h1>

        <div> 
          <button id="formOne_guest_button" onClick={this.save}>CHECKOUT AS GUEST</button>
        </div>

        <div>
        <label>Username/Email*</label>
        <input type="email"
               id="email"
               onChange={this.handleChange.bind(this, 'email')} />

        <label>Password*</label>
        <input type="password"
               id="password"
               onChange={this.handleChange.bind(this, 'password')} />

        <button onClick={this.continueAsGuest}>SIGN IN</button>
        {alert()}
        </div>
      </div>
    );
  }
}


export default FormOne;