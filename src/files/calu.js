import React, { Component } from 'react'

class Calu extends Component {
  constructor(props) {
      super(props)
  
      this.state = {firstNum:'',secondNum:''
           
      }
  }
  doCalculation=(event)=>{
      let name=event.target.name;
      let value=event.target.value;
    if(!Number(value)){
        alert('please enter number')
    }else
      this.setState({[name]:value})
  }
  
    render() {
        return (
            <div>
                <form onSubmit={this.submitFormHandler}>
                <p>Enter first num:
                <input type="text" name=" firstNum" onChange={this.doCalculation}  />
                </p>
                
                <p>Enter secondt num:
                <input type="text" name=" secondNum" onChange={this.doCalculation}  />
                </p>
                </form>            

                <p> entered first num as
                <h1>{this.state.firstNum}</h1>
                and second num
                <h1>{this.state.firstNum}</h1></p>
            </div>
        )
    }
}

export default Calu