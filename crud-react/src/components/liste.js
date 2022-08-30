import React from 'react';
import {  BrowserRouter as Router,  Route,  Routes, Link} from "react-router-dom";
import api from "../SERVICES/api";

class liste extends React.Component {
    constructor(props) {
        super(props);
        
    }
   state = { datac:false,
            employees:[]


} 


deletereg= (id)=>{
    console.log(id);
    

    fetch(api+"?borrar="+id)
    .then(res=>res.json())
    .then((datar)=>{
        console.log(datar);
    //this.setState({datac:true, employees:datar})
    this.datach();
})
    .catch(console.log)    
    
        
    }


   datach(){
    fetch(api)
    .then(res=>res.json())
    .then((datar)=>{
        console.log(datar);
    this.setState({datac:true, employees:datar})
})
    .catch(console.log)    
    
        
    }
   componentDidMount(){
   this.datach();
   }
    render() { 
        const{datac, employees}=this.state
        if(!datac){
            return <div>CHARGING DATA...</div>
        }else{

        
        return (  
            <div className="card text-white bg-secondary mb-3 border-secondary mb-3 font-italic">
                <div className="card-header text-left">
                <Link  className="btn btn-warning text-white" to={"/create"}>Add a new song </Link>
                </div>
                <div class="card-body text-center">
                    <p class ="font-weight-light"><h5>Songs list</h5></p>
                    
                <table className="table" color='red' border={3}  class="table table-striped table-bordered table-dark table-hover text-white"  >
                   
            <thead class="thead-light text-success">
                <tr>
                    <th>ID</th>
                    <th>NAME OF THE SONG</th>
                    <th>SONGWRITER</th>
                    <th>YEAR</th>
                    <th>RECORD COMPANY</th>
                    <th>GENRE</th>
                    <th>MEDIA</th>
                    <th>OPTIONS</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee)=>(
                <tr key={employee.id}>
                    <td >{employee.id}</td>
                    <td>{employee.SONG_TITLE}</td>
                    <td>{employee.SONGWRITER}</td>
                    <td>{employee.YEARPUB}</td>
                    <td>{employee.RECORD_COMPANY}</td>
                    <td>{employee.GENRE}</td>
                    <td>{employee.MEDIA}</td>
                    <td>
                        <div className="btn-group" role="group" aria-label=''>

                        <Link  className="btn btn-info" to={"/edit/"+employee.id}

                        ><p class="font-italic">Edit data </p></Link>


                            <button type="button" className="btn btn-danger " 
                            onClick={()=>this.deletereg(employee.id)}
                                ><p class="font-weight-bolder">Delete data</p> </button>
                        </div>
                    </td>
                    
                </tr>
                )
                )}
                
                
            </tbody>
        </table>
       
                </div>
                <div className="card-footer text-muted">
                 
                </div>
            </div>
           

         );
        }
    }
    
}
 
export default liste;