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
      fetch(`https://Back.LeftistMediaGroup.org/register/submit`, {
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

                <form className="forms-sample" onSubmit={"this.submit; return false"}>
                  <Form.Group>
                    <label htmlFor="InputEmail">Email</label>
                    <Form.Control
                      type="email"
                      id="InputEmail"
                      placeholder="Email"
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="InputUsername">Username</label>
                    <Form.Control
                      type="text"
                      id="InputUsername"
                      placeholder="Username"
                    />
                  </Form.Group>

                  <Form.Group>
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <Form.Control
                      type="password"
                      id="InputPassword"
                      placeholder="Password"
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
