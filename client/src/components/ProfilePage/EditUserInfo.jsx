import React from "react";
import axios from "axios";

class EditUserInfo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      zip: this.props.zip,
      photo: this.props.photo,
      email: this.props.email,
      password: this.props.password,
    };
    this.handleGetFields = this.handleGetFields.bind(this);
    this.handleSubmitUserInfo = this.handleSubmitUserInfo.bind(this);
  }

  handleGetFields(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmitUserInfo() {
    const { user_id } = this.props;
    const { name, zip, photo, email, password } = this.state;
    if (name.length > 1 && zip.toString().length === 5) {
      const newUserInfo = {
        name: name,
        zip: zip,
        photo: photo,
        email: email,
        password: password,
      };
      console.log(newUserInfo);
      axios
        .put(`/users/${user_id}`, newUserInfo)
        .then((response) => {
          console.log("user put");
        })
        .catch((err) => {
          throw err;
        });
    }
  }

  render() {
    const { toggleEditUserForm } = this.props;
    const { name, zip, photo, email, password } = this.state;
    return (
      <div className="edit-user-info-form">
        <form>
          Full Name:{" "}
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleGetFields}
          />
          Zip Code:{" "}
          <input
            type="text"
            name="zip"
            value={zip}
            onChange={this.handleGetFields}
          />
          Photo:{" "}
          <input
            type="text"
            name="photo"
            value={photo}
            onChange={this.handleGetFields}
          />
          Email:{" "}
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleGetFields}
          />
          Password:{" "}
          <input
            type="text"
            name="password"
            value={password}
            onChange={this.handleGetFields}
          />
          <button onClick={this.handleSubmitUserInfo}>Submit User Info</button>
          <button
            onClick={() => {
              toggleEditUserForm();
            }}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EditUserInfo;
