import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Main from "./Main";
import Login from "./Login";
import NewLogin from "./NewLogin";

let divStyle = {
  position: "absolute",
  top: "28%",
  left: "32%"
  // border: "0.5px solid gray",
  // boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
  // backgroundColor: "white",
  // padding: "50px",
  // width: "500px",
  // height: "300px"
};

class App extends Component {
  state = {
    loggedIn: false,
    signup: false,
    currentuser: "",
    currentpass: ""
  };

  keepSignUP = () => {
    this.setState({
      signup: true
    });
  };

  componentDidMount = async () => {
    if (localStorage.getItem("username")) {
      const userNow = localStorage.getItem("username");

      let response = await `http://localhost:7000/profiles/username/${userNow}`;

      response
        ? this.setState({
            loggedIn: true,
            currentuser: localStorage.getItem("username"),
            currentpass: localStorage.getItem("password")
          })
        : this.setState({ loggedIn: false });
    } else {
      this.setState({ loggedIn: false });
    }
  };

  updateState = () => {
    this.setState({
      signup: false
    });
  };

  //  getCredentials = async (e) => {
  //     e.preventDefault();
  //     let username = document.querySelector("#username").value
  //     let password = document.querySelector("#password").value
  //     let response = await GetAPI(username, password)
  //     localStorage.setItem('username', username)
  //     localStorage.setItem('password', password)
  //     response ? this.setState({ logged: true }) : this.setState({ wrongPass: true })

  //   }

  handleLogin = (user, pass) => {
    this.setState({
      loggedIn: !this.state.loggedIn,
      currentuser: user,
      currentpass: pass
    });

    localStorage.setItem("username", this.state.currentuser);
    localStorage.setItem("password", this.state.currentpass);
  };


  logout = () => {
    this.setState({ loggedIn: false })
    localStorage.setItem('username', undefined)
    localStorage.setItem('password', undefined)
  }


  render() {
    return (
      <Container fluid className="px-0">
        {this.state.loggedIn ? (
          <Main logout={this.logout}/>
        ) : (
          <>
            <Row className="ml-0">
              <Col>
                <button
                  type="button"
                  className="btn btn-primary "
                  onClick={() => this.setState({ signup: true })}
                >
                  Sign Up
                </button>
              </Col>
            </Row>
            <Row className="mt-3 ml-0">
              <Col>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => this.setState({ signup: false })}
                >
                  Login
                </button>
              </Col>
            </Row>
          </>
        )}

        {this.state.signup && (
          <div className="container col-7">
            <NewLogin
              keepsignup={this.keepSignUP}
              updateState={this.updateState}
            />
          </div>
        )}
        {!this.state.signup && !this.state.loggedIn && (
          <Login handleLogin={this.handleLogin} history={this.props.history} />
        )}
      </Container>
    );
  }
}

export default App;
