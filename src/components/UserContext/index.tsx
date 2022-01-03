import { ReactChild, ReactChildren } from "react";
import usePersistedState from "utils/usePersistedState";
import { UserContext } from "utils/userContext";

interface AuxProps {
    children: ReactChild | ReactChildren;
}

export const UserContextComponent = ({ children }: AuxProps) => {
    
    const [value, setValue] = usePersistedState('user', {});

    return (
        <UserContext.Provider value={ {value, setValue} } >
            {children}
        </UserContext.Provider>
    )
}