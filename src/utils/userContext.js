import { createContext } from 'react';

export const UserContext = createContext({
    value: {
        token: null,
        user: { name: null, email: null, path_img: null },
    },
    setValue: (value) => { }
});