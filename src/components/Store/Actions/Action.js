import * as types from "../Constants/Constants";
import axios from "axios";
import setAuthToken from "../../../setAuthToken";
import jwt_decode from "jwt-decode";

// cons = "http://localhost:6600";
export const onInputChange = e => {
  return {
    type: types.INPUT_CHANGE,
    payload: e.target.value
  };
};

export const handleSubmit = e => dispatch => {
  const mails = {
    name: e.name,
    email: e.email,
    subject: e.subject,
    message: e.message
  };
  axios
    .post(`/send`, mails)
    .then(res => {
      console.log("Data Send from actions");
    })
    .catch(err => {
      console.log("error", err);
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const handleSubmit2 = e => dispatch => {
  const Allmembers = {
    Member1_First_Name: e.Member1_First_Name,
    Member1_Last_Name: e.Member1_Last_Name,
    Member1_Email: e.Member1_Email,
    Member1_StudyYear: e.Member1_StudyYear,
    Member1_Faculty: e.Member1_Faculty,
    Member1_StudentIdNumber: e.Member1_StudentIdNumber,
    Member1_TelephoneNumber: e.Member1_TelephoneNumber,
    Member1_NameofStudyProgram: e.Member1_NameofStudyProgram,
    Member2_First_Name: e.Member2_First_Name,
    Member2_Last_Name: e.Member2_Last_Name,
    Member2_Email: e.Member2_Email,
    Member2_StudyYear: e.Member2_StudyYear,
    Member2_Faculty: e.Member2_Faculty,
    Member2_StudentIdNumber: e.Member2_StudentIdNumber,
    Member2_TelephoneNumber: e.Member2_TelephoneNumber,
    Member2_NameofStudyProgram: e.Member2_NameofStudyProgram,
    Member3_First_Name: e.Member3_First_Name,
    Member3_Last_Name: e.Member3_Last_Name,
    Member3_Email: e.Member3_Email,
    Member3_StudyYear: e.Member3_StudyYear,
    Member3_Faculty: e.Member3_Faculty,
    Member3_StudentIdNumber: e.Member3_StudentIdNumber,
    Member3_TelephoneNumber: e.Member3_TelephoneNumber,
    Member3_NameofStudyProgram: e.Member3_NameofStudyProgram
  };
  axios
    .post(`/Reg`, Allmembers)
    .then(res => {
      console.log("Data Send from actions");
    })
    .catch(error => {
      console.log("error", error);
    });
  dispatch({ type: types.SUBMIT, payload: e });
};

export const NewsSubmit = e => dispatch => {
  const Newsdata = {
    NewsTitle: e.NewsTitle,
    NewsText: e.NewsText,
    NewsDesc: e.NewsDesc,
    url: e.url
  };
  axios
    .post(`/api/News`, Newsdata)
    .then(res => {
      console.log("Data Send from actions");
    })
    .catch(error => {
      console.log("error", error);
    });
  dispatch({ type: types.SUBMIT, payload: e });
};

// export const  reset=() =>{
//     console.log("Reset function working")
//     return dispatch => dispatch({
//       type: types.RESET,
//     });
//   }

// export const registerUser = (user, history) => dispatch => {
//     axios.post(`/users/register`, user)
//         .then(res => history.push('/login'))
//         .catch(err => {
//             dispatch({
//                 type: types.GET_ERRORS,
//                 payload: err.response.data
//             });
//         });
// }

export const OnLogin = user => dispatch => {
  axios
    .post(`/users/login`, user)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.data
      });
    });
};

export const setCurrentUser = decoded => {
  return {
    type: types.SET_CURRENT_USER,
    payload: decoded
  };
};

export const logoutUser = history => dispatch => {
  localStorage.removeItem("jwtToken");
  setAuthToken(false);
  dispatch(setCurrentUser({}));
  history.push("/login");
};

// export function uploadSuccess({ data }) {
//     return {
//         type: types.UPLOAD_DCOUMENT_SUCCESS,
//         data,
//     }
// }

// export function uploadFail(error) {
//     return {
//         type: types.UPLOAD_DOCUMENT_FAIL,
//         error
//     }
// }

// export function uploadDocumentRequest({file,name}){
//     let data=new FormData();
//     data.append('file',document);
//     data.append('name',name);
//     return (dispatch)=>{
//         axios.post('/files',data)
//         .then(response=>dispatch(uploadSuccess(response)))
//         .catch(error=>dispatch(uploadFail(error)))
//     }
// }
