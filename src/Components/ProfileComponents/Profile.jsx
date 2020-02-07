import React from "react";
import ProfileHeader from "./ProfileHeader";
import AboutUs from "./AboutUs";
import ProfileModal from "./ProfileModal";
import { Container } from "reactstrap";
import BottomProfile from "./BottomProfile";
import Experience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";


class Profile extends React.Component {
  state = {
    profile: {},
    modalOpen: false,
    dropdownOpen: false
  };
  setModal = () => {
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
    return (<div>
      <Container fluid id="profilecontainer">
          <div>
            {this.state.profile && (
              <div>
                <ProfileHeader profile={this.state.profile} />
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
      </div>);

  }
    // componentDidUpdate = async(prevProps, prevState) => {
    //     if this.state.profile.imageUrl 
    //     this.fetchingNewPic()
    // }
    
    // fetchingNewPic = async() => {
        // let username = "user16";
        // let password = "c9WEUxMS294hN6fF";
        // let token = btoa(username + ":" + password);
        // let response = await fetch(
        //   "https://picsum.photos/200",{
        //     method: "GET",
          //   headers: {
          //     Authorization: "Basic " + token
          //   }
          // }
    //     );
    //     let prof = await response.json();
    //     this.setState({
    //       profile: prof
    //     });
    // }

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
