import {Route, useRouteMatch, Switch} from "react-router-dom"; 
import AddContent from './Content/AddContent';
import AddDetails from './Content/AddDetails';
import EditContent from "./Content/EditContent";
const AddMain = () => {
    let {path, url} = useRouteMatch();
    return(
      <div className = 'add-main'>
        <Switch>
            <Route path = {`${path}/content`}> 
                <AddContent url = {url}/>  
            </Route>
            <Route path = {`${path}/:contentid/details`}> 
                <AddDetails />
            </Route>
            <Route path = {`${path}/:contentid/edit`}> 
                <EditContent />
            </Route>
        </Switch>
       </div>
    )
}

export default AddMain;