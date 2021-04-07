import React from 'react';
import GoogleLogin from 'react-google-login';

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.responseGoogle = this.responseGoogle.bind(this);
  }

  // responseGoogle(response) {
  //   console.log(response);
  // }

  render() {
    return (
      <div>
        <GoogleLogin
          clientId="212175657739-70o4dkki5481hs0hdlkmkor20ugn7sh0.apps.googleusercontent.com"
          buttonText="Continue with Google"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy="single_host_origin"
        />
      </div>
    );
  }
}

export default SignUp;
