import React from 'react'
class Forms extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            userName:""
        }
    }
    onChange = (event)=>{
this.setState({
    userName:event.target.value
})
    }
    onSubmit = (event)=>{
        let value = this.state.userName
alert(value)
    }
    render(){
        return(
            <form onSubmit={this.onSubmit}>
              <div>
                <label>Username</label>
                <input type='text' value={this.state.userName} onChange ={this.onChange}/>
                <p>{this.state.userName}</p>
                <button type='submit'>Submit</button>
              </div>
            </form>
        )
    }
}
export default Forms