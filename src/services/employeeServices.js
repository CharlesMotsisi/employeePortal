import {db} from "../config/firebase"
import {collection, getDocs,addDoc,updateDoc,deleteDoc,doc} from "firebase/firestore";

const employeeCollectionRef = collection(db, "Employee")
class EmployeeDataService {
    addEmployee = (newEmp) =>{
        return addDoc(employeeCollectionRef,newEmp);
    };

    updateData = (id,updatedEmp) => {
        const checkEmp = doc(db,"Employee", id);
        return updateDoc(checkEmp,updatedEmp);
    };

    deleteEmp = (id) => {
        const checkEmp = doc(db,"Employee", id);
        return deleteDoc(checkEmp);
    }

    getAllData = () =>{
        return getDocs(employeeCollectionRef);
    }

    getEmployee = (id) => {
        const checkEmp = doc(db,"Employee", id);
        return getDocs(checkEmp);
    }

}

export default new EmployeeDataService();