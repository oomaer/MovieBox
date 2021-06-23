import React from 'react';
import {Route, useRouteMatch, Switch} from "react-router-dom"; 
import ProfileSettings from './Profiling/ProfileSettings';
import Homepage from './Homepage/Homepage';
import ContentPage from './ContentPage/ContentPage';
import AddMain from './AddData/AddMain';
import FilterContent from './Filter/FilterContent';
import NewsAwardsEvents from './NewsAwardsEvents/NewsAwardsEvents';

const Content = ({user, setUser}) => {
  let match = useRouteMatch();
    return(
      <div className = 'content'>
        <Switch>
          <Route exact path = {`${match.path}home`}> 
            <Homepage />  
          </Route>
          <Route exact path = {`${match.path}content/:id`}> 
            <ContentPage />  
          </Route>
          <Route exact path = {`${match.path}content/:id`}> 
            <ContentPage />  
          </Route>
          <Route exact path = {`${match.path}profile-settings`}>
            <ProfileSettings user = {user} setUser = {setUser} />
          </Route>
          <Route path = {`${match.path}add`}>
            <AddMain />
          </Route>
          <Route path = {`${match.path}filtermovies/:filter`}>
            <FilterContent type = 'movie' />
          </Route>
          <Route path = {`${match.path}filtertvshows/:filter`}>
            <FilterContent type = 'tvshow' />
          </Route>
          <Route path = {`${match.path}movie/:filter`}>
            <NewsAwardsEvents type = 'movie' />
          </Route>
          <Route path = {`${match.path}tvshow/:filter`}>
            <NewsAwardsEvents type = 'tvshow' />
          </Route>
        </Switch>
      </div>
    );
}

export default Content;