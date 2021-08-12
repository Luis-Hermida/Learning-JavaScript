import React, { Component } from "react";
import axios from "axios";
import "./App.css";

const testData = [
  {
    name: "Dan Abramov",
    avatar_url: "https://avatars0.githubusercontent.com/u/810438?v=4",
    company: "Facebook",
    id: 1
  },
  {
    name: "Sophie Alpert",
    avatar_url: "https://avatars0.githubusercontent.com/u/6820?v=4",
    company: "Facebook",
    id: 2
  },
  {
    name: "Sebastian Markage",
    avatar_url: "https://avatars0.githubusercontent.com/u/63648?v=4",
    company: "Facebook",
    id: 3
  }
];

// App
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: testData
    };
  }

  addNewProfile = profileData => {
    this.setState(prevState => ({
      profiles: [...prevState.profiles, profileData]
    }));
  };

  render() {
    return (
      <div>
        <Header title="GitHub Profile Cards" />
        <SearchForm onSubmit={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

// Header
const Header = ({ title }) => <div className="header"> {title} </div>;

// Search Form
class SearchForm extends Component {
  state = {
    userName: "",
    error: ""
  };

  handleSubmit = async event => {
    event.preventDefault(); // Prevent Default Reload
    axios
      .get(`https://api.github.com/users/${this.state.userName}`)
      .then(res => {
        this.props.onSubmit(res.data);
      })
      .catch(err => {
        this.setState({
          error: err.response.data.message + " - " + err.response.status
        });
      });
    this.setState({ userName: "", error: "" });
  };

  render() {
    return (
      <div className="search-form">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="form-input"
            value={this.state.userName}
            onChange={event => this.setState({ userName: event.target.value })}
            required
          />
          <button className="form-button"> Search </button>
        </form>
        <h2 className="error-text">{this.state.error}</h2>
      </div>
    );
  }
}

// Card List - Function Component
const CardList = props => (
  <div className="card-list">
    {props.profiles.map(profile => (
      <Card key={profile.id} {...profile} />
    ))}
  </div>
);

// Cards - Class Component
class Card extends Component {
  render() {
    const profile = this.props;
    return (
      <div className="card-profile">
        <img
          className="profile-picture"
          src={profile.avatar_url}
          alt={profile.name}
        />
        <div className="info">
          <div className="name">
            <strong> {profile.name ? profile.name : "No Name"} </strong>
          </div>
          <div className="company">
            {profile.company ? profile.company : "No Company"}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
