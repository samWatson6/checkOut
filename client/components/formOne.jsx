import React from 'react';


class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
        email: null,
        password: null,
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


  render () {
    return (
      <div className="formOne">
        <h1>Login</h1>

        <div> 
          <button id="formOne_guest_button" onClick={this.save}>CHECKOUT AS GUEST</button>
        </div>

        <div>
        <label>Username/Email</label>
        <input type="email"
               id="email"
               onChange={this.handleChange.bind(this, 'email')} />

        <label>Password</label>
        <input type="password"
               id="password"
               onChange={this.handleChange.bind(this, 'password')} />

        <button onClick={this.save}>SIGN IN</button>
        </div>
      </div>
    );
  }
}


export default FormOne;