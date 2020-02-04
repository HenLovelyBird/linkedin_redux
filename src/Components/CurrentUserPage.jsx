import React from 'react';
import Loader from 'react-loader-spinner';
import CurrentProfileHeader from './CurrentProfileHeader'
import CurrentExpirience from './CurrentExpirience'
import {Row, Col} from'reactstrap'
import AllUsersList from './AllUsersList';

let loaderStyle = {
    position: "fixed",
    left: "40%",
    top: "40%"
}
let mainBoxStyle = {
    border: "0.5px solid gray",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    padding: "0px",
    marginLeft: "35px",
    backgroundColor: "white"
} 
let h3Style = {
    fontSize: "26px",
}

class CurrentUserPage extends React.Component {
    state = { 
        loading: true,
        profile: '',
        expirience: '',
        users: '',
    }
    render() { 
        return ( 
            <Row>
                <Col md="7 mt-3">
                {this.state.loading ? 
                    <><Loader color="#007ACC" height={40} width={40} type="TailSpin" style={loaderStyle} /> </> : 
                    <div style={mainBoxStyle}> <CurrentProfileHeader userData={this.state.profile} /> </div>
                }
                {this.state.loading ? 
                    <><Loader color="#007ACC" height={40} width={40} type="TailSpin" style={loaderStyle} /> </> :  
                    this.state.expirience && <div className="mt-3 px-5 py-4" style={mainBoxStyle}> <h3 style={h3Style}>Experience</h3> 
                    {this.state.expirience
                    .map((u,i) => ( <CurrentExpirience usExpData={u} key={i} />))}</div>
                }
                </Col>
                <Col md="5 mt-3">
                    {this.state.users && <div className="p-3">{this.state.users.map((u,i)=>(<AllUsersList user={u} key={i} />))}</div>}
                </Col>
            </Row>
         );
    }
    componentDidMount = () => {
        this.fetchingCurrentUser()
        this.fetchingExpirience()
        this.fetchingUsers()
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.match.params.userId !== this.props.match.params.userId){
            this.fetchingCurrentUser()
            this.fetchingExpirience()
        }
    }

    fetchingExpirience = async() => {
        this.setState({
            loading: true
        })
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        let response = await fetch("http://localhost:7000/experiences/profile/" + this.props.match.params.username ,  {
            method: "GET",
            // headers: {
            //     "Authorization": "Basic " + token
      
            // }
        })
        let prof = await response.json()

        setTimeout(() => {
            this.setState({
                expirience: prof,
                loading: false
            })
        }, 1500)
    }

    fetchingUsers = async() => {
        this.setState({
            loading: true
        })
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        let response = await fetch("http://localhost:7000/profile/", {
            method: "GET",
            // headers: {
            //     "authorization" : "Basic " + token
            // }
        })
        let usersData = await response.json()
        this.setState({
            loading: false,
            users: usersData
        })
    }

    fetchingCurrentUser = async() => {
        this.setState({
            loading: true
        })
        let username = "user16"
        let password = "c9WEUxMS294hN6fF"
        let token = btoa(username + ":" + password)
        const user = "heni"// this.props.match.params.userId
        let response = await fetch("http://localhost:7000/profile/" + user , {
            method: "GET",
            headers: {
                "Authorization": "Basic " + token
      
            }
        })
        let prof = await response.json()
        console.log(prof);
        setTimeout(() => {
            this.setState({
                profile: prof,
                loading: false
            })
        }, 1500)
    }
}
 
export default CurrentUserPage;