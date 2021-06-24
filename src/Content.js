import React from 'react';
import {Route, useRouteMatch, Switch} from "react-router-dom"; 
import ProfileSettings from './Profiling/ProfileSettings';
import Homepage from './Homepage/Homepage';
import ContentPage from './ContentPage/ContentPage';
import AddMain from './AddData/AddMain';
import FilterContent from './Filter/FilterContent';
import FilterCelebrity from './Filter/FilterCelebrity';
import NewsAwardsEvents from './NewsAwardsEvents/NewsAwardsEvents';
import CelebrityDetails from './Celebrity/CelebrityDetails';

const Content = ({user, setUser}) => {
  let match = useRouteMatch();
    return(
      <div className = 'content'>
        <Switch>
          <Route exact path = {`${match.path}home`}> 
            <Homepage />  
          </Route>
          <Route exact path = {`${match.path}content/:id`}> 
            <ContentPage admin = {true}/>  
          </Route>
          <Route exact path = {`${match.path}profile-settings`}>
            <ProfileSettings user = {user} setUser = {setUser} />
          </Route>
          <Route path = {`${match.path}admin`}>
            <AddMain admin = {true}/>
          </Route>
          <Route path = {`${match.path}filtermovies/:filter`}>
            <FilterContent type = 'movie' />
          </Route>
          <Route path = {`${match.path}filtertvshows/:filter`}>
            <FilterContent type = 'tvshow' />
          </Route>
          <Route path = {`${match.path}filtercelebrities/:filter`}>
            <FilterCelebrity type = 'celebrity' />
          </Route>
          <Route path = {`${match.path}:filter/movie`}>
            <NewsAwardsEvents type = 'movie' admin = {true}/>
          </Route>
          <Route path = {`${match.path}:filter/tvshow`}>
            <NewsAwardsEvents type = 'tvshow' admin = {true} />
          </Route>
          <Route path = {`${match.path}:filter/latest`}>
            <NewsAwardsEvents type = 'latest' admin = {true}/>
          </Route>
          <Route path = {`${match.path}:filter/popular`}>
            <NewsAwardsEvents type = 'popular' admin = {true}/>
          </Route>
          <Route path = {`${match.path}celebrity/:id`}>
            <CelebrityDetails admin = {true}/>
          </Route>
        </Switch>
      </div>
    );
}

export default Content;