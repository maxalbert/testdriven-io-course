import React from 'react';

const AddUser = (props) => {
  return (
    <div>
      <form onSubmit={(event) => props.addUser(event)}>
        <div className="form-group">
          <input
            name="username"
            className="form-control input-lg"
            type="text"
            placeholder="Enter a username"
            required
            value={props.username}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input
            name="email"
            className="form-control input-lg"
            type="text"
            placeholder="Enter an email"
            required
            value={props.email}
            onChange={props.handleChange}
          />
        </div>
        <div>
          <input
            type="submit"
            className="btn btn-primary btn-lg btn-block"
            value="Submit"
          />
        </div>
      </form>
    </div>
  )
};

export default AddUser;
