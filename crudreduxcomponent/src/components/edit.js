import React, { Component } from "react";  
// import logo from "./logo.svg";  
// import "./App.css";  
import PropTypes from 'prop-types';  
import { editUser} from '../store/action';  
import { connect } from 'react-redux';  
  
class Edit extends Component {  
  
  constructor(props) {  
    super(props);  
    this.state = {  
      user:{  
        
        FirstName: "",  
        LastName: "",
        email:""
       }
    }; 
    // let obj =  this.props.users[this.props.match.params.id]
    // this.setState({user:obj})
    //const  user={id:'',FirstName:'',LastName:'',email:''}
    
  }  


  
  
  static propTypes = {  
    users: PropTypes.array.isRequired,  
    // getUsers: PropTypes.func.isRequired,  
    //addUser: PropTypes.func.isRequired,  
    editUser: PropTypes.func.isRequired,  
    // deleteUser: PropTypes.func.isRequired  
  };  
  
  componentDidMount() {  
    // this.props.users.map((data)=>{
    //   const id = this.props.match.params.id;
       
    // })
  let obj =  this.props.users[this.props.match.params.id]
  console.log(obj)
    this.setState({user:obj})
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
      this.props.history.push('/')
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
  
//   deleteUser = (id) => {  
//     this.clearData();  
//     if (window.confirm("Are you sure?")) {  
//       this.props.deleteUser(id);  
//     }  
//   }  
  
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
      <div className="App2">  
        {/* <header className="App-header">  
          <img src={logo} className="App-logo" alt="logo" />  
          <h1 className="App-title">CRUD opeartions for User Module</h1>  
        </header>   */}
        <div className="App-intro">  
          <div className="leftsection">  
          {/* {this.props.users.map((data)=>{
            const id = this.props.match.params.id;
                if(data.id == id){
              
                 return <div key={data.id}>
                FirstName : <input onChange={this.handleFNameChange}  value={data.FirstName} type="text" placeholder="User FirstName" /> <br />  
            LastName:  <input onChange={this.handleLNameChange}  value={data.LastName} type="text" placeholder="User LastName" /><br /> 
            email:  <input onChange={this.handleEmailChange} value={data.email} type="text" placeholder="User Email" /><br />   
            {data.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>}   <button onClick={this.clearData}>CLEAR</button>
                </div>
                
                }
                
             
           })} */}
             FirstName : <input onChange={this.handleFNameChange}  value={this.state.user.FirstName} type="text" placeholder="User FirstName" /> <br />  
             LastName:  <input onChange={this.handleLNameChange}  value={this.state.user.LastName} type="text" placeholder="User LastName" /><br /> 
             email:  <input onChange={this.handleEmailChange} value={this.state.user.email} type="text" placeholder="User Email" /><br />   
             {this.state.user.id ? <button onClick={this.submitData}>UPDATE</button> : <button onClick={this.submitData}>ADD</button>}   <button onClick={this.clearData}>CLEAR</button>  
          </div>  
          {/* <div className="rightsection">  
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
          </div>   */}
        </div>  
      </div>  
    );  
  }  
}  
  
const mapStateToProps = (state) => ({  
 
 users: state.users
});  
  
export default connect(mapStateToProps, { editUser})(Edit);
