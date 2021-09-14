
import React from "react";
import Card from "./Card";
import Launcher from "./Launcher";
function ExerciseList(props){
return(

    <div>
 {
        props.exercises.map((exercise)=>{
     return (
         <div>
                        <Card
                        title={exercise.title}
                        description={exercise.description}
                        img={exercise.img}
                        leftColor="#A74CF2"
                        rightColor="#617BFB"
                    />
                   
             </div>    
                    )
                
                }
                                )
            }
            <div>
                <Launcher
                
                />
            </div>

    </div>

)
}

export default ExerciseList;