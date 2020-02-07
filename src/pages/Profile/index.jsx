import React from "react";
import { Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import "../../index.css"s

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
        return (<div>
            <Container fluid id="profilecontainer">
                <div>
                    {this.state.profile && (
                <div>
            <Row>
                <div className="col my-5" fluid>
                    <img 
                    onClick={this.setModal}
                    src="https://picsum.photos/200"
                    alt="profile pic"
                    id="profilepic"
                    />
                 </div>

          {this.state.modalOpen && <ModalPicture profile={this.props.profile} 
          open={this.state.modalOpen} modalOpen={this.setModal}/>}

          <div className="col">
            <ProfileNav profileInfo={this.props.profile}/>
          </div>
          <div className="col">
            <h2 id="profname">
              {this.props.profile.firstname} {this.props.profile.surname}
            </h2>
            <h6 id="profarea">{this.props.profile.area} </h6>
            <h6 id="proftitle">{this.props.profile.title} </h6>
          </div>
        </Row>
              </div>
            )}
          </div>
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
      </Container>          
    </div>)
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
