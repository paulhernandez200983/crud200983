
import './App.css';

import liste from "./components/liste";
import {  BrowserRouter as Router,  Route,  Routes, Link} from "react-router-dom";
import create from "./components/create";
import edite from "./components/edite";
function App() {
  return (
    <Router> 
      <nav className="navbar navbar-expand navbar-light bg-light  ">
          <div className="nav navbar-nav">
              <Link className="nav-item nav-link active" to={"/"}>System <span class="sr-only">()</span></Link>
              <Link className="nav-item nav-link" to={"/register.html"}>Register</Link>
              <a href='register.html'>Register</a>
              <Link className="nav-item nav-link" to={"/liste"}>List all songs</Link>
              <Link className="nav-item nav-link" to={"/create"}>Register a song</Link>
             
              <Link className="nav-item nav-link" to={"/EXIT"}>Exit</Link>
          </div>
      </nav>
      
    <div className="container bg-dark mb-3 text-white text-center" >
     <br></br>
  
    ASCAP BASED CRUD by Paul Hernández 
    
<img src="public/logo512.png" class="mt-5" alt=""/>
       
 
    
      <Route exact path="/liste" component={liste}></Route>
     
      <Route path="/create" component={create}></Route>
      <Route path="/edit/:id" component={edite}></Route>

      

    </div>
    </Router>
  );
  

}

export default App;
