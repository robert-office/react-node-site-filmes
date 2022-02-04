import { IconButton } from "@mui/material";
import { useState } from "react";


export type toggleProps = {
    Props: {
        initialValue?: boolean;
        activeIcon: JSX.Element; 
        disabledIcon: JSX.Element;
        fn: () => void;
        isDarkable? : boolean,
        id? : string
    }
}

export const ToggleIconButton = ({ Props }: toggleProps) => {

    const [active, setActive] = useState(Props.initialValue || false);

    return (
        <>
            <IconButton
                id={Props.id}
                onClick={() => {
                    setActive(!active);
                    Props.fn();
                }}

                sx={{ color: Props.isDarkable ? 'gray' : 'white' }}
                aria-label={`toggleButton`}
            >
            
            { active ? (
                <>
                    { Props.activeIcon }
                </>
            ) : (
                <>
                    { Props.disabledIcon }
                </>
            ) }
                
            </IconButton>
        </>
    );
}