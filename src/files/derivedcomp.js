import React,{Component} from 'react'

class MyComponent extends Component{
    constructor(props){
        super(props)
        this.state={myHero:"my Mother"};
        console.log("My family is my life")
    }

    static getDerivedStateFormProps(props,state){
        console.log("getDerivedStateFormProps called")
        return {myHero:props.name}
    }

    render(){
        return(
            <div>
                <h1>My inspiration {this.state.myHero}</h1>
            </div>
        )
    }
    componentDidMount(){
        console.log("componentdidmount called")
    }
}

export default MyComponent