import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
export default class Quote extends React.Component{
    constructor(props){
        super(props);
        
    }
    
    render(){
        const color = "rgb("+(this.props.color.r - 40)+","+(this.props.color.g - 40)+","+(this.props.color.b - 40)+")";
        return (
            <div >
                
                <span id ={'text'} style={{fontFamily:"Comic Sans MS",fontStyle:"italic",color:color}}>
                    {this.props.quote.text}
                </span>
                <br/>
                <span className={'center'}id={'author'} style={{fontFamily:"Cedarville Cursive",fontSize:"1.4em",color:color}}>
                    <em>{this.props.quote.author}</em>
                </span>
            </div>
        )
    }
}