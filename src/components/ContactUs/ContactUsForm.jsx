import React, { Component } from 'react';
import { connect } from 'react-redux';
import FormGenerator from '../Common/FormGenerator';
import { handleSubmit } from '../Store/Actions/Action';
import { validateAll } from 'indicative';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ContactForm extends Component {

    state = {
        name: "",
        email: "",
        subject: "",
        message: "",
        value: "",
    }

    componentDidMount = () => {
        // console.log(this.props);
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeState(this.state);
        const data = this.state;
        const rules = {
            name: "required|alpha|min:3|max:100",
            email: "required|email",
            subject: "required|alpha|min:3|max:200",
            message: "required|string|min:3",
        }
        const messages = {
            required: 'This {{field}} is required',
            'email.email': 'The email is required',
            string: 'This {{field}} must be String',
            alpha: 'This {{field}} must use only characters',
        }
        validateAll(data, rules, messages)
            .then(() => {
                toast.success('Successfully Submit')
            })
            .catch(errors => {
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                this.setState({ errors: formattedErrors })
                toast.error(this.state.errors.name)
                toast.error(this.state.errors.email)
                toast.error(this.state.errors.subject)
                toast.error(this.state.errors.message)
            })
    };

    onInputChange = e => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
        // reset();
    };
    inputs = [
        {
            type: "text",
            name: "name",
            label: "name",
        },
        {
            type: "email",
            name: "email",
            label: "email",
        },
        {
            type: "text",
            name: "subject",
            label: "subject",
        },

    ]
    inputmsg = [
        {
            typemsg: "text",
            namemsg: "message",

            labelmsg: "message",

        }
    ]
    inputbtn = [
        {
            typebtn: "submit",
            namebtn: "Submit",
            labelbtn: "Submit",
        }
    ]


    render() {
        // console.log("These are props", this.props);

        return (
            <div className="mainfooter" id="footer">
                <br />
                <div className="footer">
                    <form id="form" onSubmit={this.handleSubmit} >
                        <FormGenerator onChange={this.onInputChange} inputs={this.inputs} inputmsg={this.inputmsg} inputbtn={this.inputbtn} value={this.props.value} />
                    </form>
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
        name: state.name,
        email: state.email,
        subject: state.subject,
        message: state.message,

    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeState: e => {
            dispatch(handleSubmit(e))
        },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);