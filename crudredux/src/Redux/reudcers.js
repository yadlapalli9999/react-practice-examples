const initialstate = {  
    
    users: [  
        { id: 1, FirstName: "Ganesh", LastName: "CH", email:'ganesh@gmail.com' },  
        { id: 2, FirstName: "Ravi", LastName: "D",email:'ravi@gmail.com'  },  
        { id: 3, FirstName: "Raja", LastName: "M",email:'raja@gmail.com'  }  
    ]  
}; 

const UserReducer = (state= initialstate,action) =>{
    switch (action.type) {    
        case 'GET_USERS':    
            return {    
                ...state    
            };    
        case 'ADD_USER':    
            return {    
                ...state,    
                users: state.users.concat(action.payload)    
            };    
        case 'EDIT_USER':    
            return {    
                ...state,    
                users: state.users.map(    
                    (content, i) => content.id === action.payload.id ? {...content, FirstName : action.payload.FirstName ,  LastName : action.payload.LastName, email:action.payload.email }    
                                            : content)    
            };    
        case 'DELETE_USER':    
            return {    
                ...state,    
                users: state.users.filter(item => item.id !== action.payload)    
            };    
        default:    
            return state;    
    }    
}

export default UserReducer