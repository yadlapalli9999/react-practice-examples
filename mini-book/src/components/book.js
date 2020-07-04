import React, { Component } from 'react'

export default class book extends Component {
    constructor(props){
        super(props)
        this.state={
            count:1
        }
    }
    // handleClick = () =>{
    //     console.log("you clicked me");
    //     console.log(this.state.count)
        
    // }
    addCount = () =>{
        this.setState({count : this.state.count + 1})
    }
    lowerCount = () =>{
        this.setState({count : this.state.count - 1})
    }
    resetCount = () =>{
        this.setState({count : 0})
    }
    render() {
        const {img,title, author} = this.props.info;
        return (
            <article className="book">
                <img src={img} width="150" alt={img}/>
                <div>
                  <h4>Title : {title}</h4> 
                  <h6>Author : {author}</h6> 
        <h6>count:{this.state.count}</h6>
                  <button type="button" onClick={this.addCount}>add count</button>
                  <button type="button" onClick={this.lowerCount}>lower count</button>
                  <button type="button" onClick={this.resetCount}>reset count</button>
                </div>
              
            </article>
        )
    }
}
