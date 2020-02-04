import React from "react";
import { Container, Row, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import ProfileModal from '../ProfileModal';

class ProfileNav extends React.Component {
  state= {
    dropdownOpen: false,
    profile: {},
    // modalOpen: false,
}
// setModal = () => {
//   console.log("hi");
//   if(this.state.modalOpen === true){
//       this.setState({
//           modalOpen: false
//       })
//   } else if (this.state.modalOpen === false){
//       this.setState({
//           modalOpen: true
//       })
//   }
// }
  render() {
    return (<>
    <Container fluid className="btngroup">
      <Row>
        <div className="col"><ButtonDropdown isOpen={this.state.dropdownOpen} >
          <DropdownToggle onClick={() => this.setState({ dropdownOpen: !this.state.dropdownOpen})} 
          caret className="dropdownbtns btn-primary">Add Profile Section</DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Intro</DropdownItem>
            <DropdownItem disabled>About</DropdownItem>
            <DropdownItem>Background</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Skills</DropdownItem>
            <DropdownItem>Accomplishments</DropdownItem>
            <DropdownItem>Additional information</DropdownItem>
            <DropdownItem>Supported languages</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown></div>
        
        <div className="col"><Button className="btn btn-primary" id="morebtn">More...</Button></div>

      
            <div>{this.state.modalOpen && <ProfileModal 
                setmodal={this.setModal} profile={this.props.profileInfo} open={this.state.modalOpen} />}</div> 
           {/* <FontAwesomeIcon
            onClick={() => this.setState({ modalOpen: !this.state.modalOpen})}
            className="fapencilprofilenavtoeditform"
            icon={faPencilAlt}
          /> */}

        </Row>
       </Container>
    </>);
  }
}

export default ProfileNav;
