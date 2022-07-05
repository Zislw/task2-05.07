import React from "react";
import "./AddContent.css"
import cont from"../content.json"
export class AddContent extends React.Component{
   state={
    jsonArray:[{display:"",url:""}]
    
   }
   getContent=()=>{
        let d=cont
        this.setState({jsonArray:[...d]})
   }
   
   
    render() {
        let i=0
    return(
       
        <div className="wrap">
        <h1>Welcome to my new site</h1>
       
        <div className="content">
            {this.state.jsonArray.map(item=>{return <div key={i++}><label>{item.display}{item.url}</label></div>})}</div>
        <input type="button" value="click me to get content" onClick={()=>{ this.getContent()}} />
        </div>
    )
   }
}