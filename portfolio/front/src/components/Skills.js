import React, { Component } from "react";
import { render } from "react-dom";


export default class Skills extends Component{
	constructor(props){
		super(props);
		this.state = {var : false,
			skills : [],

		};
		this.get_data();
	}

	get_data(){
		fetch("/api/info").then((responce)=> responce.json()  ).then( (data)=> {  
			this.setState({
			var:true,
			skills : data.skills,
			})
		});

	}

	change_prop(){
		let ele = document.getElementById('show_skill');
		// ele.style.gridTemplateRows = "repeat( 4 , 1fr )";
		ele.style.color = 'snow';

	}

	componentDidMount(){
		// ALL SCRIPT TAGE JAVASCRIPT . IT RUNS FIRST TIME WHEN HTML
     	 // console.log(window.window.innerHeight , window.window.innerWidth);
		// IS PLAVED IN DOM
		// BEFORE UPDATING OF ANY STATE
	}



	
	animate_progress(){
		let arr = this.state.skills;

		let container = document.getElementById('show_skill');
		let container_2 = document.getElementById('skill-container');
		if(arr.length == 0){
			container_2.style.height = '300px';
		}
		
		container.style.gridTemplateRows = `repeat( ${arr.length}, 1fr)`
		
		
		for(let each in arr){
			let id_ele = "#"+each+'-skill'
			let wid_ele = arr[each][1]
			// move( id_ele , wid_ele )
			$(document).ready( function(){
			 $(id_ele).animate({width: wid_ele+'%'},1500); 
			})
		}

	}

	componentDidUpdate() {
		// IF YOU WANT TO USE STATE DATA AFTER UPDATING
		// RUNS AFTER STATE IS UPDATED
		this.animate_progress();
  		}

	render(){
		let my_var = this.state.skills;
		const new_lis = [];
		for(let val in my_var){
			let health = my_var[val][1];
			new_lis.push( 
				<div>
					<li id='skill_heading'>{my_var[val][0]}</li> 
					<div className="progress-1"  >
						<div className="progress-bar bg-success" id={val+'-skill'} role="progressbar" style={{width: 1 + "%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">						
							{health}%
						</div>
					</div>
				</div>
				
				)}


		return(
        <div id="skill-container"  >
            <div id='skill_heading'> 
				<h2>Skills</h2>
			</div>
			<div id='show_skill'>
	        	{new_lis}
	        </div>
        </div>
	);
	}


}