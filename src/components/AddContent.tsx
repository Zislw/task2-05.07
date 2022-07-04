import React from "react";
import "./AddContent.css"
import cont from"../content.json"
export class AddContent extends React.Component{
   state={
    con:""
   }
   getContent=()=>{
        let x=cont.content
        this.setState({con:x})

   }
   
   
    render() {
    return(
        <div className="wrap">
        <h1>Welcome to my new site</h1>
        <div className="content">{this.state.con}</div>
        <input type="button" value="click me to get content" onClick={()=>{ this.getContent()}} />
        </div>
    )
   }
}