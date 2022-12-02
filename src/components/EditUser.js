import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import React from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useState,useEffect } from "react";

// import { useState,useEffect } from "react";
 import axios from "axios";
// import { useNavigate,useParams } from 'react-router-dom';

export default function EditUser(){
    const navigate=useNavigate();

    const [inputs,setState]=useState([])

    const {id}=useParams();

    useEffect(()=>{
      // fetch('http://localhost/PHP_API_Project/api/read.php')
      // .then(response=>response.json())
      // .then(res=>setUsers(res))
      
      getUser();
  },[]);

  const getUser=()=>{
      axios.get(`http://localhost/ReactAPI/contacts.php/?id=${id}`)
      .then(response => response.data)
      .then((data) => {
        // handle success
        console.log(data);
        setState({ id: data.id, name: data.name, email: data.email, city: data.city, age: data.age, job: data.job })
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
      
  }


    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setState(values=>({...values,[name]:value}));

    }
    const handleSubmit=(event)=>{


        // event.preventDefault();
        // axios.post('http://localhost/ReactAPI/contacts.php',inputs).then(function(response){
        //     console.log(response.data);
        //     navigate('/');
        // });

        console.log(inputs);

        event.preventDefault();
 
        let formData = new FormData();
        formData.append('name', inputs.name)
        formData.append('email', inputs.email)
        formData.append('city', inputs.city)
        formData.append('age', inputs.age)
        formData.append('job', inputs.job)
   
        axios.post( `http://localhost/ReactAPI/contacts.php/?id=${id}`,formData)
      //   axios({
      //     method: 'post',
      //     url: `http://localhost/ReactAPI/contacts.php/?id=${id}`,
      //     data: formData,
      //     config: { headers: {'Content-Type': 'multipart/form-data' }}
      // })
        .then(function (response) {
            //handle success
            console.log(response.data);
            if(response.status === 200) {
              alert("Contact update successfully.");
            }
        })
        .catch(function (response) {
            //handle error
            console.log(response)
        });
    }
    return(
       
         <div class="wrapper">
          <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <h2 class="mt-5 title">Edit Users</h2>
                   <div class="boxx"> 
                      <p class="para">Please fill this form to create record to the database.</p>
                      <form onSubmit={handleSubmit}>
                        <table class="gfg" >
                          <tbody>
                          
                             <tr>
                                <th class='heading'>
                                <label>Name:</label>
                              </th>
                              <td>
                                <input type="text" name="name" value={inputs.name} onChange={handleChange}/>
                              </td>
                           </tr>

                           <tr>
                               <th class='heading'>
                                 <label>Email:</label>
                               </th>
                               <td>
                                  <input type="text" name="email" value={inputs.email} onChange={handleChange}/>
                               </td>
                          </tr>

                          <tr>
                               <th class='heading'>
                                 <label>City:</label>
                               </th>
                               <td>
                                  <input type="text" name="city" value={inputs.city} onChange={handleChange}/>
                               </td>
                          </tr>

                          <tr>
                               <th class='heading'>
                                  <label>Age:</label>
                               </th>
                               <td>
                                   <input type="text" name="age" value={inputs.age}  onChange={handleChange}/>
                               </td>
                          </tr>

                          <tr>
                                <th class='heading'>
                                   <label>Job:</label>
                                </th>
                                <td>
                                  <input type="text" name="job"value={inputs.job}  onChange={handleChange}/>
                                </td>
                          </tr>

                           </tbody>
                        </table>
                         <div class="buttons">
                          <input type="submit" class="btn btn-primary" value="Submit"/>
                          <a href="/" class=" cancel btn btn-secondary ml-2">Cancel</a>
                          </div>
                     </form>
                   </div>
                </div>
            </div>        
        </div>
    </div>
       
    )
}

// export default function EditUser(){

//   const [useredit,setuseredit]=useState({ id:'', name:'', email:'', city:'', age:'', job:'' });
//   const history=useNavigate();
//   const {id}=useParams();

//   useEffect(()=>{
 
// const edituserid=async()=>{
// const reqdata=await fetch();
// const res=reqdata.json();

// }
// edituserid();
//   },[]);



//     return(
//       <div className="container">
//         <h1 className="page-header text-center">Update Contact</h1>
//               <Link to="/" className="btn btn-primary btn-xs">Home</Link>
//         <div className="col-md-12">
//             <div className="panel panel-primary">
//                 <div className="panel-body">
//                 <form >
//                 <input type="hidden" name="id" />
//                 <label>Name</label>
//                 <input type="text" name="name" className="form-control"  />
  
//                 <label>Email</label>
//                 <input type="email" name="email" className="form-control"  />
  
//                 <label>Age</label>
//                 <input type="text" name="age" className="form-control"  />
  
//                 <label>City</label>
//                 <input type="text" name="city" className="form-control" />
  
//                 <label>Job</label>
//                 <input type="text" name="job" className="form-control"  />
//                 <br/>
//                 <input type="submit" className="btn btn-primary btn-block" value="Update Contact" />
//             </form>
//                 </div>
//             </div>
//             </div>
//                </div>
//     );
// }