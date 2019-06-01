import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { NewsSubmit } from '../../../Store/Actions/Action';
import Sidebar from '../sidebar/sidebar';
import DashboardHeader from '../DashboardHeader/DashboardHeader';
import { Progress } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from "../../../../config/firebase"
import firebase from "firebase/app";
import FileUploader from "react-firebase-file-uploader";
import axios from 'axios';
require("firebase/storage")
class DashboardNews extends Component {
    state = {
        username: "",
        avatar: "",
        isUploading: false,
        progress: 0,
        avatarURL: "",
        loaded: 0,
    }
    componentDidMount = () => {
        // console.log(this.props);
    };
    componentWillMount() {

        if (this.props.auth.isAuthenticated === false) {
            this.props.history.replace("/login")
        }
    }
    NewsSubmit = e => {
        e.preventDefault();
        this.props.changeState(this.state);
    };
    onInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleChangeUsername = event =>
        this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = progress => this.setState({ progress });
    handleUploadError = error => {
        this.setState({ isUploading: false });
        toast.error(error)
    };
    handleUploadSuccess = filename => {
        this.setState({ avatar: filename, progress: 100, isUploading: false, progress: (ProgressEvent.progress / ProgressEvent.total * 100), });
        firebase
            .storage()
            .ref("Newsimages")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({url:url})
                // axios.post("http://localhost:6600/firebaseUploads/newsImages", {
                //     url: url,

                // })
                toast.success('upload success')
            })
            .catch(err => {
                toast.error('upload fail')
            })
    };
    render() {
        return (
            <div className="main_section2">
                <Sidebar />
                <div className="main_section">
                    <DashboardHeader />
                    <h1 className="dash">News</h1>
                    <div className='design3'></div>

                    <br></br>
                    <Form onSubmit={this.NewsSubmit}>

                        <Form.Group controlId="formBasicText" >
                            <FileUploader
                                accept="image/*"
                                name="avatar"
                                filename={Date.now()}
                                storageRef={firebase.storage().ref("Newsimages")}
                                onUploadStart={this.handleUploadStart}
                                onUploadError={this.handleUploadError}
                                onUploadSuccess={this.handleUploadSuccess}
                                onProgress={this.handleProgress}
                            />
                            <Progress max="100" color="success" value={this.state.progress} >{Math.round(this.state.progress, 2)}%</Progress>
                        </Form.Group>
                        <Form.Group controlId="formBasicFile" className="newformwidth">
                            <Form.Control type="text" name="NewsTitle" placeholder="Enter Title" onChange={this.onInputChange} />

                        </Form.Group>

                        <Form.Group controlId="formBasicText" className="newformwidth">
                            <Form.Control as="textarea" rows="2" name="NewsText" placeholder="News" onChange={this.onInputChange} />
                        </Form.Group>


                        <Form.Group controlId="exampleForm.ControlTextarea1" className="newformwidth">
                            <Form.Control as="textarea" rows="5" name="NewsDesc" placeholder="Additional Info" onChange={this.onInputChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Upload
                            </Button>
                    </Form>;
                    <div class="form-group">
                            <ToastContainer />
                        </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ...state,
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeState: e => {
            dispatch(NewsSubmit(e))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DashboardNews);