import React, { Component } from 'react';
import {Input , Modal, ModalBody, ModalHeader, ModalFooter, Button } from 'reactstrap';
//import { request } from 'http';


class NewsPictureModel extends Component {
    state = {
        text: '',
        selectedFile: null,
        modalOpenPicture: true,
        isUpload: false
    
    }
    handleFile(e){
          this.setState({selectedFile: e.target.files[0]})

    }
    fileUpload = () =>{
    let username = "user21"
        let password = "2ruxa4MRJdUgg6cz"
        let token = btoa(username + ":" + password)
        const url= "http://localhost:7000posts/"
        const body =new FormData();
        body.append('post',this.state.selectedFile)
        const request = new XMLHttpRequest();
        request.open("POST",url);
        // request.setRequestHeader( "Authorization", "Basic " + token )
        request.send(body)
        this.setState({isPost: true})
      }

  //   setModalPicture = (event) => {
  //     event.preventDefault();

  //     if (this.state.modalOpenPicture === true) {
  //         this.setState({
  //             modalOpenPicture: false
  //         })
  //     } else if (this.state.modalOpenPicture === false) {
  //         this.setState({
  //             modalOpenPicture: true
  //         })
  //     }
  // }
        render(){
            return this.state.isUpload === false? (
              <>
                {this.state.modalOpenPicture &&  <>
                <Modal isOpen={this.props.open} toclose={this.props.close} >
                  <ModalHeader color="blue">Upload Picture</ModalHeader>
                  <ModalBody>
                  <Input type="file" name="file" onChange={(e) => this.handleFile(e)}/>
                 </ModalBody>
                  <ModalFooter>
                 <Button onClick={this.setModalPicture} color="primary">Close</Button>
                 <Button onClick={this.fileUpload} color="primary">Upload</Button>
                 
                    {/*<Button  onClick={this.post} color="primary">Post</Button>*/}
                  </ModalFooter>
                </Modal>
                </>}
                </>
            ): ('');
          }
        }
export default NewsPictureModel;