import React from 'react';
import {Container, Row, Col} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

class BottomProfile extends React.Component {
    state = {
        deleteDottedBox: false
    }
    setX = () => {
        if (this.state.deleteDottedBox === true) {
          this.setState({
            deleteDottedBox: false
          });
        } else if (this.state.deleteDottedBox === false) {
          this.setState({
            deleteDottedBox: true
          });
        }
      };

    render() {
        return (
            <Container className="dottedboxes">
                <Row>
                <Col id="dottedboxone" className="col-5 ml-5">
                <Col>
                    <FontAwesomeIcon   
                    onClick={this.setX}
                    className="closewindow"
                    icon={faWindowClose}
                    /></Col>
                    <wrap>
                    <h5 className="mt-2">Show recruiters you're open</h5><p>to job opportunities-you control who sees this</p>
                    </wrap>
                </Col>
                <br/>
                
                <Col id="dottedboxtwo" className="col-5 offset-1">
                    <Col>
                    <FontAwesomeIcon   
                    onClick={this.setX}
                    className="closewindow"
                    icon={faWindowClose}
                    /></Col>
                    <wrap>
                    <h5 className="mt-2">Showcase services</h5><p>you offer so you and your business can be found in search.</p>
                    </wrap>
                </Col>
                
                </Row>
            </Container>
            
        );
    }
}

export default BottomProfile;