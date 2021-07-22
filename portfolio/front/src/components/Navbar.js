import { render } from "react-dom";
import React, { Component } from "react";
import Home from "./Home";


export default class Navbar extends Component{
	constructor(props){
		super(props)
		this.state = {var : false}
		this.get_name();
	}

	get_name(){
		fetch("/api/info").then( (responce)=> responce.json() ).then( (data)=>{ 
			this.setState({
				var : true,
				first_name  : data.first_name,
				last_name  : data.last_name,
			})
		})
	}

	render( ){
		return(
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			  <div className="container-fluid">
			    <a className="navbar-brand" href="#">{this.state.first_name}</a>
			    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
			      <span className="navbar-toggler-icon"></span>
			    </button>
			    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
			      <div className="navbar-nav">
			        <a className="nav-link active" aria-current="page" href="#">Home</a>
			        <a className="nav-link" href="#">About</a>
			        <a className="nav-link" href="#">Skills</a>
			        <a className="nav-link" href="#">Projects</a>
			      </div>
			    </div>
			  </div>
			</nav>
	);
	}
}