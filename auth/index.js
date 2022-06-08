import React, { createContext, useState, useEffect } from 'react';
import { getUser } from '../pages/api/user';

const DEFAULT_VALUE = {
    state: {
        login: '',
        password: '',
    },
    setState: () => { }
}
export const UserContext = createContext(DEFAULT_VALUE);


export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({});

    const Login = async (login, password) => {

        const { data } = await getUser({ login, password });

        if (!data.error) {
            const { data: { user: userDb } } = data;
            setUser({ id: userDb._id, name: userDb.name, login: userDb.login });
            localStorage.setItem('@App:user', JSON.stringify(userDb.name));
            localStorage.setItem('@App:id', JSON.stringify(userDb._id));
            localStorage.setItem('@App:login', userDb.login)
            localStorage.setItem('@App:catName', userDb.catName)
            localStorage.setItem('@App:token', data.data.token)
            return true;
        }
        return false;
    }

    const Logout = () => {
        setUser(null);
        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('App:token');
    }

    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedId = localStorage.getItem('@App:id');
        const storagedEmail = localStorage.getItem('@App:login');
        const storageNameCat = localStorage.getItem('@App:catName')

        if (storagedUser) {
            setUser({ id: JSON.parse(storagedId), name: JSON.parse(storagedUser), login: storagedEmail, catName:storageNameCat });
        }
    }, []);

    return (
        <UserContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
