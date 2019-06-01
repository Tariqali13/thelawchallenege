// import React, { Component } from 'react';
// import Sidebar from '../sidebar/sidebar';
// import axios from 'axios';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// // import BSTable from './BSTable';
// import DashboardHeader from '../DashboardHeader/DashboardHeader';

// const products = [];

// function addProducts(quantity) {
//     const startId = products.length;
//     for (let i = 0; i < quantity; i++) {
//         const id = startId + i;
//         if (i <= 3) {
//             products.push({
//                 id: id,
//                 email:"tariqali99.ta@gmail.com",
//                 subject:"Help",
//                 message: [{
//                     message:"here is the message",
//                 }]
//             });
//         } else {
//             products.push({
//                 id: id,
//                 email:"tariqali99.ta@gmail.com",
//                 subject:"Help",
//             });
//         }
//     }
// }
// addProducts(10);

// class BSTable extends React.Component {
//     render() {
//         if (this.props.data) {
//             return (
//                 <BootstrapTable data={this.props.data}>
//                     <TableHeaderColumn dataField='message'  isKey={true}>Message</TableHeaderColumn>
//                 </BootstrapTable>);
//         } else {
//             return (<p>?</p>);
//         }
//     }
// }

// class DashboardMailss extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             serverport:[]
//         }
//     }
    
// // componentDidMount(){
// //     axios.get("http://localhost:6600/send")
// //     .then(res=>{
// //         this.setState({serverport:res.data})
// //     })
// //     .catch(e=>{console.log(e)})
// // }

//     isExpandableRow(row) {
//         if (row.id < 3) return true;
//         else return false;
//     }

//     expandComponent(row) {
//         return (
//             <BSTable data={row.message} />
//         );
//     }
//     render() {
//         const selectRow = {
//             mode: 'checkbox',//radio or checkbox
//             clickToSelect: true,  // click to select, default is false
//             clickToExpand: true,
//             columnWidth: '60px',
//             bgColor: function (row, isSelect) {
//                 if (isSelect) {
//                     const { id } = row;
//                     return 'blue';

//                 }
//                 return null;
//             }  // Trigger expand and selection together

//         };

//         // var products = [
//         //     {
//         //         id:1,
//         //         name: "Product1",
//         //         email: "tariqali99.ta@gmail.com",
//         //         subject: "Help",


//         //     },
//         //     {
//         //         id:2,
//         //         name: "Product2",
//         //         email: "tariqali99.ta@gmail.com",
//         //         subject: "Help",
//         //         message: "message",
//         //     },

//         //     {
//         //         id:3,
//         //         name: "Product3",
//         //         email: "tariqali99.ta@gmail.com",
//         //         subject: "Help",
//         //         message: "message",
//         //     },


//         // ]

//         const options = {
//             page: 0,
//             expandRowBgColor: 'rgb(242, 255, 163)',
//             sizePerPageList: [{
//                 text: '3', value: 3
//             }, {
//                 text: '5', value: 5
//             }],  // which page you want to show as default
//             // you can change the dropdown list for size per page
//             sizePerPage: 5,  // which size per page you want to locate as default
//             pageStartIndex: 0, // where to start counting the pages
//             paginationSize: 3,  // the pagination bar size.
//             prePage: 'Prev', // Previous page button text
//             nextPage: 'Next', // Next page button text
//             firstPage: 'First', // First page button text
//             lastPage: 'Last', // Last page button text
//             paginationShowsTotal: this.renderShowsTotal,
//             // hideSizePerPage: true > You can hide the dropdown for sizePerPage
//             // alwaysShowAllBtns: true // Always show next and previous button
//             // withFirstAndLast: false > Hide the going to First and Last page button
//         };

//         return (
//             <div className="main_section2">
//                 <Sidebar />
//                 <div className="main_section">
//                     <DashboardHeader />
//                     <h1 className="dash">Welcome To Mail Box</h1>
//                     <div className='design3'></div>


//                     <BootstrapTable
//                         data={products}
//                         pagination
//                         options={options}
//                         selectRow={selectRow}
//                         deleteRow
//                         expandableRow={this.isExpandableRow}
//                         expandComponent={this.expandComponent}
//                         expandColumnOptions={{ expandColumnVisible: true }}
//                     >
//                         {/* <TableHeaderColumn dataField='name' isKey={ true }>Name</TableHeaderColumn>
//                         <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
//                         <TableHeaderColumn dataField='subject'>Subject</TableHeaderColumn> */}
//                         <TableHeaderColumn dataField='id' isKey={true}>id</TableHeaderColumn>
//                         <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
//                         <TableHeaderColumn dataField='email'>Email</TableHeaderColumn>
//                         <TableHeaderColumn dataField='subject'>Subject</TableHeaderColumn>

//                     </BootstrapTable>
//                 </div>
//             </div>
//         );
//     }
// }
