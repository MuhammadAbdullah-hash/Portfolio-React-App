import React, { Component } from "react";
import { render } from "react-dom";


export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state={var:false,
    email: "",
    phone: "",
    you_link : "",
    git_link: "",
    fab_link:"" ,
    linkd_link:"" ,     
    }

    this.get_data();
  }

  get_data(){

    fetch("/api/info").then((responce)=> responce.json()  ).then( (data)=> {  
      this.setState({
        var:true,
        email: data.email,
        phone: data.phone,
        you_link : data.you_link,
        git_link: data.git_link,
        fab_link: data.fab_link ,
        linkd_link: data.linkd_link ,     
      })
    });

  }

  render() {

    if(this.state.var){
      console.log('in render'  , this.state)
          var [you , you_link]  = ['_blank' , this.state.you_link]
          var  [git , git_link]  = ['_blank' , this.state.git_link]
          var [fab , fab_link] = ['_blank' , this.state.fab_link]
          var [link , linkd_link] =['_blank' , this.state.linkd_link]

          if(you_link == "" ){
            you_link="#"
            you = ''
          }
          if(git_link == "" ){
            git_link="#"
            git = ''
          }
          if(fab_link == "" ){
            fab_link="#"
            fab = ''
          }
          if(linkd_link == "" ){
            linkd_link="#"
            link = ''
          }

          console.log(linkd_link)


    }
    return (
      <div>
        <div id="footer-container"  >
            <div id='name_desc-1'> 
              <h2>Contact Me</h2>
            </div>
            <div id ='footer-grid'>
             
              <div>
                <p className='det'>Email : {this.state.email}</p>
                <p className='det'>Phone : {this.state.phone}</p>
              </div>

              <div>
                <p>Accounts</p>
                <div className="btn-group" role="group" aria-label="Basic example">
                  <a   className="fa fa-youtube add" target = {you} href={you_link}></a>
                  <a   className="fa fa-github add" target = {git} href={git_link}></a>
                  <a   className="fa fa-facebook add" target = {fab} href={fab_link}></a>
                  <a   className="fa fa-linkedin add" target = {link} href={linkd_link}></a>
                </div>
              </div>

            </div>  
        </div>
      </div>
    );
  }
}
