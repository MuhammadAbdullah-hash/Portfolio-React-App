import React, { Component } from "react";
import { render } from "react-dom";


export default class About extends Component{
	constructor(props){
		super(props);
		this.state = {var:false};
		this.get_data();
	}

	get_data(){
		fetch("/api/info").then( (responce)=>responce.json() ).then( (data)=>{ 
			this.setState({
				var:true,
				first_name : data.first_name,
				last_name : data.last_name,
				about : data.about, 
			})
		})
	}

	render(){

		return(
        <div id="home-container"  >
            <div id='about'> 
        	  <h4>About {this.state.first_name}</h4>
              <p id='about-1'>{this.state.about}</p>
            </div>
        </div>
	);
	}


}