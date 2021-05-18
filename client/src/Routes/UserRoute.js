import React, {useContext} from 'react';
import { Route, Redirect} from 'react-router-dom';
import { UserContext } from '../pages/AuthContext';

const UserRoute = ({component:Component, ...rest}) => {
    const [user, setUser] = useContext(UserContext);
    return (
        <Route {...rest} render={props => user.isAuth ? <Component {...props}/> : <Redirect to="/"/>}/>
    );
}

export default UserRoute;