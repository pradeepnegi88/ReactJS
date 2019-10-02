import React from 'react'

class Counter extends React.Component{
    constructor(){
        super()
        this.state = {
            count:0
        }
    }
     click (){
      this.setState((prevState)=>({
          count:prevState.count+1
      }))
    } 
    incrementByFive(){
        this.click()
        this.click()
        this.click()
        this.click()
        this.click()
    }
    render(){
return(<div>
<h5>  Counter: {this.state.count} </h5>
<button onClick={()=>this.incrementByFive()}>Click</button>
</div>);
    }
}

export default Counter