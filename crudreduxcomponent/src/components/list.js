import React from 'react';

import PropTypes from 'prop-types';  
import { getUsers } from '../store/action';  
import { connect } from 'react-redux';  
import { Link } from 'react-router-dom';

const mapStateToProps = state => ({  
    users: state.users  
  });  


class List extends React.Component{

    constructor(props) {  
        super(props);  
      }  
      
      static propTypes = {  
        users: PropTypes.array.isRequired,  
        getUsers: PropTypes.func.isRequired,
        // addUser: PropTypes.func.isRequired  
      };  
      
      componentDidMount() {  
        this.props.getUsers();  
      } 
     
      
    render(){
        return(
            <div>
                <table className="table">
                  <thead>
                     <tr>
                       <th scope="col">#</th>
                       <th scope="col">FirstName</th>
                       <th scope="col">LastName</th>
                       <th scope="col">Email</th>
                       <th scope="col">action</th>
                    </tr>
                  </thead>
                 <tbody>
                 {this.props.users && this.props.users.map((data, index) => {  
                  return <tr key={(index + 1)}>  
                    <td>{(index + 1)}</td>  
                    <td>{data.FirstName}</td>  
                    <td>{data.LastName}</td>  
                    <td>{data.email}</td>  
                    {/* <td>
                    <button onClick={() => this.editDetails(data)}>EDIT</button> 
                    <button onClick={() => this.deleteEmployee(data.id)}>DELETE</button> 
                    </td>   */}
                    <td>
                    <Link className="btn btn-primary btn-lg" to={`/edit/${data.id}`}>EDIT</Link> 
                    <Link className="btn btn-primary btn-lg" to="/delete">Delete</Link> 
                    </td>  
                  </tr>  
                })}  
                 </tbody>
              </table>
            </div>
        )
    }
}

export default connect(mapStateToProps,{getUsers}) (List);