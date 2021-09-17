import React from "react" ;
import ExerciseForm from "../ExerciseForm" ;
import Card from "../Card" ;
class ExerciseNew extends React.Component{
   state ={
       form:{
        title:'',
        description:'',
        img:'',
        leftColor:'',
        rightColor:''
       }
   }
   handleChange = e =>{
       this.setState({
       form:{
           ...this.state.form,
            [e.target.name]:e.target.value
           }
       })
   }
   handleSubmit = e => {
    e.preventDefault()
    try {
     let config = {
         method: 'POST',
         headers:{
             'Accept': 'application/json',
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(this.state.form)
         
     }
     let res =  fetch('http://localhost:8888/api/exercises',config)
     let json = res.json()
    } catch (error) {
        
    }
    console.log(this.state)
}
    
    render(){
        return (
            <div className="row">
                 <div className="col-sm-8">
                 <Card
                 {...this.state.form}
                 />
               </div>
               <div className="col-sm-4">
               <ExerciseForm
            onChange={this.handleChange}
            form={this.state.form}
            onSubmit={ this.handleSubmit}
            />
               </div>
            </div>
            
           
        )
    }
}
export default ExerciseNew;