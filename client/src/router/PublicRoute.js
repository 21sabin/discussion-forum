import Login from '../components/Login/Login';
import { BrowserRouter,Route,Switch} from 'react-router-dom';
import React from 'react'

const PublicRoute=()=>(
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Login} exact={true} />
        </Switch>
    </BrowserRouter>
);

export default PublicRoute;