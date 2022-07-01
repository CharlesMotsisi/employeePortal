import React from 'react'

const ReadOnlyRow = ({contact,handleEditBtn,deleteRow}) =>{
    return(
        
            <tr>
                <td>{contact.first}</td>
                <td>{contact.last}</td>
                <td>{contact.email}</td>
                <td>
                    <button type="button" onClick={(event)=>handleEditBtn(event,contact)}>Edit</button>
                    <button type="button" onClick={()=> deleteRow(contact.id)}>Delete</button>
                </td>
            </tr>
        
    )
}

export default ReadOnlyRow;