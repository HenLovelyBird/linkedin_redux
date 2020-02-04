import React, { Component } from 'react';
import { Col, Button, Form, FormGroup, Label, Input, FormText, FormFeedback, Alert, Container } from 'reactstrap';
class NewLogin extends Component {
  state = {
    user: "",
    password:"",
    firstname:"",
    surname:"",
    title:"",
    bio:"",
    area:"",
    email:"",
    available: undefined,
    loading: false,
    problem:false
  };



  handleSubmit =async (e)=>{
    e.preventDefault();

    let objectToCreate ={
    username: this.state.user,
    password:this.state.password,
    firstname:this.state.firstname,
    surname:this.state.surname,
    title:this.state.title,
    bio:this.state.bio,
    area:this.state.area,
    email:this.state.email
    }

    let URL =  "http://localhost:7000/profiles/"

    try {
      let response = await fetch(URL, {
          method: "POST",
          headers: {
             
              "Content-Type": "application/json"
          },
          body: JSON.stringify(objectToCreate)
      })
      if (response.ok) {
      
        this.props.updateState()
      }

      else{
          this.setState({
            problem: true
          })
      }
  } catch (error) {
      console.log(error);
  }




  }






  checkForID = async e => {
    e.preventDefault();
    let user = this.state.user;

    try {
      const responce = await fetch(
        `http://localhost:7000/profiles/username/${user}`
      );
      if (responce.ok) {
        const available = await responce.json();

        setTimeout(() => {
          this.setState({
            available: false,
            loading: false
          });
        }, 3000);
        this.props.keepsignup();

        this.setState({
          loading: true
        });
      } else {
        setTimeout(() => {
          this.setState({
            available: true
          });
        }, 1000);

        this.props.keepsignup();
      }
    } catch (error) {
      console.log(error);
    }
  };


 //


handleChange = (event) => {
  const input = event.target;
  const value = input.type === 'checkbox' ? input.checked : input.value;

  this.setState({ [input.name]: value });
};



 //



  render() {
    return (
      <>
  {this.state.problem && <div>
    <h2>
      There is a problem with creating the new account...refresh the page!
    </h2>
    </div>}


        {this.state.loading && (
          <Alert color="danger">Oh no! that name is already taken</Alert>
        )}

        {!this.state.available && (
          <Container>
            <Form onSubmit={this.checkForID}>
              <FormGroup>
                <Input
                  type="text"
                  name="username"
                  placeholder="check if the username is available"
                  onChange={val =>
                    this.setState({ user: val.currentTarget.value })
                  }
                  value={this.state.user}
                />
                 <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
               
                type="password"
                name="password"
                id="examplePassword"
                placeholder="choose a password"
                onChange={val =>
                  this.setState({ password: val.currentTarget.value })
                }
                value={this.state.password}
              />
            </FormGroup>
                <Button>submit</Button>
              </FormGroup>
            </Form>
          </Container>
        )}

        {this.state.available === true && (
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="exampleEmail">Username Chosen</Label>

              <Input valid type="text" name="username" value={this.state.user} />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">Password Chosen</Label>
              <Input
                valid
                type="password"
                name="password"
                value={this.state.password}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleText">Firstname</Label>
              <Input type="text" name="firstname" 
               onChange={this.handleChange}
              value={this.state.firstname}/>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Surname</Label>
              <Input type="text" name="surname" 
              onChange={this.handleChange}
              value={this.state.surname}/>
            </FormGroup>

            <FormGroup>
              <Label for="exampleText">Bio</Label>
              <Input
                type="textarea"
                name="bio"
                placeholder=" We want to get to know you...if you don't mind! "
                onChange={this.handleChange}
              value={this.state.bio}
              />
            </FormGroup>

            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" name="title" 
              onChange={this.handleChange}
              value={this.state.title}/>
            </FormGroup>

            <FormGroup>
              <Label for="exampleCity">Area</Label>
              <Input type="text" name="area" id="exampleCity"
              onChange={this.handleChange}
              value={this.state.area} />
            </FormGroup>

            <FormGroup>
              <Label for="exampleEmail">Email</Label>

              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
                onChange={this.handleChange}
              value={this.state.email}
              />
            </FormGroup>

         

            <FormGroup check>
              <Label check>
                <Input type="checkbox" required /> I agree to that we store this
                information for this linkedin mockup
              </Label>
            </FormGroup>
            <Button>Submit</Button>
          </Form>
        )}
      </>
    );
  }
}

export default NewLogin;