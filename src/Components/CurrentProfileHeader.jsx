import React, { Component } from 'react';
import {Col} from 'reactstrap'
import '../index.css'
let divStyle = {
    backgroundImage: "url(https://miro.medium.com/max/1124/1*92adf06PCF91kCYu1nPLQg.jpeg",
    width: "100%",
    height: "200px"
}
let userImgStyle = {
    width: "200px",
    height: "200px",
    objectFit: "cover",
    borderRadius: "50%",
    border: "3px solid white",
    position: "relative",
    top: "-100px",
    left: "50px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
}

const CurrentProfileHeader = (props) => {
const userData = props.userData
    return ( 
        <>
            <div style={divStyle}></div>
            <h1>{JSON.stringify(props.userData)}</h1>
            {userData.image ? <img style={userImgStyle} src={userData.image} alt=""/> : <img style={userImgStyle} src="https://www.legalniewsieci.pl/!data/newsy/news_1982.jpg" /> }
            <div className="user-info-current-profile-header">
                <h4>{userData.firstname} {userData.surname}</h4>
                <p style={{margin: "5px 0px"}}>{userData.title}</p>
                <p style={{margin: "5px 0px"}}>{userData.area}</p>
            </div>
        </>
    );
}

export default CurrentProfileHeader;