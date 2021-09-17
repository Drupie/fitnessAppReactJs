import React from "react";
import ExerciseList from "../ExercisesList";
import Welcome from "../Welcome"
import Loading from "../Loading";
import NotFound from "./NotFound";
class Exercise extends React.Component{
state = {
    data:[],
    Loading:true,
    error:null
}
 async componentDidMount(){
    await this.fetchExercise()
}
fetchExercise = async ()=>{
    try {
        let res = await fetch('http://localhost:8888/api/exercises')
        let data = await res.json()
        this.setState({
            data, 
            Loading:false
        })
        console.log(data);  
    } catch (error) {
        this.setState({
            Loading:false,
            error
        })
    }
   
}

render()
{
    if(this.state.Loading)
    return <Loading/>
    if(this.state.error)
    return <NotFound/>
    return(
        <div>
            <Welcome
                username="Saul"
            />
           <ExerciseList
           exercises={this.state.data}
           />
          
        </div>
    )
}

}
export default Exercise;