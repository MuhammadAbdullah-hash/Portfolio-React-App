import React, { Component } from "react";
import { render } from "react-dom";


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state={ var : false }
    this.get_data();
   }

  get_data(){
    fetch("/api/info").then((responce)=> responce.json()  ).then( (data)=> {  
      this.setState({
        var:true,
        first_name : data.first_name,
        last_name : data.last_name,
        desc : data.desc,
        about : data.about, 
        prof_img  : data.img,
      })
    });

  }

  render() {
    return (
      <div>
        <div id="home-container"  >
            <div id='name_desc'> 
              <h2>{this.state.first_name+' '+this.state.last_name}</h2>
              <code id='desc'>{this.state.desc}</code>
            </div>
            <div id='img_holder'>
              <div >
                <img className='circleBase type1' src={this.state.prof_img} /> 
              </div>            
            </div>
        </div>

      </div>
    );}

  

}
