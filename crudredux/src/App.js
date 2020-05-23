import React, { Component } from "react";  
import logo from "./logo.svg";  
import "./App.css";  
import PropTypes from 'prop-types';  
import { getUsers,addUser,editUser,deleteUser } from './Redux/action';  
import { connect } from 'react-redux';  
  
class App extends Component {  
  constructor(props) {  
    super(props);  
    this.state = {  
      id: 0,  
      FirstName: "",  
      LastName: "",
      email:""
    };  
  }  
  
  static propTypes = {  
    users: PropTypes.array.isRequired,  
    getUsers: PropTypes.func.isRequired,  
    addUser: PropTypes.func.isRequired,  
    editUser: PropTypes.func.isRequired,  
    deleteUser: PropTypes.func.isRequired  
  };  
  
  componentDidMount() {  
    this.props.getUsers();  
  }  
  
  submitData = () => {  
    if (this.state.FirstName && this.state.LastName && this.state.email && !this.state.id) {  
      const newUser= {  
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),  
        FirstName: this.state.FirstName,  
        LastName: this.state.LastName,  
        email:this.state.email
      };  
       console.log(newUser)
      this.props.addUser(newUser);  
    } else if (this.state.FirstName && this.state.LastName && this.state.email && this.state.id) {  
      const updatedDetails = {  
        id: this.state.id,  
        FirstName: this.state.FirstName,  
        LastName: this.state.LastName,  
        email:this.state.email
      };  
  
      this.props.editUser(updatedDetails);  
    } else {  
      alert('Enter Employee Details.');  
    }  
  
    this.clearData();  
  }  
  
  editDetails = (data) => {  
    this.setState({  
      id: data.id,  
      FirstName: data.FirstName,  
      LastName: data.LastName,  
      email:data.email 
    })  
  }  
  
  deleteUser = (id) => {  
    this.clearData();  
    if (window.confirm("Are you sure?")) {  
      this.props.deleteUser(id);  
    }  
  }  
  
  handleFNameChange = (e) => {  
    this.setState({  
      FirstName: e.target.value  
    });  
  }  
  
  handleLNameChange = (e) => {  
    this.setState({  
      LastName: e.target.value  
    });  
  }  

  handleEmailChange = (e) => {  
    this.setState({  
      email: e.target.value  
    });  
  }  
  
  clearData = () => {  
    this.setState({  
      id: 0,  
      FirstName: "",  
      LastName: "" ,
      email:""
    });  
  }  
  
  render() {  
    return (  
      <div className="App">  
        <header className="App-header">  
          <img src={logo} className="App-logo" alt="logo" />  
          <h1 className="App-title">CRUD opeartions for User Module</h1>  
        </header>  
        <div className="App-intro">  
          <div className="leftsection">  
            FirstName : <input onChange={this.handleFNameChange} value={this.state.FirstName} type="text" placeholder="User FirstName" /> <br />  
            LastName:  <input onChange={this.handleLNameChange} value={this.state.LastName} type="text" placeholder="User LastName" /><br /> 
            email:  <input onChange={this.handleEmailChange} value={this.state.email} type="text" placeholder="User Email" /><br />   
            {this.state.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>}   <button onClick={this.clearData}>CLEAR</button>  
          </div>  
          <div className="rightsection">  
            <table>  
              <thead>  
                <tr>  
                  <th>ID</th>  
                  <th>FName</th>  
                  <th> LName</th>  
                  <th>Email</th>
                  <th>Action(s)</th>  
                </tr>  
              </thead>  
              <tbody>  
                {this.props.users && this.props.users.map((data, index) => {  
                  return <tr key={(index + 1)}>  
                    <td>{(index + 1)}</td>  
                    <td>{data.FirstName}</td>  
                    <td>{data.LastName}</td> 
                    <td>{data.email}</td> 
                    <td><button onClick={() => this.editDetails(data)}>EDIT</button> <button onClick={() => this.deleteUser(data.id)}>DELETE</button> </td>  
                  </tr>  
                })}  
              </tbody>  
            </table>  
          </div>  
        </div>  
      </div>  
    );  
  }  
}  
  
const mapStateToProps = state => ({  
  users: state.users  
});  
  
export default connect(mapStateToProps, { getUsers, addUser, editUser, deleteUser })(App);