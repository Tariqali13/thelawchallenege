import * as types from "../Constants/Constants";

const initialState = {
    name: "",
    email:"",
    subject: "",
    message: "",
    Member1_First_Name: '',
    Member1_Last_Name: '',
    Member1_Email: "",
    Member1_StudyYear: '',
    Member1_Faculty: '',
    Member1_StudentIdNumber: '',
    Member1_TelephoneNumber: '',
    Member1_NameofStudyProgram: '',
    Member2_First_Name: '',
    Member2_Last_Name: '',
    Member2_Email: "",
    Member2_StudyYear: '',
    Member2_Faculty: '',
    Member2_StudentIdNumber: '',
    Member2_TelephoneNumber: '',
    Member2_NameofStudyProgram: '',
    Member3_First_Name: '',
    Member3_Last_Name: '',
    Member3_Email: "",
    Member3_StudyYear: '',
    Member3_Faculty: '',
    Member3_StudentIdNumber: '',
    Member3_TelephoneNumber: '',
    Member3_NameofStudyProgram: '',
    errors: {},
    url:'',
    value:"",
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.INPUT_CHANGE:
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case types.SUBMIT:
            console.log("action working", action.payload);
            return ({
                ...action.payload,
            })
            
        // case types.RESET:
        //     console.log("Reset reducer",initialState)
        //     return initialState
            

        default:
            return {
                state
            }
    }
}