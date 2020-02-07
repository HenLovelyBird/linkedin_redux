import React from "react";
import "../../index.css";
import ProfileNav from "./ProfileNav";
import { Row } from "reactstrap";
import ModalPicture from './ModalPicture'

class Profile extends React.Component {
  state = { 
    modalOpen: false
  }
  setModal=()=> {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
    console.log(this.state)
  }
  render() {
    return (
      <>
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
      </>
    );
  }

  componentDidUpdate
}

export default Profile;
