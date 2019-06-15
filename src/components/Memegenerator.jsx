import React, { Component } from 'react'
import mainlogo from './Trollface.png'

 class Memegenerator extends Component {
     state ={
         topText : "",
         bottomText: "",
         randomImage :{mainlogo},
         memeImages:[]
     }
     componentDidMount(){
         fetch("https://api.imgflip.com/get_memes")
         .then(response => response.json())
         .then(response =>{
            //  const {memes} = response.data
             //console.log(memes[0])
             this.setState({
                 memeImages: response.data.memes
                 
             })
         })
     }
     handleChange=(event)=>{
         const{name,value} = event.target
         this.setState({
             [name] : [value]
         })
     }
    render() {
        return (
            <div className="memeGenerator">
                <form action="" className="Form">
                    <input type="text" name="topText" onChange={this.handleChange}value={this.state.topText} placeholder="Enter Top Text"/>
                    <input type="text" name="bottomText" onChange={this.handleChange}value={this.state.bottomText}placeholder="Enter Bottom Text"/>
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="Problem"/>
                    <h2 className="toptext">{this.state.topText}</h2>
                    <h2 className="bottomtext">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Memegenerator
