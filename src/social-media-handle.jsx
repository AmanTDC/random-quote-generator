import React from'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class Handle extends React.Component{
    constructor(props){
        super(props);

    }
    handleClick = ()=>{
        
    }
    render(){
        return (
            <div>
                <a href = {this.props.href} id = {this.props.id} target={'_blank'}>
                    Tweet
                </a>
            </div>
        )
    }
}