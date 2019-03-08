import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoading: true,
      users: []
    };
  }

  componentDidMount() {
    fetch(`https://randomuser.me/api/?results=100`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          users: data.results,
          isLoading: false,
        })
      )
  }
  render() {
    const { isLoading, users } = this.state;
    return (
      <div>
        <h1>100 Random User</h1>       
        {!isLoading ? (
          users.map(user => {
            const { name, email, picture } = user;
            return (
              <div key={email} className="row">
                <p><img src={picture.large}/></p>
                <div className="info">
                  <p>Name: {name.first}</p>
                  <p>Email Address: {email}</p>
                  <p>Phone: {user.phone}</p>
                </div>               
              </div>            
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
