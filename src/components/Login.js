import React, { useCallback, useContext } from "react"
import { withRouter, Redirect } from "react-router"
import app from "./base"
import { AuthContext } from "./Auth"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value)
        history.push("/")
      } catch (error) {
        alert(error)
      }
    },
    [history]
  )

  const { currentUser } = useContext(AuthContext)

  if (currentUser) {
    return <Redirect to="/" />
  }

  return (
    <div id="login">
        <h1 className="header">Senior Mania</h1>

        <div className="alert alert-warning" role="alert">
          <p>Senior Mania for the ClassName of 2019 is over :(</p>
          <p>With over 150 and 16 teams students registered, I am happy to have seen the best Senior Mania participation in all our school's history!</p>
          <p>For those curious how the site looks like, feel free to login using <b>grazwe19@bergen.org</b> as the email and <b>mitochondria123</b>. Don't worry about breaking anything, the database write permissions are all set to false!</p>
        </div>

        <form onSubmit={handleLogin}>
            <div className="form-group">
                <label className="text-muted" for="email">Email address</label>
                <input type="email" name="email" className="form-control" id="email" aria-describedby="emailHelp"/>
            </div>
            <div className="form-group">
                <label className="text-muted" for="password">Password</label>
                <input type="password" name="password" className="form-control" id="password" aria-describedby="emailHelp"/>
            </div>
            <button id="btnLogin" type="submit" className="btn btn-primary">Login</button>
        </form>
    </div>
  );
};

export default withRouter(Login)