import React, { Component } from "react";
import { connect } from "react-redux";
import Sidebar from "../sidebar/sidebar";
import DashboardHeader from "../DashboardHeader/DashboardHeader";
// import '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import axios from "axios";

class DashboardMail extends Component {
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
    axios
      .get("/send")
      .then(res => {
        this.setState({
          products: res.data
        });
        console.log(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  onSelectAccount = row => {
    //error occur in this setState
    // this.setState({ selectedUserId: row.userId });
    this.setState({
      // modalShow: true,
      id: row._id,
      show: true
    });
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.state);
    const selectRow = {
      mode: "radio",
      clickToSelect: true,
      columnWidth: "60px",
      onSelect: this.onSelectAccount,
      bgColor: function(row, isSelect) {
        if (isSelect) {
          const { id } = row;
          return "blue";
        }
        return null;
      }
    };

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
            <div>
              <h2>Click Row to Open Details</h2>
            </div>
            <BootstrapTable
              data={this.state.products}
              pagination
              options={options}
              selectRow={selectRow}
            >
              <TableHeaderColumn dataField="_id" isKey={true}>
                id
              </TableHeaderColumn>
              <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
              <TableHeaderColumn dataField="email">Email</TableHeaderColumn>
              <TableHeaderColumn dataField="subject">Subject</TableHeaderColumn>
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
                        <table>
                          <thead>
                            <tr>
                              <th>Message</th>
                            </tr>
                          </thead>
                          <tbody id="myTable">
                            <tr>
                              <td className="word-wrap  ">{value.message}</td>
                            </tr>
                          </tbody>
                        </table>
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
export default connect(mapStateToProps)(DashboardMail);
