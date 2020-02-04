import React from 'react';
import { Toast, ToastBody, ToastHeader, Col, Container, Row, Input, Button } from 'reactstrap';
import {  FaBars, FaThumbsUp, FaRegThumbsUp } from "react-icons/fa";
import { connect } from "react-redux";

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    comment: () => dispatch({ type: "LOAD_COMMENTS"}),
}); 

let Toaststyle ={
    width : "900px",
    height : "250px"
}


class NewsFeedBox extends React.Component {
    state= { 
        isDelete: false,
        liked: false,
        count:0,
    //     comment: {username: "admin"}
    };

countUpdate=async()=>{
    try {
        const responce = await fetch("http://localhost:7000/likes/".concat(this.props.newsData._id))
        if(responce.ok){
            const totalLikes = await responce.json()
            this.setState({
                count: totalLikes.LikesCount
            })

            
        }
    } catch (error) {
        console.log(error)
    }

}

componentDidMount= async ()=>{
    await this.countUpdate()
  

};



    like = async ()=>{
        try {
            const responce = await fetch(`http://localhost:7000/likes/addlike/${this.props.newsData._id}/test 4`,{
                method: "POST"
            })
            if(responce.ok){
                const totalLikes = await responce.json()
                this.setState({
                    
                    liked:true
                })
                await this.countUpdate()
            }
        } catch (error) {
            console.log(error)
        }
    
    }

    unlike = async  ()=>{
        try {
            const responce = await fetch(`http://localhost:7000/likes/deletelike/${this.props.newsData._id}/test 4`,{
                method: "DELETE"
            })
            if(responce.ok){
                const totalLikes = await responce.json()
                this.setState({
                    
                    liked:false
                })

                await this.countUpdate()
            }
        } catch (error) {
            console.log(error)
        } 
      } 

        
    // we are doing this to make the delete work autonmatically withouy refreshing the page
    delete = async()=>{
        let username = "user21";
        let password = "2ruxa4MRJdUgg6cz";
        let token = btoa(username + ":" + password);
        let response = await fetch("http://localhost:7000/posts/" + this.props.newsData._id,{
              method: "DELETE"
          }) 
          console.log(response)
          this.setState({isDelete: true})
          return response
         
    }

    submit = async ()=>{
        if (this.props.comment._id) {
            await fetch("http://localhost:7000/comments/:postId/:commentId" + this.props.postId, {
                method: "PUT",
                body: JSON.stringify(this.comment)
            }).then(res => {
                console.log("edit", res);
                comment: this.props.comment()
                this.props.refresh();
            });

        } else {
            await fetch("http://localhost:7000/comments/" + this.props.postId, {
                method: "POST",
                body: JSON.stringify(this.comment)
            }).then(res => {
                console.log("Your comment has been submitted", res);
                comment: this.props.comment()
                this.props.refresh()
            });
        }
        this.setState({_id: undefined});
        this.toggle();
    };
    

//     postComment = async()=>{
//         get id of post
//         map
//         let response = await fetch("http://localhost:7000/comments/:postId/",{
//             method: "POST"
//         })
//         if (response )
//         console.log(response)
//         this.setState({postComment: true})
//         return response
//     }
// get id of the post

    // uploadPucture=async()=> {
    //     var formData = new FormData();
    //     console.log(this.state.file)
    //     formData.append("profile", this.state.file)
    //     try{
    //         let response = await fetch("http://localhost:7000/profiles/:username/picture",{
    //             method: "POST",
    //             body: formData
                
    //         })
    //         let result = await response.json();
    //     } catch(err) {
    //         console.log(err)
    //     }
    //     this.props.modalOpen()
    // }

    render(){
        
        console.log(this.props)
        return this.state.isDelete === false? ( 
            <Col md="6">
                 <Toast style={Toaststyle} style={{marginTop: '20px'}}>
                <div className="mx-5 float-right" > <FaBars />
                        </div>
                    <ToastHeader>
                        <div>{this.props.newsData.username}</div>
                    </ToastHeader>
                    <ToastBody>{this.props.newsData.text}
                    </ToastBody>
                    <button style={{marginLeft: "5"}}onClick={this.delete}>Delete</button>
                    
                    <Toast><ToastHeader><ToastBody>Comment:<Input type="textarea" 
                    onChange={this.updateForm} 
                    name="comment" 
                    id="comment"></Input > <Button onClick={this.submit} type="submit"> submit</Button></ToastBody></ToastHeader></Toast>
                
                </Toast>
                {

                  this.state.liked===false ? <FaRegThumbsUp size={25} onClick={this.like}/> : <FaThumbsUp size={25} onClick={this.unlike}/>

                }
                {this.state.count<=1 ? <span>{this.state.count} like</span> : <span>{this.state.count} likes</span>}
                
            </Col>

        ): (" ");
 
 
 
    }



    // we are doing this to make the delete work autonmatically withouy refreshing the page
    delete = async()=>{
        let username = "user21";
        let password = "2ruxa4MRJdUgg6cz";
        let token = btoa(username + ":" + password);
        let response = await fetch("https://striveschool.herokuapp.com/api/posts/" + this.props.newsData._id,{
              method: "DELETE",
              headers: {
                  "authorization" : "Basic " + token,
              }
          }) 
          console.log(response)
          this.setState({isDelete: true})
          return response
         
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsFeedBox);