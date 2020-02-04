import React, { Component } from 'react';
import {Alert} from 'reactstrap'

const ErrorMessage = () => {
        return ( 
            <Alert color="danger">
                <p>Ooops. Please check your login and password and try again later :)</p>  
            </Alert>
         );
}
 
export default ErrorMessage;