import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Create extends React.Component {

  constructor(props) {
      super(props);
      this.state = {name: '', email:'', city:'', age:'', job:''};
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      const state = this.state
      state[event.target.name] = event.target.value
      this.setState(state);
  }
  handleSubmit(event) {
      event.preventDefault();
   
      let formData = new FormData();
      formData.append('name', this.state.name)
      formData.append('email', this.state.email)
      formData.append('city', this.state.city)
      formData.append('age', this.state.age)
      formData.append('job', this.state.job)
   
      axios({
          method: 'post',
          url: 'http://localhost/ReactAPI/contacts.php/',
          data: formData,
          config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response)
          alert('New Contact Successfully Added.');  
      })
      .catch(function (response) {
          //handle error
          console.log(response)
      });
   
    } 


  render(){
      return (
          <div className="container">
              <h1 className="page-header text-center">Create Employee</h1>
              <Link to="/" className="home btn btn-primary btn-xs">Home</Link>
              <div className="col-md-12">
             
              <div className="box panel panel-primary">
              <div className='paragraph'> <p className='para'>* Please fill the form to create a new Employee </p></div>
              <br/>
                  <div className=" boxs panel-body">
                  <form onSubmit={this.handleSubmit}>
                  <label>Name</label>
                  <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                  <br/>
                  <label>Email</label>
                  <input type="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                  <br/>
                  <label>Age</label>
                  <input type="text" name="age" className="form-control" value={this.state.age} onChange={this.handleChange} />
                  <br/>
                  <label>City</label>
                  <input type="text" name="city" className="form-control" value={this.state.city} onChange={this.handleChange} />
                  <br/>
                  <label>Job</label>
                  <input type="text" name="job" className="form-control" value={this.state.job} onChange={this.handleChange} />
                  <br/>
                  <input type="submit" className="btn btn-primary btn-block" value="Create Contact" />
              </form>
                  </div>
              </div>
              </div>
          </div>
      );
  }
}

export default Create;