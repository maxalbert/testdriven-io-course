import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    }
  }

  getUsers() {
    axios.get(`${process.env.REACT_APP_USERS_SERVICE_URL}/users`)
    .then((res) => { this.setState({ users: res.data.data.users }); })
    .catch((err) => { console.log(err); });
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <br/>
            <h1>All Users</h1>
            <hr/><br/>
            {
              this.state.users.map((user) => {
                return (
                  <h4
                    key={user.id}
                    className="card card-body bg-light"
                  >{ user.username}
                  </h4>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
};

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
