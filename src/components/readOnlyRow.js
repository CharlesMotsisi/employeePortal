import React from 'react'
import EmployeeDataService from "../services/employeeServices";

const ReadOnlyRow = ({contact,handleEditBtn,deleteRow}) =>{
    
    return(
        
            <tr>
                <td>{contact.first}</td>
                <td>{contact.last}</td>
                <td>{contact.email}</td>
                <td>
                    <button type="button" onClick={(event)=>handleEditBtn(event,contact)}>Edit</button>
                    <button type="button" onClick={()=> deleteRow(contact.id,EmployeeDataService.deleteEmp(contact.id))}>Delete</button>
                </td>
            </tr>
        
    )
}

export default ReadOnlyRow;