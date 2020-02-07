import React from 'react';
import { Container, Toast, ToastHeader, ToastBody, Row } from 'reactstrap';
import { FaPencilAlt, FaCameraRetro, FaThumbsUp } from "react-icons/fa";
import NewsModel from './NewsModel';
import NewsFeedBox from './NewsFeedBox';
import NewsPictureModel from './NewsPictureModel';
import { connect } from "react-redux";

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => ({
    loadNewsfeed: (news) => dispatch({ type: "LOAD_NEWSFEED", payload: news}),
}); 

let Toaststyle = {
    width: "900px",
    height: "250px"
}

let camera = {
    width: "50px",
}

let pencil = {
    width: "150px",
    size: "30"
}

class Newsfeed extends React.Component {
    state = {
    //     Newsfeed: [],
        modalOpen: false,
        // modalOpenPicture: false,
        dropdownOpen: false,
    }

    setModal = (event) => {
        event.preventDefault();

        if (this.state.modalOpen === true) {
            this.setState({
                modalOpen: false
            })
        } else if (this.state.modalOpen === false) {
            this.setState({
                modalOpen: true,
            })
        }
    }

    // setModalPicture = (event) => {
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
    componentDidMount = async () => {
        //  let username = "user21"
        //  let password = "2ruxa4MRJdUgg6cz"
        //  let token = btoa(username + ":" + password)
        let response = await fetch("https://linkedinmockup.herokuapp.com/posts/")
        let news = await response.json()
        console.log(news);
        this.props.loadNewsfeed(news)
        // this.setState({
        //     Newsfeed: this.props.Newsfeed()
        //     // Newsfeed: news.posts.reverse()

       
        // // let response = await fetch("http://localhost:7000/posts/")
        // // console.log(response)
        // // let news = await response.json()
        // // console.log(news);
        // // this.setState({
        // //     Newsfeed: news.posts

        // })
    };
    render() {
        console.log(this.state);
        return (
            <>
                <Container flex id="newsfeed-toast">
                    <div className="p-4 bg-info my-2 fluid">

                        <div>{this.state.modalOpen && <NewsModel
                            setmodal={this.setModal} open={this.state.modalOpen} />}
                        </div>
                        <div>{this.state.modalOpenPicture && <NewsPictureModel
                            setModalPicture={this.setModalPicture} open={this.state.modalOpenPicture} />}
                        </div>
                        <Toast style={{maxWidth: '100%'}}>
                            <ToastHeader>
                                Click on the Pencil to Post Something!
                                <div className="mx-5 float-right">
                                    <FaPencilAlt size={15} 
                                    style={pencil} 
                                    style={{position: "float-right"}}
                                    onClick={this.setModal} />
                                </div>
                            </ToastHeader>
                            {/* <ToastBody>
                                Write a Text
                         </ToastBody> */}
                        </Toast>
                    </div>
                    <Row> {this.props.newsfeed.news && this.props.newsfeed.news.map((news, index) =>
                        <NewsFeedBox newsData={news} key={index} postId={news._id}/>
                    )}
               
                    </Row>
                </Container>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Newsfeed);