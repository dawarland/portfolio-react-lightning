import React, {useContext, useState, useEffect} from "react";
import Header from "./Component/Header";
import { Switch, Route } from 'react-router-dom';
import { AuthProvider } from "./Context";

import Experience from "./Component/Experience";
import Education from "./Component/Education";
import Home from "./Component/Home";
import Award from "./Component/Award";
import Skill from "./Component/Skill";
import Interest from "./Component/Interest";
import Salesforce from "./Component/Salesforce";
import Project from "./Component/Project";
import Loading from "./Component/Loading";


function App() {

    useEffect(() => {
        /*fetch("https://williamsarland-dev-ed.my.salesforce.com/services/data/v51.0/query/?q=SELECT+name+from+Account", {
            headers: {
                Authorization: "Bearer token"
            }
        })*/

        /*fetch('http://localhost:8080/auth/whoami', {
            method: 'get',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(function(response) {
            if (response.ok) {
                response.json().then(function(json) {
                    setUser({user: json});
                });
            } else if (response.status !== 401) { // Ignore 'unauthorized' responses before logging in
                console.error('Failed to retrieve logged user.', JSON.stringify(response));
            }
        });*/
    });
    /*if(!!user){
        return (<div>Loading...</div>)
    }*/
    return (
        <AuthProvider>
            <Header />
            <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/Home' component={Home}/>
                    <Route exact path='/Education' component={Education}></Route>
                    <Route exact path='/Experience' component={Experience}></Route>
                    <Route exact path='/Award' component={Award}></Route>
                    <Route exact path='/Skill' component={Skill}></Route>
                    <Route exact path='/Interest' component={Interest}></Route>
                    <Route exact path='/Salesforce' component={Salesforce}></Route>
                    <Route exact path='/Project' component={Project}></Route>
                    <Route exact path='/Loading' component={Loading}></Route>
            </Switch>
        </AuthProvider>
      );
}

export default App;
