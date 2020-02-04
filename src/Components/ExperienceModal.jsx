import React from 'react';
import {Modal, UpdateForm} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ExperienceUpdateForm from './ExperienceUpdateForm';

class ExperienceModal extends React.Component {
    state = {
        modalOpen: true,
        experiences: ""
    }
    render() {
        console.log("Testing Experience", this.props.experience);
        return (
            <>
            {this.state.modalOpen && 
            <Modal isOpen={this.props.open} toclose={this.props.close}> 
            <div>
                <div className="edit-experience-text">Add Experiences</div>
                <FontAwesomeIcon onClick={()=>this.props.setmodal(this.props.experience)} icon={faTimes} />
            </div>
                <ExperienceUpdateForm
                  closeModal={this.props.setmodal}
                 
                />
          </Modal>}
            </>
        );
    }
}

export default ExperienceModal;