import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { OnLogin } from '../Store/Actions/Action';
import Navbar from '../Navbar';
import Footer from '../Footer';
import classnames from 'classnames';
import { validateAll } from 'indicative';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.OnLogin = this.OnLogin.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    OnLogin(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.OnLogin(user);
        const data = this.state;
        const rules = {
            email: "required|email",
            password: "required|string|min:6",
        }
        const messages = {
            required: 'This {{field}} is required',
            'email.email': 'The email is invalid',
        }
        validateAll(data, rules, messages)
            .then(() => {
                toast.success('Successfully Submit')
            })
            .catch(errors => {
                const formattedErrors = {}
                errors.forEach(error => formattedErrors[error.field] = error.message)
                this.setState({ errors: formattedErrors })
                toast.error(this.state.errors.password)
                toast.error(this.state.errors.email)
            })
    }



    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/login');
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.auth.isAuthenticated) {
            this.props.history.push('/Dashboard')
        }
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <section>
                <Navbar />
                <div className="mainfooter" id="footer">
                    <div className="footer">
                        <div className="loginForm">
                            <div className='heading3'>
                                <h3>ADMIN LOGIN</h3>
                                <div className='design3'></div>
                            </div>

                            <form onSubmit={this.OnLogin}>
                                <div className="form-group">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className={classnames('form-control form-control-lg login_input', {
                                            'is-invalid': errors.email
                                        })}
                                        name="email"
                                        onChange={this.handleInputChange}
                                        value={this.state.email}
                                    />
                                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className={classnames('form-control form-control-lg login_input', {
                                            'is-invalid': errors.password
                                        })}
                                        name="password"
                                        onChange={this.handleInputChange}
                                        value={this.state.password}
                                    />
                                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                                </div>
                                <div className="form-group">
                                    <button type="submit" className=" login_button">
                                        Login User
                    </button>
                                </div>
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

Login.propTypes = {
    OnLogin: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { OnLogin })(withRouter(Login))