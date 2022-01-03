import { createContext } from 'react';

export const UserContext = createContext({
    value: {
        token: null,
        user: { name: null, email: null },
        email: null,
        name: null
    },
    setValue: (value) => { }
});