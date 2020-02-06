import React from "react";
import ProfileHeader from "./ProfileComponents/ProfileHeader";
import AboutUs from "./ProfileComponents/AboutUs";
import ProfileModal from "./ProfileModal";
import { Container } from "reactstrap";
import BottomProfile from "./ProfileComponents/BottomProfile";
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
    return (<>
        <Container fluid id="profilecontainer">
          <div>
            {this.state.profile && (
              <div>
                <ProfileHeader profile={this.state.profile} />
              </div>
            )}

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

          <BottomProfile />
          </div>
        </Container>

{/* Bio Section */}
        {this.state.profile.bio ? (
          <>
            <Container flex className="aboutuscontainer">
              <AboutUs profileBio={this.state.profile.bio} />
            </Container>
          </>
        ) : (
          <>
            <div>Bio empty!</div>
          </>
        )}

        <Container flex className="experiencecontainer">

{/* Experience Section */}
          <Experience />
        </Container>
      
        </>);

  }
    componentDidUpdate = async(prevProps, prevState) => {
        // if this.state.profile.image 
        // this.fetchingNewPic()
    }
    
    // fetchingNewPic = async() => {
    //     let username = "user16";
    //     let password = "c9WEUxMS294hN6fF";
    //     let token = btoa(username + ":" + password);
    //     let response = await fetch(
    //       "https://strive-school-testing-apis.herokuapp.com/api/profile/me",{
    //         method: "GET",
    //         headers: {
    //           Authorization: "Basic " + token
    //         }
    //       }
    //     );
    //     let prof = await response.json();
    //     this.setState({
    //       profile: prof
    //     });
    // }

  componentDidMount = async () => {
    // let username = "user16";
    // let password = "c9WEUxMS294hN6fF";
    // let token = btoa(username + ":" + password);
    //let user = localStorage.getItem('username')
    // let user =  "jeff"
    let response = await fetch(
      "https://linkedinmockup.herokuapp.com/profiles/",{
        // username/".concat(user)
        method: "GET",
        // headers: {
        //   Authorization: "Basic " + token
        // }
      }
    );
    let prof = await response.json();
    console.log(prof);
    this.setState({
      profile: prof
    });
  }
}



export default Profile;
