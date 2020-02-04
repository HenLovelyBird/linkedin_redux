import React from 'react';
import {Modal} from 'reactstrap';
import UpdateForm from './UpdateForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import '../index.css'
let styleIcon = {
    position: "absolute",
    right: "10px",
    fontSize: "50px",
    color: "black",
    padding: "10px 10px 10px 0px",
    boxSizing: "unset !important",
}


class ProfileModal extends React.Component {
    state = {
        modalOpen: true
    }
    render() {
        console.log(this.props)
        return (
            <>
            {this.state.modalOpen && 
            <Modal isOpen={this.props.open} toclose={this.props.close}> 
            <div>
                <div className="edit-profile-text">Edit Profile</div>
                <FontAwesomeIcon style={styleIcon} onClick={this.props.setmodal} icon={faTimes} />
            </div>
            <UpdateForm closeModal={this.props.setmodal} profileInfo={this.props.profile} />
          </Modal>}
            </>
        );
    }
}


export default ProfileModal;