import React from 'react';
import ReactDOM from 'react-dom';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }
//This method will check whether a submitted password is equal to ‘swordfish’. If it is, then this.state.authorized will become true
  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    let title;
    //the method authorize is called whenever a user hits "submit"
    const login = (
       <form action="#" onSubmit ={this.authorize}>
         <input type="password" placeholder="Password" />
         <input type="submit" />
       </form>
      );
    const contactInfo = (
      <ul>
          <li>
            client@example.com
          </li>
          <li>
            555.555.5555
          </li>
        </ul>
 
);  

    if (!this.state.authorized) {
      title ="Enter the Password"

    } else {
      title = "Contact"

    }
    return (
      <div id="authorization">
        <h1>{title}</h1>
        <div> {this.state.authorized ? contactInfo : login } </div>

        
      </div>
    );
  }
}

ReactDOM.render(
  <Contact />, 
  document.getElementById('app')
);