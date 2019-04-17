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
      <div className="App">
        <Header />    
    
 

        <form style = {container} onSubmit={this.onSubmit}>
        <label style={label}>Operation</label>
        <input style={inputStyle} value={this.state.operation} type='text' placeholder='Enter  Operation E.g integrate' onChange={this.getOperationValue} onFocus={this.onFocus}/>

        <label style={label}>Expression</label>
        <input style={inputStyle} value={this.state.expression} type='text' placeholder='Enter mathematical Expression E.g x^2+2x' onChange={this.getExpressionValue}/><br/>
        <button style={btn} onClick={this.fetchApi}>Solve</button>
        </form>;
       
         {/* icon herre */}
        <textarea  style={AnswerBox} value={this.state.result}></textarea>
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
  borderRadius:'2px',
  borderWidth:'1px',
  letterSpacing:'0.5px',
  fontSize:'13px'
 }
let container = {
  paddingTop:'10%',
  display:'inline-block',
  width:'45%'
 }

let label={
  textAlign: 'center',
  color:'white',
  position: 'relative',
  left: '-5%'
 }

let btn = {
  padding:'10px',
  borderRadius:'2px',
  borderWidth:'1px',
  textAlign: 'center',
  width:'50%',
  color:'#def2f1',
  backgroundColor:'black',
  border:'2px solid black',
  position: 'relative',
  left: '-6%'
 }


let AnswerBox = {
  display:'block',
  width:'30%',
  padding:'3px',
  margin:'16px',
  outline:'none',
  borderRadius:'2px',
  borderWidth:'1px',
  letterSpacing:'0.5px',
  fontSize:'17px',
  position: 'relative',
  right: '-30em'
}