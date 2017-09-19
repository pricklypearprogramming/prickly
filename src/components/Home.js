import React from 'react';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h2>This is Home Page</h2>
          <p>Your name is, your age is</p>
          <button className="btn btn-primary">Make me older</button>
          <hr />
          <button className="btn btn-primary">Change Name</button>
        </div>
      </div>
    );
  }
}

export default Home;
