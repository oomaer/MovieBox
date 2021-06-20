import {Route, useRouteMatch, Switch} from "react-router-dom"; 
import AddContent from './Content/AddContent';
import AddDetails from './Content/AddDetails';
import AddCelebrity from "./Person/AddCelebrity";
import EditContent from "./Content/EditContent";
import EditCelebrity from './Person/EditCelebrity';
import AddAwardEvent from "./AwardsNews/AddAwardEvent";
import AddNews from "./AwardsNews/AddNews"; 
import EditNews from './AwardsNews/EditNews';
import EditAwardEvent from './AwardsNews/EditAwardEvent';
const AddMain = () => {
    let {path, url} = useRouteMatch();
    return(
      <div className = 'add-main'>
        <Switch>
            <Route path = {`${path}/add`}> 
                <AddContent url = {url}/>  
            </Route>
            <Route path = {`${path}/:contentid/details`}> 
                <AddDetails />
            </Route>
            <Route path = {`${path}/:contentid/edit`}> 
                <EditContent />
            </Route>
            <Route path = {`${path}/celebrity`}> 
                <AddCelebrity />
            </Route>
            <Route path = {`${path}/editcelebrity/:personid`}> 
                <EditCelebrity />
            </Route>
            <Route path = {`${path}/awardsevents`}> 
                <AddAwardEvent />
            </Route>
            <Route path = {`${path}/editawardevent/:id`}> 
                <EditAwardEvent />
            </Route>
            <Route path = {`${path}/addNews`}> 
                <AddNews />
            </Route>
            <Route path = {`${path}/editnews/:id`}> 
                <EditNews />
            </Route>
        </Switch>
       </div>
    )
}

export default AddMain;