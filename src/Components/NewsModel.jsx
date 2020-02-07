  import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { connectAdvanced } from 'react-redux';

class  NewsModel extends React.Component {
  intervalId;
    state = {
      modalOpen: true,
      setModel: false,
      text: '',
      isPost: false,
      // We are doing this to make the "POST" work autonmatically without refreshing the page

    }
  // setModal = () => this.setState({ modalOpen = !this.state.modalOpen})

      setModal = () => {
      if(this.state.modalOpen === true){
        this.setState({
              modalOpen: false
          })
      } else if (this.state.modalOpen === false){
          this.setState({
          modalOpen: true
          })
      }
  }
  newPost = async() => {
    let obj = {
      text: this.state.text
    }
    if(this.state.text.length > 2){
      let response = await fetch(
        "https://linkedinmockup.herokuapp.com/posts/",{
          method: "POST",
          body: JSON.stringify(obj),
        }
      )
      console.log(response)
      this.setState({isPost: true})
      return response
    }
  }
  render(){
    return this.state.isPost === false? ( 
        <Modal isOpen={this.props.open} toclose={this.props.close} >
          <ModalHeader color="blue">Enter Text</ModalHeader>
          <ModalBody>
          Your Text
          <Input type="text" name="text" onChange={(data) =>{this.setState({ text: data.target.value }) }} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={!this.state.modalOpen} color="primary">Close</Button>
            <Button  onClick={this.newPost} color="primary">Post</Button>
          </ModalFooter>
        </Modal>
        ): ("");
 }
}
export default NewsModel;

