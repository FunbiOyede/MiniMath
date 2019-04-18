import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';




class App extends Component {

  state = { }

  onSubmit = (e) => {
    // prevent the form from submitting by itself
    e.preventDefault();
  }

   // getting the operation value
  getOperationValue = (e) =>{
    this.setState({
      operation:e.target.value
    })
  }
 // getting the expression value
  getExpressionValue = (e) =>{
    this.setState({
      expression:e.target.value
    })
  }

  fetchApi = () =>{
    fetch(`https://newton.now.sh/${this.state.operation}/${this.state.expression}`)
      .then((res) =>{
        return res.json()
      })
      .then((data)=>{
        let answer = data.result;
        this.setState({
          result:answer
        })
    })  
    this.setState({
      operation:" ",
      expression:" "
    })
  }

  onFocus = () =>{
    this.setState({
      result:" "
    })
  }
  render() {
  
    return (
      <div className="app">
        <Header />    
    
 

        <form style = {FormContainer} onSubmit={this.onSubmit}>

          <label style={label}>operation</label>
          <input style={inputStyle} value={this.state.operation} type='text' placeholder='Enter  Operation E.g integrate' onChange={this.getOperationValue} onFocus={this.onFocus}/>

          <label style={label}>expression</label>
          <input style={inputStyle} value={this.state.expression} type='text' placeholder='Enter mathematical Expression E.g x^2+2x' onChange={this.getExpressionValue}/><br/>

          <button style={btn} onClick={this.fetchApi}>solve</button>
        
          <textarea  style={AnswerBox} value={this.state.result}></textarea>
        </form>;
        
             
      
      </div> 
     
    );
  }
}

export default App;

let inputStyle={
  display:'block',
  width:'80%',
  padding:'15px',
  margin:'20px',
  outline:'none',
  borderRadius:'4px',
  borderWidth:'1px',
  letterSpacing:'0.5px',
  fontSize:'13px'
 }

let FormContainer = {
  display:'inline-block',
  width:'45%'
 }

let label={
  textAlign: 'center',
  color:'white',
  position: 'relative',
  left: '-5%',
  fontVariant:'small-caps'
 }

let btn = {
  padding:'15px',
  borderRadius:'4px',
  borderWidth:'1px',
  textAlign: 'center',
  width:'50%',
  color:'#fff',
  backgroundColor:'#243053',
  border:'2px solid white',
  position: 'relative',
  left: '-6%',
  fontVariant:'small-caps'
 }


let AnswerBox = {
  display:'block',
  width:'50%',
  padding:'8px',
  margin:'20px',
  outline:'none',
  borderRadius:'4px',
  borderWidth:'1px',
  letterSpacing:'0.5px',
  fontSize:'13px',
  position:'relative',
  left:'15%'
}