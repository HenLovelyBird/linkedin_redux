import React from "react";
import { Container, Button, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ExperienceModal from "./ExperienceModal.jsx";
import ExperiencesPosted from "./ExperiencesPosted";
import ExperienceUpdateForm from "./ExperienceUpdateForm.jsx";
import { connect } from "react-redux";

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    profileComponent: () => dispatch({ type: "LOAD_EXPERIENCES"}),
}); 

class Experience extends React.Component {
  state = {
    experiences: "",
    modalOpen: false
  };


  setModal = (experience) => {
    if (this.state.modalOpen === true) {
      this.setState({
        modalOpen: false
      });
    } else if (this.state.modalOpen === false) {
      this.setState({
        modalOpen: true
 
      });
    }
  };

  render() {
    return (
      <>
        <Container style={{ height: "75vh" }}>
          <Row>
            <Col className="mt-3">
              <h3>Experience</h3>
              </Col>
              <Col className="mt-3">
              <FontAwesomeIcon
                onClick={this.setModal}
                id="editexperience"
                icon={faPencilAlt}
              />
              {this.state.modalOpen && (
                <ExperienceModal
                  setmodal={this.setModal}
                  open={this.state.modalOpen}
                />
              )}
              
            </Col>
          </Row>

          <Row flex h-100>
            <Col className="md-12 pt-2">
              {this.state.experiences &&
                this.state.experiences.map((experience, index) => (
                  <ExperiencesPosted allExp={experience} key={index} />
                  ))}

            </Col>
          </Row>

        
        </Container>
      </>
    );
  }

  componentDidMount = async () => {
    // let username = user16;
    // let password = "c9WEUxMS294hN6fF";
    // let token = btoa(username + ":" + password);
    let response = await fetch(
      "https://linkedinmockup.herokuapp.com/experiences/:username", {
        method: "GET",
      //   headers: {
      //     Authorization: "Basic " + token
      //   }
      // }
      }
    );
    let exp = await response.json();
    this.setState({
      experiences: exp
    });
  };
}

export default Experience;
