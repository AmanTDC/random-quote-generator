import React from 'react';
import Quote from'./quote.jsx'
import Handle from'./social-media-handle.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar'
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state={
            quotes : {
                texts :["The greatest glory in living lies not in never falling, but in rising every time we fall",
            "The way to get started is to quit talking and begin doing.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
    "If life were predictable it would cease to be life, and be without flavor.",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
"Life is what happens when you're busy making other plans.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"When you reach the end of your rope, tie a knot in it and hang on.",
"Always remember that you are absolutely unique. Just like everyone else."],
                authors : [
                    "Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt","Oprah Winfrey",
                    "James Cameron","John Lennon","Mother Teressa","Franklin D. Roosevelt","Margaret Mead"
                ]
            },
            quote : {text:"sdsd",author:"sad"},
            backgroundColor : {
                r:0,
                g:0,
                b:0
            }
        }
        // this.state = {
        //     text : 0
        // }
        this.changeQuote = this.changeQuote.bind(this);
        this.newColor = this.newColor.bind(this);
    }
    
    getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }
    setNewColor(obj){
        return "rgb("+obj.r+","+obj.g+","+obj.b+")";
    }
    newColor(){
        return {r:this.getRndInteger(40,200) , g:this.getRndInteger(40,200),b:this.getRndInteger(40,200)}
    }
    changeQuote (){
        var ind = this.getRndInteger(0,9)
        this.setState(state=>({
            quotes : state.quotes,
            quote:{
                text : (state.quotes.texts[ind]),
                author : (state.quotes.authors[ind])
                
            },
            backgroundColor : this.newColor()
        }))
        
    }
    componentDidMount(){
        this.changeQuote();  
        
    }
    componentDidUpdate(){
        document.body.style = "background : "+this.setNewColor(this.state.backgroundColor);
    }
    render(){
        
        return( 
            <div>
        <div id ={'quote-box'} className={'center container border border-primary rounded'} style={{marginTop:"10%",width:"400px",paddingLeft:"35px",paddingRight:"30px",backgroundColor:this.setNewColor({r : this.state.backgroundColor.r+15,g : this.state.backgroundColor.g+15,b : this.state.backgroundColor.b+15})}}>
            
            <div className = {'row'}style={{paddingTop:"20px"}}>
            <Quote id  = {'text'} quote={this.state.quote} color={this.state.backgroundColor}/>
            </div>
            <div className = {'row'} style={{paddingTop:"50px",paddingBottom:"20px"}}>
                <div className={'col'}>
                    <Handle id = {'tweet-quote'} href = {'https://twitter.com/intent/tweet'}/>
                </div>
                <div className = {'col'}>
                    <button className={'text-end btn btn-primary'} onClick = {this.changeQuote} id = {'new-quote'}  >New Quote</button>
                </div>
            </div>
        </div>
        </div>
        )
    }
}
export default Container;