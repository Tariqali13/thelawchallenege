import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormGenerator from '../Common/FormGenerator';
import { handleSubmit2 } from '../Store/Actions/Action';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { validateAll } from 'indicative';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class RegisterForm extends Component {
    state = {
    
    }

    componentDidMount = () => {
        // console.log(this.props);
    };

    handleSubmit2 = e => {
        e.preventDefault();
        this.props.changeState(this.state);
        const data = this.state;
        const rules = {
            Member1_First_Name: "required|alpha|min:3|max:100",
            Member2_First_Name: "required|alpha|min:3|max:100",
            Member3_First_Name: "required|alpha|min:3|max:100",
            Member1_Last_Name: "required|alpha|min:3|max:100",
            Member2_Last_Name: "required|alpha|min:3|max:100",
            Member3_Last_Name: "required|alpha|min:3|max:100",
            Member1_Email:"required|email",
            Member2_Email:"required|email",
            Member3_Email:"required|email",
            Member1_StudyYear:"required|integer|max:10|min:3",
            Member2_StudyYear:"required|integer|max:10|min:3",
            Member3_StudyYear:"required|integer|max:10|min:3",
            Member1_Faculty:"required|string|min:3|max:100",
            Member2_Faculty:"required|string|min:3|max:100",
            Member3_Faculty:"required|string|min:3|max:100",
            Member1_StudentIdNumber:"required|alpha_numeric|min:3|max:20",
            Member2_StudentIdNumber:"required|alpha_numeric|min:3|max:20",
            Member3_StudentIdNumber:"required|alpha_numeric|min:3|max:20",
            Member1_TelephoneNumber:"required|integer|max:20|min:5",
            Member2_TelephoneNumber:"required|integer|max:20|min:5",
            Member3_TelephoneNumber:"required|integer|max:20|min:5",
            Member1_NameofStudyProgram:"required|string|min:3|max:150",
            Member2_NameofStudyProgram:"required|string|min:3|max:150",
            Member3_NameofStudyProgram:"required|string|min:3|max:150",

        }
        const messages = {
            required: 'This {{field}} is required',
            'email.email': 'The email is required',
            alpha: 'This {{field}} must use only characters',
            alpha_numeric: 'This {{field}} must use only alpha numeric characters',

        }
        validateAll(data, rules, messages)
            .then(() => {
                toast.success('Successfully Submit')
            })
            .catch(errors => {
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                this.setState({ errors: formattedErrors })
                toast.error(this.state.errors.Member1_First_Name)
                toast.error(this.state.errors.Member2_First_Name)
                toast.error(this.state.errors.Member3_First_Name)
                toast.error(this.state.errors.Member1_Last_Name)
                toast.error(this.state.errors.Member2_Last_Name)
                toast.error(this.state.errors.Member3_Last_Name)
                toast.error(this.state.errors.Member1_Email)
                toast.error(this.state.errors.Member2_Email)
                toast.error(this.state.errors.Member3_Email)
                toast.error(this.state.errors.Member1_StudyYear)
                toast.error(this.state.errors.Member2_StudyYear)
                toast.error(this.state.errors.Member3_StudyYear)
                toast.error(this.state.errors.Member1_Faculty)
                toast.error(this.state.errors.Member2_Faculty)
                toast.error(this.state.errors.Member3_Faculty)
                toast.error(this.state.errors.Member1_StudentIdNumber)
                toast.error(this.state.errors.Member2_StudentIdNumber)
                toast.error(this.state.errors.Member3_StudentIdNumber)
                toast.error(this.state.errors.Member1_TelephoneNumber)
                toast.error(this.state.errors.Member2_TelephoneNumber)
                toast.error(this.state.errors.Member3_TelephoneNumber)
                toast.error(this.state.errors.Member1_NameofStudyProgram)
                toast.error(this.state.errors.Member2_NameofStudyProgram)
                toast.error(this.state.errors.Member3_NameofStudyProgram)
            })
    };
    onInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    inputsmember1 = [
        {
            type: "text",
            name: "Member1_First_Name",
            label: "First Name",
        },
        {
            type: "text",
            name: "Member1_Last_Name",
            label: "Last Name",
        },
        {
            type: "text",
            name: "Member1_NameofStudyProgram",
            label: "Name of Study Program",
        },
        {
            type: "number",
            name: "Member1_StudyYear",
            label: "Study Year",
        },
        {
            type: "text",
            name: "Member1_Faculty",
            label: "Faculty",
        },
        {
            type: "text",
            name: "Member1_StudentIdNumber",
            label: "Student Id Number",
        },
        {
            type: "number",
            name: "Member1_TelephoneNumber",
            label: "Telephone Number",
        },
        {
            type: "email",
            name: "Member1_Email",
            label: "email",
        },
    ]
    inputsmember2 = [
        {
            type: "text",
            name: "Member2_First_Name",
            label: "First Name",
        },
        {
            type: "text",
            name: "Member2_Last_Name",
            label: "Last Name",
        },
        {
            type: "text",
            name: "Member2_NameofStudyProgram",
            label: "Name of Study Program",
        },
        {
            type: "number",
            name: "Member2_StudyYear",
            label: "Study Year",
        },
        {
            type: "text",
            name: "Member2_Faculty",
            label: "Faculty",
        },
        {
            type: "text",
            name: "Member2_StudentIdNumber",
            label: "Student Id Number",
        },
        {
            type: "number",
            name: "Member2_TelephoneNumber",
            label: "Telephone Number",
        },
        {
            type: "email",
            name: "Member2_Email",
            label: "email",
        },
    ]

    inputsmember3 = [
        {
            type: "text",
            name: "Member3_First_Name",
            label: "First Name",
        },
        {
            type: "text",
            name: "Member3_Last_Name",
            label: "Last Name",
        },
        {
            type: "text",
            name: "Member3_NameofStudyProgram",
            label: "Name of Study Program",
        },
        {
            type: "number",
            name: "Member3_StudyYear",
            label: "Study Year",
        },
        {
            type: "text",
            name: "Member3_Faculty",
            label: "Faculty",
        },
        {
            type: "text",
            name: "Member3_StudentIdNumber",
            label: "Student Id Number",
        },
        {
            type: "number",
            name: "Member3_TelephoneNumber",
            label: "Telephone Number",
        },
        {
            type: "email",
            name: "Member3_Email",
            label: "email",
        },
    ]
    inputmsg = []
    inputbtn2 = []
    inputs2 = []
    inputbtn = [
        {
            typebtn: "submit",
            namebtn: "Submit",
            labelbtn: "Register",
        }
    ]
    render() {
        return (
            <section>
                <Navbar />
                <div className="mainfooter" id="footer">
                    <div className="footer">

                        <div className="RegForm">
                            <div className='heading3'>
                                <h3>THE LAW CHALLENGE REGISTRATION FORM</h3>
                                <br></br>
                                <h5>All participants are required to submit this form duly filled through e-mail tficonsult19@gmail.com or mbankrah11@gmail.com.</h5>
                                <p>(Please use CAPITAL letters to fill this form)</p>
                                <h5>Please note that this competition is open to Ghanaian students currently pursuing LLB degree only (LLM and Foreign students are unfortunately excluded).</h5>
                                <div className='design3'></div>
                            </div>
                            <form id="form" onSubmit={this.handleSubmit2} >
                                <div className="all_reg_forms">
                                    <div className="teamMember">
                                        <h3>Team Member 1</h3>
                                        <FormGenerator onChange={this.onInputChange} inputs={this.inputsmember1} inputmsg={this.inputmsg} inputbtn={this.inputbtn2} />
                                    </div>
                                    <div className="teamMember">
                                        <h3>Team Member 2</h3>
                                        <FormGenerator onChange={this.onInputChange} inputs={this.inputsmember2} inputmsg={this.inputmsg} inputbtn={this.inputbtn2} />
                                    </div>
                                    <div className="teamMember">
                                        <h3>Team Member 3</h3>
                                        <FormGenerator onChange={this.onInputChange} inputs={this.inputsmember3} inputmsg={this.inputmsg} inputbtn={this.inputbtn2} />
                                    </div>
                                </div>
                                <FormGenerator inputs={this.inputs2} inputmsg={this.inputmsg} inputbtn={this.inputbtn} />
                            </form>
                            <div class="form-group">
                                <ToastContainer />
                            </div>
                        </div>
                    </div>


                </div>
                <Footer />
            </section>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Member1_First_Name: state.Member1_First_Name,
        Member1_Last_Name: state.Member1_Last_Name,
        Member1_Email: state.Member1_Email,
        Member1_StudyYear: state.Member1_StudyYear,
        Member1_Faculty: state.Member1_Faculty,
        Member1_StudentIdNumber: state.Member1_StudentIdNumber,
        Member1_TelephoneNumber: state.Member1_TelephoneNumber,
        Member1_NameofStudyProgram: state.Member1_NameofStudyProgram,
        Member2_First_Name: state.Member2_First_Name,
        Member2_Last_Name: state.Member2_Last_Name,
        Member2_Email: state.Member2_Email,
        Member2_StudyYear: state.Member2_StudyYear,
        Member2_Faculty: state.Member2_Faculty,
        Member2_StudentIdNumber: state.Member2_StudentIdNumber,
        Member2_TelephoneNumber: state.Member2_TelephoneNumber,
        Member2_NameofStudyProgram: state.Member2_NameofStudyProgram,
        Member3_First_Name: state.Member3_First_Name,
        Member3_Last_Name: state.Member3_Last_Name,
        Member3_Email: state.Member3_Email,
        Member3_StudyYear: state.Member3_StudyYear,
        Member3_Faculty: state.Member3_Faculty,
        Member3_StudentIdNumber: state.Member3_StudentIdNumber,
        Member3_TelephoneNumber: state.Member3_TelephoneNumber,
        Member3_NameofStudyProgram: state.Member3_NameofStudyProgram
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeState: e => {
            dispatch(handleSubmit2(e))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);