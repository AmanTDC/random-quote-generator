import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Navbar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <nav className={'navbar'}>
                Random Quote Generator
            </nav>
        );
    }
}