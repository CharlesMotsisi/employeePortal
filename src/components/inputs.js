import Icon from "react-crud-icons";
import React, {useState} from "react"
import "../css/inputs.css"
function Input(){

    const [name, setName] = useState("");
    const [surname, setSurname] = useState("");
    const [email, setEmail] = useState("");
    

    return(
        <div className="style">
            <div className="styleEmp">
                <h1>New Employee</h1>

                <h3>First Name</h3>
                <input placeholder="Enter Name"  />

                <h3>Last Name</h3>
                <input placeholder="Enter Last Name " />

                <h3>Email</h3>
                <input placeholder="Enter Email"  /><br></br>

                <button className="btn">Add Employee</button>
            </div>
            <div className="styleList">
                <h1>Employee List</h1>
                <div className="style-table">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Charles</td>
                                <td>Motsisi</td>
                                <td>charlie@gmail.com</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr> 
                        </tbody>
                    </table>   
                </div>
                
            </div>
            
        </div>
        
    )
}

export default Input;