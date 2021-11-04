import React, { useState, useEffect } from "react";

import "./App.css";
import logo from './logo.svg';

// import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import { Auth } from "aws-amplify";
/* import {
  withAuthenticator,
  AmplifySignOut,
  AmplifyAuthFields,
} from "@aws-amplify/ui-react";

*/

/*
function App() {
  const [userType, setUserType] = useState("");

  let currentUserGroup = ``;

  useEffect(() => {
    async function fetchCurrentUserGroup() {
      Auth.currentAuthenticatedUser().then((authuser) => {
        console.log("AuthUser: ",authuser);
        currentUserGroup =
          authuser.signInUserSession.idToken.payload["cognito:groups"][0];
        setUserType(currentUserGroup);
        console.log(
          currentUserGroup,
          "this is the currentuser in useEffect",
          currentUserGroup.length
        );
      });
    }

    fetchCurrentUserGroup();
    console.log(
      currentUserGroup,
      "this is the currentuser after fetchuserGroup method",
      { fetchCurrentUserGroup }.length
    );
  }, []);

  async function fetchCurrentUserGroup() {
    Auth.currentAuthenticatedUser().then((authuser) => {
     
      currentUserGroup =
        authuser.signInUserSession.idToken.payload["cognito:groups"][0];
      console.log(
        currentUserGroup,
        "this is the currentuser in fetchFunction",
        currentUserGroup.length
      );
      return currentUserGroup;
    });
  }

  Auth.currentAuthenticatedUser().then((authuser) => {
    currentUserGroup =
      authuser.signInUserSession.idToken.payload["cognito:groups"][0];
    console.log(
      currentUserGroup,
      "this is the currentuser rightafter fetching it",
      currentUserGroup.length
    );
  });

  console.log(
    currentUserGroup,
    "this is the currentuser before return",
    currentUserGroup.length
  );
*/
function App()
{
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome To The World of Mobile Dentistry 2021</h1>
        </header>
      </div>
    );
    }
 //   export default withAuthenticator(App);

   export default App;
    /*
    <div className="App">
      <Router>
          <Route path="/leadHome" component={LeadApp} />
          <Route path="/ownerHome" component={OwnerApp} />
          <Route path="/defaultHome" component={DefaultHomeApp} />

          
          {fetchCurrentUserGroup}
          {
            userType === "Lead" ? (
              <Redirect to="/leadHome" />
            ) : ( 
                  userType == "BizOnwer" ? (
                    <Redirect to="/ownerHome" />
                  ) 
                  
                  : ( <Redirect to="/defaultHome" /> )
                      )
                
          }
          <AmplifySignOut />
      </Router>
    </div>
   
  ); 
  
}
export default withAuthenticator(App);
*/

