import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListUser(){
    const [users, setUsers]= useState([]);
    useEffect(()=>{
        // fetch('http://localhost/PHP_API_Project/api/read.php')
        // .then(response=>response.json())
        // .then(res=>setUsers(res))
        getUsers();
    },[]);

    const getUsers=()=>{
        axios.get('http://localhost/ReactAPI/contacts.php').then(function(response){
            console.log(response.data);
            setUsers(response.data);
        });
        
    }
   
    const deleteUser=(id)=>{
        // axios.delete(`http://localhost/ReactAPI/contacts.php/?delete=${id}`)
        // .then(function(response){
        //     console.log(response.data);
        //     getUsers();
        // });

      
        if(window.confirm("Are you sure want to delete?")) {
            axios({
                method: 'post',
                url: `http://localhost/ReactAPI/contacts.php/?delete=${id}` 
            })
            .then(function (response) {
                //handle success
                console.log(response)
                getUsers();
                if(response.status === 200) {
                    alert("Website deleted successfully");
                }
            })
            .catch(function (response) {
                //handle error
                console.log(response)
            });
        }

    }


    return(
        <div class="wrap">
        <h1>List Users</h1>
        <table class="table table-bordered table-striped" >
                <thead>
                    <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                    <th>Age</th>
                    <th>Job</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                 <tbody>
                 {users.map((user,key)=>{
                    return(
                        <tr key={key}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.city}</td>   
                          <td>{user.age}</td>                  
                          <td>{user.job}</td>
                          <td>
                            <Link className="btn btn-warning mr-3" to={`/edit/${user.id}`}>Edit</Link>
                            <Link className='delete btn btn-danger ml-3' onClick={()=> deleteUser(user.id)}>Delete</Link>
                          </td>
                          </tr>
                    );
                 }
                       
                    
                    )}      
                 </tbody>
                      
                  
                                  
            </table>
        </div>
    )
}





