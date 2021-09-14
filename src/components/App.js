import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Exercise from "../components/pages/Exercise"
import ExerciseNew from "../components/pages/ExerciseNew"
import NotFound from '../components/pages/NotFound'

function App(){

return (
    <BrowserRouter>
    <Switch>

    <Route exact path="/exercise" component={Exercise} />
    <Route exact path="/exercise/new" component={ExerciseNew} />
    <Route component={NotFound}/>
    </Switch>
           
    </BrowserRouter>


    )
    

}
export default App; 