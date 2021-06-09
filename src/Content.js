import React from 'react';
import {Route, useRouteMatch} from "react-router-dom"; 
import ProfileSettings from './Profiling/ProfileSettings';
import Homepage from './Homepage/Homepage';
const Content = ({user, setUser}) => {
  let match = useRouteMatch();
    return(
      <div className = 'content'>
          <Route exact path = {`${match.path}home`}> 
            <Homepage />  
          </Route>
          <Route exact path = {`${match.path}profile-settings`}>
            <ProfileSettings user = {user} setUser = {setUser} />
          </Route>
      </div>
    );
}

export default Content;