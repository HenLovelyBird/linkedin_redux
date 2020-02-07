import React from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "../../index.css"

class Profile extends Component {
    state = {  
        profile: {},
        modalOpen: false,
        dropdownOpen: false
    }

    setModal=()=> {
        this.setState({
          modalOpen: !this.state.modalOpen
        })
        console.log(this.state)
      }

    render() { 
        return (<>
{/* profile and profileheader */}
            <Container fluid id="profilecontainer">
                    {this.state.profile && (
            <Row>
                <div className="col my-5" fluid>
                    <img 
                    onClick={this.setModal}
                    src="https://picsum.photos/200"
                    alt="profile pic"
                    id="profilepic"
                    />
                 </div>
                 
{/* ModalPicure Component*/}
          {this.state.modalOpen && <ModalPicture profile={this.props.profile} 
          open={this.state.modalOpen} modalOpen={this.setModal}/>}
          
{/* ProfileNav */}
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
        </Row>
       </Container>
          
{/* ProfileModal      */}          
          <div>
              {this.state.modalOpen && (
                <ProfileModal
                  setmodal={this.setModal}
                  profile={this.state.profile}
                  open={this.state.modalOpen}
                />
              )}
          </div> 
              
            <FontAwesomeIcon
              onClick={this.setModal}
              className="fapenciltoeditform"
              icon={faPencilAlt}
            />
      
    </>)
    }

    componentDidMount = async () => {
        let response = await fetch(
          "https://linkedinmockup.herokuapp.com/profiles/5e2b0f3b27480c54f90d34c3",{
            method: "GET",
          }
        );
        let profile = await response.json();
        console.log(profile);
        this.setState({
          profiles: profile
        });
      }
    }

    
export default Profile;
