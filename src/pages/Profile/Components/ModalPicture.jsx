import React from 'react';
import { Modal, Row, Col, Label, Button, Input } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import ReactCrop from 'react-image-crop';
import { StyledDropZone } from 'react-drop-zone'
import 'react-drop-zone/dist/styles.css'
import '../../index.css'

let styleIcon = {
    fontSize: "40px",
    color: "black",
    padding: "10px 10px 10px 0px",
    boxSizing: "unset !important",
}
let divStyle = {
    width: "100%",
    backgroundColor: "black",
    textAlign: "center"
}
let btnStyle = {
    width: "100px",
    height: "50px",
    backgroundColor: "#007ACC",
    borderRadius: "5%",
    zIndex: "-1",
    overflow: "hidden",
    border: "none",
    color: "white"
}

class ModalPicture extends React.Component {
    state = { 
        file: null,
        crop: {
            aspect: 1/1,
        }
    }
    handlePicture = (e) => {
        this.setState({
            file: e.target.files[0]
        })
    }

    onCropChange = (crop) => {
        console.log(crop)
        this.setState({crop: crop})
        console.log(this.state)
    }

    uploadPucture=async()=> {
        var formData = new FormData();
        console.log(this.state.file)
        formData.append("profile", this.state.file)
        try{
            let response = await fetch("http://localhost:7000/profiles/:username/picture",{
                method: "POST",
                body: formData
                
            })
            let result = await response.json();
        } catch(err) {
            console.log(err)
        }
        this.props.modalOpen()
    }

    render() { 
        const {imgSrc} = this.state
        return (
            <div>
                 <Modal isOpen={this.props.open}>
                    <Row>
                        <Col md="10">
                            <div style={{fontSize: "14px", padding: "10px 10px 10px 20px",color: "gray"}}>Edit photo</div>
                        </Col>
                        <Col md="2">
                            <FontAwesomeIcon style={styleIcon} onClick={this.props.modalOpen} icon={faTimes} />
                        </Col>
                        <Col md="12">
                            <div style={divStyle}>
                                {/* <img width="350px" src={this.props.profile.image} alt=""/> */}
                               {this.state.file ? <ReactCrop width="350px" src={imgSrc} alt="smthng" crop={this.state.crop} onChange={this.onCropChange} /> : <ReactCrop width="350px" alt="smthng" src={this.props.profile.image} crop={this.state.crop} onChange={this.onCropChange} />} 
                            </div>
                        </Col>
                        <Col md="12" className="p-4" style={{textAlign: "center"}}>
                            <div>
                                <StyledDropZone onDrop={(file, text) => console.log(file, text)} />
                            </div>
                            <div>
                            <Label style={btnStyle}>
                                Upload your pic
                                <Input style={{display: "none"}} onChange={this.handlePicture} type="file" name="file" id="exampleFile" />
                            </Label>
                            </div>
                            <div>
                            <Button style={{backgroundColor:"white", border: "1px solid #007ACC", color: "#007ACC", width: "100px"}} onClick={this.uploadPucture}>Upload</Button>
                            </div>
                        </Col>
                    </Row>
                </Modal>
            </div>
         );
    }
}
 
export default ModalPicture;