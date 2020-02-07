import React from 'react';
import { Form, FormGroup, Label, Input, Row, Col } from 'reactstrap';

import '../index.css'

class UpdateForm extends React.Component {
  state = {
    profile: undefined,
    firstname: "",
    surname: "",
    area: "",
    bio: "",
    username: "",
    title: "",
    email: ""
  };

//   updateObj = ev => {
//     let input = ev.target.value;
//     console.log("value", input);
//     let idInput = ev.target.id;
//     console.log("id", idInput);
//     this.state.profile[idInput] = input;
//     console.log(this.state);
//   };

  handleSubmit = async event => {
    event.preventDefault();
    const id = this.state.profile._id

    let objectForPut ={
       
        firstname: this.state.firstname,
      surname: this.state.surname,
      area: this.state.area,
      bio: this.state.bio,
      username: this.state.username,
      title: this.state.title,
      email: this.state.email
    }

    let response = await fetch("http://localhost:7000/profiles/".concat(id), {
      method: "PUT",
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(objectForPut )
    });
if(response.ok){
   
    let close = this.props.closeModal
    console.log(close)
    close()
}
    
   
  };

  render() {
    console.log(this.state);
    return (
      <div className="modal-div">
        <div className="flex md-4 mr-5">
          <img
            className="modal-bg"
            src="https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg"
            alt="linkedIn background"
          ></img>
        </div>
        <img
          src="https://picsum.photos/200"
          className="modal-img"
          alt="profile pic"
        />
        <Form className="update-form" onSubmit={this.handleSubmit}>
          <FormGroup>
            <Label for="examplePassword">Bio</Label>
            <Input
              type="text"
             
              name="bio"
             
              placeholder={this.props.profileInfo.bio}
              onChange={ev => this.setState({ bio: ev.target.value })}
              value={this.state.bio}
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleEmail">Email</Label>
            <Input
              type="email"
    
              name="email"
              id="email"
              placeholder={this.props.profileInfo.email}

              onChange={ev => this.setState({ email: ev.target.value })}
              value={this.state.email}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Area</Label>
            <Input
              type="text"
    
              name="password"
              id="area"
              placeholder={this.props.profileInfo.area}
              onChange={ev => this.setState({ area: ev.target.value })}
              value={this.state.area}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Title</Label>
            <Input
              type="text"
    
              name="password"
              id="title"
              placeholder={this.props.profileInfo.title}
               onChange={ev => this.setState({ title: ev.target.value })}
              value={this.state.title}
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">ImageUrl</Label>
            <Input
              type="text"
    
              name="password"
              id="image"
              placeholder={this.props.profileInfo.image}
            />
          </FormGroup>
          <Input
            id="submitBtn"
            type="submit"
            class="btn btn-success"
            value="SAVE"
          
          />
        </Form>
      </div>
    );
  }
  componentDidMount = async () => {
    this.setState({
      profile: this.props.profileInfo,
      firstname: this.props.profileInfo.firstname,
    surname: this.props.profileInfo.surname,
    area: this.props.profileInfo.area,
    bio: this.props.profileInfo.bio,
    username: this.props.profileInfo.username,
    title: this.props.profileInfo.title,
    email: this.props.profileInfo.email
    });
  };
}
 
export default UpdateForm;