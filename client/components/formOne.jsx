import React from 'react';


class FormOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
        name: null,
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
      <div>
        <label>Name</label> 
        <input type="text"
               id="name"
               onChange={this.handleChange.bind(this, 'name')} />

        <label>Email</label>
        <input type="email"
               id="email"
               onChange={this.handleChange.bind(this, 'email')} />

        <label>Password</label>
        <input type="password"
               id="password"
               onChange={this.handleChange.bind(this, 'password')} />

        <button onClick={this.save}>Save and Continue</button>
      </div>
    );
  }
}


export default FormOne