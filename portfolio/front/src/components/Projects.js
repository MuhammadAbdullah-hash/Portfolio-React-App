import React, { Component } from "react";
import { render } from "react-dom";


export default class Projects extends Component{
	constructor(props){
		super(props);
		this.state = {var : false , proj_detail : [] };
		this.get_details();
	}

	get_details(){
		fetch('/api/info').then( (responce)=>responce.json() ).then( (data)=>{  
			this.setState({
				var : true,
				proj_detail : data.projects,
			})
		})
	}


	componentDidUpdate() {
		// IF YOU WANT TO USE STATE DATA AFTER UPDATING
		// RUNS AFTER STATE IS UPDATED  
		// console.log( 'PROPS' , this.props.flag)
	}


	render(){
		let lis = this.state.proj_detail;
		const items = [];
		const see_more = [];

		if(lis.length > 0){

			if(this.props.flag == "false"){
				var show_lim = 6 
				see_more.push( <a class="btn btn-outline-success my-2 my-sm-0" type="button" href='/projects'>See More</a>)
			}
			
			if(this.props.flag == 'true'){
				var show_lim = lis.length+1
			}
			

			for (let i = 0; i < show_lim; i++) {
				if(lis[i] != undefined){
					let you  = '_blank'
					let  git  = '_blank'
					let fab = '_blank'
					if(lis[i].youtube == "" ){
						lis[i].youtube="#"
						you = ''
					}
					if(lis[i].github == "" ){
						lis[i].github="#"
						git = ''
					}
					if(lis[i].facebook == "" ){
						lis[i].facebook="#"
						fab = ''
					}
					items.push( 
						<div className="card" style={{width: 16 + "rem"}}>
		  				  <div className="card-body">
						    <h5 className="card-title">{lis[i].title}</h5>
						    <p className="card-text">{lis[i].desc}</p>
							<div className="btn-group" role="group" aria-label="Basic example">
							  <a  target={you} className="fa fa-youtube" href={lis[i].youtube }></a>
							  <a  target={git} className="fa fa-github" href={lis[i].github }></a>
							  <a  target={fab} className="fa fa-facebook" href={lis[i].facebook }></a>
							</div>
						  </div>
						</div>
					) }
				 }
		}

		else{
			items.push(
				<p id='err-msg'> Sorry you have no projects to display :( </p>
				)
		}

		return(
			<div id = 'project_sec'>
	            <div id='skill_heading's> 
					<h2 style={{color : "white"}}>My Projects</h2>
				</div>
				<div id="grid-container">
					{items}
				</div>
				{see_more}
			</div>
	);
	}


}