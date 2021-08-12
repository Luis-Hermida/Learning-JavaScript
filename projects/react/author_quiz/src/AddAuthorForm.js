import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import "./AddAuthorForm.css";

class AuthorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      imageUrl: "",
      books: [],
      bookTemp: ""
    };
    this.onFieldChange = this.onFieldChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleAddBook = this.handleAddBook.bind(this);
  }

  handleAddBook(event) {
    event.preventDefault();
    this.setState({
      books: [...this.state.books, this.state.bookTemp],
      bookTemp: ""
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    this.props.onAddAuthor(this.state);
  }

  onFieldChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-input">
          <label htmlFor="name"> Name </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onFieldChange}
          ></input>
        </div>
        <div className="form-input">
          <label htmlFor="imageUrl"> Image URL </label>
          <input
            type="text"
            name="imageUrl"
            value={this.state.imageUrl}
            onChange={this.onFieldChange}
          ></input>
        </div>
        <div className="form-input">
          {this.state.books.map(book => (
            <p key={book}> {book} </p>
          ))}
          <label htmlFor="bookTemp"> Books </label>
          <input
            type="text"
            name="bookTemp"
            value={this.state.bookTemp}
            onChange={this.onFieldChange}
          ></input>
          <input type="button" value="+" onClick={this.handleAddBook} />
        </div>
        <input type="submit" value="Add" />
      </form>
    );
  }
}

function AddAuthorForm({ match, onAddAuthor }) {
  return (
    <div className="AddAuthorForm">
      <h1> Add Author </h1>
      <AuthorForm onAddAuthor={onAddAuthor} />
    </div>
  );
}

function mapDispatchToProps(dispatch, props) {
  return {
    onAddAuthor: author => {
      dispatch({ type: "ADD_AUTHOR", author });
      props.history.push("/");
    }
  };
}

export default withRouter(connect(() => {}, mapDispatchToProps)(AddAuthorForm));
