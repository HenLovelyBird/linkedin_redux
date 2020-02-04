import React from "react";
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

class AboutUs extends React.Component {
  render() {
    return (
      <Container>
        <Row className="mt-3">
          <Col>
            <h3>Biography</h3>
          </Col>

          <Col>
            <FontAwesomeIcon
              onClick={this.setModal}
              className="fapencilbio"
              icon={faPencilAlt}
            />
          </Col>
        </Row>
        <Col className="mb-2">{this.props.profileBio}</Col>
      </Container>
    );
  }
}

export default AboutUs;
