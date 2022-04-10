import React, { createContext, useState, useEffect } from 'react';


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

    function Login(email, senha) {
        console.log('teste');
        if (email === 'bruno' && senha === '123') {
            setUser({ id: 1, name: 'bruno', email: 'bruno@teste.com' });
            localStorage.setItem('@App:user', JSON.stringify('bruno'));
            localStorage.setItem('@App:id', JSON.stringify(1));
            localStorage.setItem('@App:email', 'bruno@teste.com')
            return true;
        }


        return false
    }

    function Logout() {
        setUser(null);

        sessionStorage.removeItem('@App:user');
        sessionStorage.removeItem('App:token');
    }
    useEffect(() => {
        const storagedUser = localStorage.getItem('@App:user');
        const storagedId = localStorage.getItem('@App:id');
        const storagedEmail = localStorage.getItem('@App:email');

        if (storagedUser) {
            setUser({ id: JSON.parse(storagedId), name: JSON.parse(storagedUser), email: storagedEmail });
        }
    }, []);

    return (
        <UserContext.Provider value={{ signed: Boolean(user), user, Login, Logout }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
