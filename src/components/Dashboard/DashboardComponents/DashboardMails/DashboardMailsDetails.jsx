// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Sidebar from '../sidebar/sidebar';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import DashboardHeader from '../DashboardHeader/DashboardHeader';
// import axios from 'axios';


// class DashboardMailsDetails extends Component {
//     state = {
//         data: []
//     }

//     componentDidMount() {
//         axios.post("http://localhost:6600/send/mails",{id:this.props.match.params.id})
//             .then(res => {
//                 this.setState({
//                     data: [res.data]
//                 })
//                 console.log(res.data)
//             })
//             .catch(e => { console.log(e) })
//     }
//     render() {
//         console.log(this.props)
//         // let Mails =this.data.filter((Mails, index) => {
//         //     return Mails.id == props.match.params.id;
//         // });
//         const response = this.state.data.map((value, i) => {
//             return (
//                 <Card className="m-2 carddesign" key={value._id} >
//                     <Card.Title className="pt-5 pl-5 text-left lead text-info"><h2>Mail 1</h2></Card.Title>
//                     <Card.Body >

//                         <Card.Text className="mt-5 mb-5 text-left">
//                             <div className="DetailMail"><h5>Name:</h5> <h5>{value.name}</h5></div>
//                             <div className="DetailMail"><h5>Email:</h5> <h5>{value.email}</h5></div>
//                             <div className="DetailMail"><h5>Subject:</h5> <h5>{value.subject}</h5></div>
//                             <div className="DetailMail"><h5>Message:</h5> <h5>{value.message}</h5></div>
//                         </Card.Text>
//                         <div className="text-left mt-5">
//                             <Link to="/DashboardMails"><Button variant="danger">Go Back</Button></Link>
//                         </div>
//                     </Card.Body>
//                     <Card.Footer>
//                         <small className="text-muted">date</small>
//                     </Card.Footer>
//                 </Card>
//             )
//         })


//         return (
//             <div className="main_section2">
//                 <Sidebar />
//                 <div className="main_section">
//                     <DashboardHeader />
//                     <h1 className="dash">Mails</h1>
//                     <div className='design3'></div>
//                     {response}

//                 </div>
//             </div>
//         )
//     }
// }

// export default DashboardMailsDetails;