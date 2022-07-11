
import React, {useState, Fragment, useEffect} from "react"
import "../css/inputs.css"
import data from "../mock-data.json";
import ReadOnlyRow from "../components/readOnlyRow";
import EditData from "./editData";
import {nanoid} from 'nanoid';
import EmployeeDataService from "../services/employeeServices";
import { async } from "@firebase/util";




function Input(){

    const [contacts,setContacts] = useState(data);

    const [addData,setAddData] = useState({
        first: '',
        last: '',
        email: ''
    })

    const [editFormData, setEditFormData] = useState({
        first: '',
        last: '',
        email: '' 
    })

    const [editContactId, setEditContactId] = useState(null);

   

    const handleForm = (event) =>{
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const newData = {...addData};
        newData[fieldName] = fieldValue;

        setAddData(newData)

    };

    const handleEditForm = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = {...editFormData};
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);

    }
    
    const formSubmit = (event) =>{
        event.preventDefault();


        const NewFormData = {
            id:nanoid(),
            first: addData.first,
            last: addData.last,
            email: addData.email
        };
        //This adds employee data on firebase
        EmployeeDataService.addEmployee(NewFormData).then(()=>{
            alert("Employee Added!!!");
        }).catch(()=>{
            alert("Error captured!!");
        })


        const newAddedData = [...contacts,NewFormData];
        setContacts(newAddedData);

    };

    const handleFormSubmit = (event) =>{
        event.preventDefault();
      

        const edited = {
            id:editContactId,
            first:editFormData.first,
            last: editFormData.last,
            email: editFormData.email
        };
        
        
        const newData = [...contacts];
        const index = contacts.findIndex((contact)=> contact.id === editContactId); 

        newData[index] = edited;
       
        setContacts(newData);
       
        EmployeeDataService.updateData(index,edited).then(()=>{
            alert("Employee Added!!!");
        }).catch(()=>{
            alert("Error captured!!");
        })
        setEditContactId(null);
        
        
    };

    const handleEditBtn = (event,contact)=>{
      event.preventDefault();
        
      setEditContactId(contact.id);

      const theValues = {
        first: contact.first,
        last: contact.last,
        email: contact.email
      }
     
      setEditFormData(theValues);
      
     
    }

    const cancel = ()=>{
       setEditContactId(null); 
    }

    const deleteRow = (contactId)=>{
       
       const newRow = [...contacts] ;
       const index = contacts.findIndex((contact)=>contact.id ===contactId);
       
       EmployeeDataService.deleteEmp(contactId).then(()=>{
        alert("Deleted succesfully");
       }).catch(()=>{
        alert("Deletion was unsuccessful!!");
       })
       newRow.splice(index,1);
       

       setContacts(newRow);
       
    }
    return(
        <div className="style">
            <div className="styleEmp">
                <h1>New Employee</h1>
            <form onSubmit={formSubmit}>
                <h3>First Name</h3>
                <input type="text" required="required"  name="first" placeholder="Enter Name"  onChange={handleForm}/>

                <h3>Last Name</h3>
                <input type= "text" required="required" name="last" placeholder="Enter Last Name " onChange={handleForm}/>

                <h3>Email</h3>
                <input type="email" required="required" name="email" placeholder="Enter Email"  onChange={handleForm}/><br></br>

                <button type="submit" className="btn" onClick={formSubmit}>Add Employee</button>
            </form>            
            </div>
            <div className="styleList">
                <h1>Employee List</h1>
                <div className="style-table">
                <form onSubmit={handleFormSubmit}>
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            {contacts.map((contact)=>(
                                
                                <Fragment>
                                    {editContactId === contact.id ? ( <EditData editFormData ={editFormData} handleEditForm={handleEditForm} cancel={cancel}/> ):(
                                     <ReadOnlyRow contact={contact}
                                      handleEditBtn={handleEditBtn} handleEditForm={handleEditForm} deleteRow={deleteRow}/>)}
                                </Fragment> 
                            ))}
                            
                        </tbody>
                    </table>
                </form>   
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Input;