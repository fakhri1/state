import React, { Component } from 'react'
import Profile from './profile'
import Photo1 from '../imageInPublic.jpg'
import { Button } from 'react-bootstrap'


export default class profileParents extends Component {
    constructor(props) {
    super(props)
    this.state = {
        name:'fakhri',
        description :'i am devolepper',
        image : Photo1 ,
        show: false,
    }
}
toggle(){
    this.setState ({show:!this.state.show})
}




    render() {
        return (
            <div>
                <h1>we are go my code</h1>
                <button onClick={()=>this.toggle()} >click me</button>
{this.state.show? <Profile name={this.state.name} description={this.state.description} 
                image={this.state.image}/>:null}
            </div>
        )
    }
}
