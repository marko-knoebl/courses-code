import React, {Component} from 'react';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      login: '',
      password: '',
    };
  }

  render() {
    return (
      <form>
        <div>
          <input
            value={this.state.login}
            onChange={event => {
              this.setState({login: event.target.value});
            }}
          />
        </div>
        <div>
          <input
            type="password"
            value={this.state.password}
            onChange={event => {
              this.setState({password: event.target.value});
            }}
          />
        </div>
        <div>Password strength: {this.state.password.length}</div>
      </form>
    );
  }
}

export default LoginForm;
