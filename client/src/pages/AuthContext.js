import React, { useState ,createContext, useEffect } from 'react';

export const UserContext = createContext();


export const UserProvider = (props) => {
    const lsusername = localStorage.getItem('username');
    const lsid = localStorage.getItem('id');
    const [ user, setUser ] = useState({
        username: lsusername,
        id: lsid,
        isAuth: lsusername ? true : false
    });

    useEffect(() => {
        localStorage.setItem('username', user.username);
        localStorage.setItem('id', user.id);
    }, [user])

    return(
        <UserContext.Provider value = {[user, setUser]} >
            {props.children}
        </ UserContext.Provider>
    );
}