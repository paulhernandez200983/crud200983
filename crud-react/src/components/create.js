import React from 'react';
import { Link } from "react-router-dom";
import api from "../SERVICES/api";
class create extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            SONG_TITLE:"", SONGWRITER:"", YEARPUB:"", RECORD_COMPANY:"", GENRE:"", MEDIA:""
         }
    }
   
    changeval=(e)=>{
       const state= this.state;
       state[e.target.name]=e.target.value;
       this.setState({state});
    }
   senddata =(e)=>{
    e.preventDefault();
    console.log("THE WAS DATA SENT");
    const{SONG_TITLE, SONGWRITER, YEARPUB, RECORD_COMPANY, GENRE, MEDIA}= this.state;
    console.log(SONG_TITLE);
    console.log(SONGWRITER);
    console.log(YEARPUB);
    console.log(RECORD_COMPANY);
    console.log(GENRE);
    console.log(MEDIA);
     
    var datatosend = {SONG_TITLE:SONG_TITLE, SONGWRITER:SONGWRITER, YEARPUB:YEARPUB, RECORD_COMPANY: RECORD_COMPANY, GENRE: GENRE, MEDIA:MEDIA}
app.UseCors(x => x
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .SetIsOriginAllowed(origin => true) // allow any origin
                    .AllowCredentials())

    fetch(api+"?insertar=1",{
         method:"POST",
        mode: 'cors',
         body:JSON.stringify(datatosend)

    }
    
    )
    .then(res=>res.json())
    .then((datar)=>{
        console.log(datar);
    //this.setState({datac:true, employees:datar})
})
    .catch(console.log)   

   }
    render() { 
        const{SONG_TITLE, SONGWRITER, YEARPUB, RECORD_COMPANY, GENRE, MEDIA}= this.state;
        return (  
           <div className="card text-left">
            <div className="card-header text-black bg-secondary mb-3 text-center">
                <h5>Register a song Form</h5>

            </div>
               <div className="card-body bg-dark mb-3 text-white">
                <form onSubmit={this.senddata}>
                    <div className="form-group ">
                      <label for="">Song title</label>
                      <input type="text" name="SONG_TITLE" onChange={this.changeval} value={SONG_TITLE} id="SONG_TITLE" className="form-control bg-dark secondary text-white" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the name of the song</small>
                    </div>

                    <div className="form-group">
                      <label for="">Songwriter's name</label>
                      <input type="text" name="SONGWRITER" value={SONGWRITER} onChange={this.changeval} id="SONGWRITER" className="form-control bg-dark secondary text-white" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the songwriter's name</small>
                    </div>

                    <div className="form-group">
                      <label for="">Year of register</label>
                      <input type="text" name="YEARPUB" value={YEARPUB} onChange={this.changeval}  id="YEARPUB" className="form-control bg-dark secondary text-white" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the year of upload</small>
                    </div>

                    <div className="form-group">
                      <label for="">Record company</label>
                      <input type="text" name="RECORD_COMPANY" value={RECORD_COMPANY} onChange={this.changeval} id="RECORD_COMPANY" className="form-control bg-dark secondary text-white" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write your Record company</small>
                    </div>

                    <div className="form-group">
                      <label for="">Genre </label>
                      <input type="text" name="GENRE" value={GENRE} onChange={this.changeval} id="GENRE" className="form-control bg-dark secondary text-white" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the song genre</small>
                    </div>

                    <div className="form-group">
                      <label for="">Song Media</label>
                      <input type="text" name="MEDIA" value={MEDIA} onChange={this.changeval} id="MEDIA" className="form-control bg-dark secondary text-white" placeholder="" aria-describedby="helpId" />
                      <small id="helpId" className="text-muted">Write the media that it wll appear</small>
                    </div>
                         <div className="btn-group" role="group" aria-label="">
                            <button type="submit" className="btn btn-success">ADD A NEW SONG</button>
                            <Link to={"/"} className="btn btn-danger">CANCEL OPTION</Link>
                          
                         </div>
               
                    </form>
                    </div>
                    <div className="card-footer text-muted">
                        
                        
                   
              </div> 
           </div> 
         );
    }
}
 
export default create;
