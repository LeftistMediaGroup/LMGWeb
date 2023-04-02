import React, { Component } from "react";
import { Form } from "react-bootstrap";

export class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      username: null,
      password: null,
      password2: null,
    };
  }

  submit() {
    if (this.state.password === this.state.password2) {
      fetch(`https://Back.LeftistMediaGroup.org/register/submit/`, {
        method: "POST",
        mode: "cors",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          username: this.state.username,
          password: this.state.password,
        })
      });
    } else {
      console.log("Passwords don't match, please try again.");
    }
  }

  usernameChange(username) {
    if (username !== this.state.username) {
      this.setState({
        "username":username
      });
    };
  };

  emailChange(email) {
    if (email !== this.state.email) {
      this.setState({
        "email":email
      });
    };
  };

  passwordChange(password) {
    if (password !== this.state.password) {
      this.setState({
        "password":password
      });
    };
  };

  password2Change(password2) {
    if (password2 !== this.state.password2) {
      this.setState({
        "password2":password2
      });
    };
  };

  render() {
    return (
      <div>
        <div className="page-header">
          <h3 className="page-title"> Sign Up </h3>
        </div>

        <div className="row">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Apply now!</h4>

                <p className="card-description">
                  Create an account to start Volunteering!{" "}
                </p>

                <form className="forms-sample" onSubmit={(e)=> {
                  e.preventDefault();
                  this.submit()
                }
                }>
                  <Form.Group>
                    <label htmlFor="InputEmail">Email</label>
                    <Form.Control
                      type="email"
                      id="InputEmail"
                      placeholder="Email"
                      onChange={this.emailChange()}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="InputUsername">Username</label>
                    <Form.Control
                      type="text"
                      id="InputUsername"
                      placeholder="Username"
                      onChange={this.usernameChange()}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control
                      type="password"
                      id="InputPassword"
                      placeholder="Password"
                      onChange={this.passwordChange()}
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="InputConfirmPassword">
                      Confirm Password
                    </label>
                    <Form.Control
                      type="password"
                      className="form-control"
                      id="InputConfirmPassword"
                      placeholder="Password"
                      onChange={this.password2Change()}
                    />
                  </Form.Group>

                  <button type="submit" className="btn btn-primary mr-2">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
};

export default SignUpForm;
