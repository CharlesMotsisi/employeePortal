import React, {useState,useEffect} from 'react'
import EmployeeDataService from "../services/employeeServices";
import { async } from "@firebase/util";

const EditData = ({editFormData, handleEditForm,cancel}) =>{
   
    return(
        <tr>
           <td><input type="text" required="required" 
            placeholder="Enter Name" name="first" value={editFormData.first} onChange={handleEditForm}></input></td>

           <td>
           <input type="text" required="required" 
            placeholder="Enter Last Name" name="last" value={editFormData.last} onChange={handleEditForm}></input>
           </td>
           <td>
           <input type="email" required="required" 
            placeholder="Enter Email" name="email" value={editFormData.email} onChange={handleEditForm}></input>
           </td>
           <td>
                <button type="submit" >Save</button>
                <button type="button" onClick={cancel}>Cancel</button>
           </td> 
        </tr>
    )
}

export default EditData;