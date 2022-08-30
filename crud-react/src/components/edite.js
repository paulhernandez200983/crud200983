import React, { Component }  from "react";
import { Link } from "react-router-dom";
import api from "../SERVICES/api";
class edite extends React.Component{
    constructor(props){
        super(props);
        this.state={
          
            datac:false, 
            employee:[]
            
        }
    }

    changeval=(e)=>{
        const state= this.state.employee;
        state[e.target.name]=e.target.value;
        this.setState({employee:state});
     }

     senddata =(e)=>{
        e.preventDefault();
        console.log("THE WAS DATA SENT");
        const{id, SONG_TITLE, SONGWRITER, YEARPUB, RECORD_COMPANY, GENRE, MEDIA}= this.state.employee;
        console.log(id);
        console.log(SONG_TITLE);
        console.log(SONGWRITER);
        console.log(YEARPUB);
        console.log(RECORD_COMPANY);
        console.log(GENRE);
        console.log(MEDIA);

        var datatosend = {id:id, SONG_TITLE:SONG_TITLE, SONGWRITER:SONGWRITER, YEARPUB:YEARPUB, RECORD_COMPANY:RECORD_COMPANY, GENRE:GENRE, MEDIA:MEDIA}


    fetch(api+"?actualizar=1",{
         method:"POST",
         body:JSON.stringify(datatosend)

    })
    
    .then(res=>res.json())
    .then((datar)=>{
        console.log(datar);
        this.props.history.push("/");
    
})
    .catch(console.log)   


    }

    componentDidMount(){
        console.log(this.props.match.params.id);

        fetch(api+"?consultar="+this.props.match.params.id)
        .then(res=>res.json())
        .then((datar)=>{
            console.log("=>" +datar);
        this.setState({datac:true, employee:datar[0]})
    })
        .catch(console.log)  

    }
    render(){
        const{datac, employee}=this.state
        if(!datac){
            return <div>CHARGING DATA...</div>
        }else{
        return(<div className="card   text-black bg-warning mb-3 border-secondary mb-3 text-success">
            <div className="card-header  text-white bg-dark mb-3  border-primary text-center font-weight-boldc" >
                Edit the song data
            </div>
          <div className="card-body font-weight-bold">
                

                <form onSubmit={this.senddata}>
                {employee.id+" "} 
                

                <div className="form-group">
                  <label htmlFor="">ID:</label>
                  <input type="text" readOnly className="form-control" value={employee.id}  name="id" id="id" aria-describedby="helpId"/>
                  <small id="helpId" className="text-muted">ID</small>
                </div>

                    <div className="form-group">
                      <label htmlFor="">Song title</label>
                      <input type="text" name="SONG_TITLE" value={employee.SONG_TITLE}onChange={this.changeval}  id="SONG_TITLE" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the name of the song</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Songwriter's name</label>
                      <input type="text" name="SONGWRITER" value={employee.SONGWRITER} onChange={this.changeval} id="SONGWRITER" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the songwriter's name</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Year of register</label>
                      <input type="text" name="YEARPUB" value={employee.YEARPUB} onChange={this.changeval}  id="YEARPUB" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the year of upload</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Record company</label>
                      <input type="text" name="RECORD_COMPANY" value={employee.RECORD_COMPANY} onChange={this.changeval} id="RECORD_COMPANY" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write your Record company</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Genre </label>
                      <input type="text" name="GENRE" value={employee.GENRE} onChange={this.changeval} id="GENRE" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the song genre</small>
                    </div>

                    <div className="form-group">
                      <label htmlFor="">Song Media</label>
                      <input type="text" name="MEDIA" value={employee.MEDIA} onChange={this.changeval} id="MEDIA" className="form-control" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the media that it wll appear</small>
                    </div>
                         <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">UPDATE SONG DATA</button>
                            <Link to={"/"} className="btn btn-danger">CANCEL OPTION</Link>
                          
                         </div>
               
                    </form>


            </div>
            <div className="card-footer text-muted">
               
            </div>
        </div>);
    }
    }
}
export default edite;