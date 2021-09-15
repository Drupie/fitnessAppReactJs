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
            />
               </div>
            </div>
            
           
        )
    }
}
export default ExerciseNew;