import React from 'react';

const AddUser = () => {
  return (
    <div>
      <form>
        <div className="form-group">
          <input
            name="username"
            className="form-control input-lg"
            type="text"
            placeholder="Enter a username"
            required
          />
        </div>
        <div>
          <input
            name="email"
            className="form-control input-lg"
            type="text"
            placeholder="Enter an email"
            required
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
