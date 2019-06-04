import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../sidebar/sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import { Progress } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
// import config from "../../../../config/firebase"
import firebase from "firebase/app";
import FileUploader from "react-firebase-file-uploader";
require("firebase/storage");
class DashboardGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      loaded: 0
    };
  }
  componentWillMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.replace("/login");
    }
  }

  // onChangeHandler = event => {
  //     var files = event.target.files
  //     if (this.maxSelectFile(event) && this.checkMimeType(event) && this.checkMimeType(event)) {
  //         // if return true allow to setState
  //         this.setState({
  //             selectedFile: files
  //         })
  //     }
  // }
  // onClickHandler = () => {
  //     const data = new FormData()
  //     for (var x = 0; x < this.state.selectedFile.length; x++) {
  //         data.append('file', this.state.selectedFile[x])
  //     }

  //     axios.post("http://localhost:6600/upload", data, {
  //         onUploadProgress: ProgressEvent => {
  //             this.setState({
  //                 loaded: (ProgressEvent.loaded / ProgressEvent.total * 100),
  //             })
  //         },
  //     })

  //     .then(res => {
  //         toast.success('upload success')
  //     })
  //     .catch(err => {
  //         toast.error('upload fail')
  //     })

  // }
  // maxSelectFile = (event) => {
  //     let files = event.target.files // create file object
  //     if (files.length > 5) {
  //         const msg = 'Only 5 images can be uploaded at a time'
  //         event.target.value = null // discard selected file
  //         console.log(msg)
  //         return false;

  //     }
  //     return true;

  // }

  // checkMimeType=(event)=>{

  //     let files = event.target.files
  //     let err = [] // create empty array
  //     const types = ['image/png', 'image/jpeg', 'image/jpg']
  //     for(var x = 0; x<files.length; x++) {
  //         if (types.every(type => files[x].type !== type)) {
  //         err[x] = files[x].type+' is not a supported format\n';
  //        // assign message to array
  //       }
  //     };
  //     for(var z = 0; z<err.length; z++) { // loop create toast massage
  //         event.target.value = null
  //         toast.error(err[z])
  //     }
  //    return true;
  // }
  // checkFileSize=(event)=>{
  //     let files = event.target.files
  //     let size = 2000000
  //     let err = [];
  //     for(var x = 0; x<files.length; x++) {
  //     if (files[x].size > size) {
  //      err[x] = files[x].type+'is too large, please pick a smaller file\n';
  //    }
  //   };
  //   for(var z = 0; z<err.length; z++) {
  //    toast.error(err[z])
  //    event.target.value = null
  //   }
  //   return true;
  //   }

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    toast.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({
      avatar: filename,
      progress: 100,
      isUploading: false,
      progress: (ProgressEvent.progress / ProgressEvent.total) * 100
    });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => {
        axios.post("/firebaseUploads", {
          url: url
        });
        toast.success("upload success");
      })
      .catch(err => {
        toast.error("upload fail");
      });
  };

  render() {
    return (
      <div className="main_section2">
        <Sidebar />
        <div className="main_section">
          <DashboardHeader />
          <h1 className="dash">Gallery</h1>
          <div className="design3" />

          <div className="UploadGallery">
            <div class="form-group files">
              {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
              <FileUploader
                accept="image/*"
                name="avatar"
                filename={Date.now()}
                storageRef={firebase.storage().ref("images")}
                onUploadStart={this.handleUploadStart}
                onUploadError={this.handleUploadError}
                onUploadSuccess={this.handleUploadSuccess}
                onProgress={this.handleProgress}
              />
              {/* <label>Upload the Images</label> */}
              {/* <input type="file" name="myImage" multiple accept="image/*" onChange={this.onChangeHandler} /> */}
              <Progress max="100" color="success" value={this.state.progress}>
                {Math.round(this.state.progress, 2)}%
              </Progress>
              {/* <br></br> */}
              {/* <button type="button" className="btn" onClick={this.onClickHandler}>Upload a file</button> */}
            </div>
            <div class="form-group">
              <ToastContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    ...state
  };
};
export default connect(mapStateToProps)(DashboardGallery);
