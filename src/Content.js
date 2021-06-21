import React from 'react';
import {Route, useRouteMatch} from "react-router-dom"; 
import ProfileSettings from './Profiling/ProfileSettings';
import Homepage from './Homepage/Homepage';
import ContentPage from './ContentPage/ContentPage';
import ContentPage2 from './ContentPage/ContentPage2';
import AddMain from './AddData/AddMain';
const Content = ({user, setUser}) => {
  let match = useRouteMatch();
    return(
      <div className = 'content'>
          <Route exact path = {`${match.path}home`}> 
            <Homepage />  
          </Route>
          <Route exact path = {`${match.path}content/:id`}> 
            <ContentPage />  
          </Route>
          <Route exact path = {`${match.path}content2/:id`}> 
            <ContentPage2 />  
          </Route>
          <Route exact path = {`${match.path}profile-settings`}>
            <ProfileSettings user = {user} setUser = {setUser} />
          </Route>
          <Route path = {`${match.path}add`}>
            <AddMain />
          </Route>
      </div>
    );
}

export default Content;