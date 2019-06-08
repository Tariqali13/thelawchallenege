import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../sidebar/sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
import "../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

class UserReg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      id: "",
      show: ""
    };
  }

  componentWillMount() {
    if (this.props.auth.isAuthenticated === false) {
      this.props.history.replace("/login");
    }
  }
  componentDidMount() {
    axios.get("/Reg").then(response => {
      this.setState({
        products: response.data
      });
    });
  }


  handleClose = () => {
    this.setState({ show: false });
  };
  onSelects = (cell, row, rowIndex) => {
    console.log(this.state)

    this.setState({
      id: row._id,
      show: true
    })
  }
  handleDelete = (cell, row, rowIndex) => {
    // this.props.changeState(this.state);
    let mail = this.state.products;
    mail.splice(row._id, 1)

    this.setState({
      id: row._id,
      products: mail
    })

    axios.delete('/Reg/deluser', {
      data: {
        id: row._id,
      },
    });

  }
  buttonFormatter = (cell, row, rowIndex) => {
    return (<div> <i className="fa fa-eye dashboard_icon dashboard_icon_view" onClick={() => this.onSelects(cell, row, rowIndex)} >{rowIndex}</i> <i className="fa fa-trash dashboard_icon dashboard_icon_del" onClick={() => this.handleDelete(cell, row, rowIndex)} >{rowIndex}</i></div>);
  }
  render() {

    const options = {
      sizePerPageList: [
        {
          text: "3",
          value: 3
        },
        {
          text: "5",
          value: 5
        }
      ],
      sizePerPage: 5,
      paginationSize: 3,
      prePage: "Prev",
      nextPage: "Next",
      firstPage: "First",
      lastPage: "Last",
      paginationShowsTotal: this.renderShowsTotal
    };
    return (
      <div className="main_section2">
        <Sidebar />
        <div className="main_section">
          <DashboardHeader />
          <div className="container" style={{ marginTop: 50 }}>
            <BootstrapTable
              data={this.state.products}
              pagination
              options={options}
            >
              <TableHeaderColumn dataField="_id" isKey={true}>
                id
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Member1_First_Name">
                First Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Member1_Last_Name">
                Last Name
              </TableHeaderColumn>
              <TableHeaderColumn dataField="Member1_Email">
                Email
              </TableHeaderColumn>
              <TableHeaderColumn dataField="button" dataFormat={this.buttonFormatter}>Actions</TableHeaderColumn>

            </BootstrapTable>

            <Modal show={this.state.show} onHide={this.handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Selected Row Team Information</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {this.state.products.map((value, index) => {
                  return (
                    <div>
                      {value._id === this.state.id ? (
                        <div class="table-responsive">

                          <table class="table">
                            <thead>
                              <tr>
                                <th>Headings</th>
                                <th>Member 1</th>
                                <th>Member 2</th>
                                <th>Member 3</th>
                              </tr>
                            </thead>
                            <tbody id="myTable">
                              <tr>
                                <td className="font-weight-bold">First Name</td>
                                <td>{value.Member1_First_Name}</td>
                                <td>{value.Member2_First_Name}</td>
                                <td>{value.Member3_First_Name}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Last Name</td>
                                <td>{value.Member1_Last_Name}</td>
                                <td>{value.Member2_Last_Name}</td>
                                <td>{value.Member3_Last_Name}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Name of Study Program</td>
                                <td>{value.Member1_NameofStudyProgram}</td>
                                <td>{value.Member2_NameofStudyProgram}</td>
                                <td>{value.Member3_NameofStudyProgram}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Faculty</td>
                                <td>{value.Member1_Faculty}</td>
                                <td>{value.Member2_Faculty}</td>
                                <td>{value.Member3_Faculty}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Study Year</td>
                                <td>{value.Member1_StudyYear}</td>
                                <td>{value.Member2_StudyYear}</td>
                                <td>{value.Member3_StudyYear}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Students Id Number</td>
                                <td>{value.Member1_StudentIdNumber}</td>
                                <td>{value.Member2_StudentIdNumber}</td>
                                <td>{value.Member3_StudentIdNumber}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Students Telephone Number</td>
                                <td>{value.Member1_TelephoneNumber}</td>
                                <td>{value.Member2_TelephoneNumber}</td>
                                <td>{value.Member3_TelephoneNumber}</td>
                              </tr>
                              <tr>
                                <td className="font-weight-bold">Students Email</td>
                                <td>{value.Member1_Email}</td>
                                <td>{value.Member2_Email}</td>
                                <td>{value.Member3_Email}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      ) : (
                          ""
                        )}
                    </div>
                  );
                })}
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal>
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
export default connect(mapStateToProps)(UserReg);
