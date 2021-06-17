import {Route, useRouteMatch, Switch} from "react-router-dom"; 
import AddContent from './Content/AddContent';
import AddDetails from './Content/AddDetails';
import AddPerson from "./Person/AddPerson";
import EditContent from "./Content/EditContent";
import EditPerson from './Person/EditPerson';
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
            <Route path = {`${path}/people`}> 
                <AddPerson />
            </Route>
            <Route path = {`${path}/editperson/:personid`}> 
                <EditPerson />
            </Route>
        </Switch>
       </div>
    )
}

export default AddMain;