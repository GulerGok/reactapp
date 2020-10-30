import React, { Component } from 'react';
import PropTypes from 'prop-types';
import UserConsumer from '../context';


 class User extends Component {
 state = {
     isVisible : false
 }
    static defaultProps = {
    name : "İsim bilgisi yok",
    department : "Departmant bilgisi yok",
    salary : "Maaş bilgisi yok"
    }

    onClickEvent = (number, e) => {
        this.setState(
            {
                isVisible :! this.state.isVisible
            }
        )
    }

    // constructor(props){
    //     super(props);

    //     this.state = {
    //         isVisible : false 
    //     }
    // }

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        //Consumer Dispatch
        dispatch({type: "DELETE_USER",payload: id});
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
    

    render() {
        const { name, department, salary }  = this.props; //Destructing
        const {isVisible} = this.state;
     
     return ( <UserConsumer>
        {
            value => {
                const {dispatch} = value;

                return (
                    <div className = "col-md-8 mb-4">
                     <div className = "card" style = {isVisible ? {backgroundColor: "#e6e6e6"} : null}>
                       <div className ="card-header d-flex justify-content-between">
                         <h4 className = "d-inline" onClick = {this.onClickEvent}> {name} </h4>
                         <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:'pointer'}}></i>
                       </div>
                       {
                           isVisible ? <div className = "card-body">
                           <p className = "card-text"> Departman: {department} </p> 
                           <p className = "card-text"> Maaş: {salary} </p> 
                                      </div>  : null
                       }
                                  
                     </div>
                    </div>
                )

            }
        }
    
            </UserConsumer> )

      
    }
 }

// User.defaultProps = {
//     name : "İsim bilgisi yok",
//     department : "Departmant bilgisi yok",
//     salary : "Maaş bilgisi yok"
// }

User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired
}

export default User;


