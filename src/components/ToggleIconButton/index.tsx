import { IconButton } from "@mui/material";
import { useState } from "react";


export type toggleProps = {
    Props: {
        initialValue?: boolean;
        activeIcon: JSX.Element; 
        disabledIcon: JSX.Element;
        fn: () => void
    }
}

export const ToggleIconButton = ({ Props }: toggleProps) => {

    const [active, setActive] = useState(Props.initialValue || false);

    return (
        <>
            <IconButton
                onClick={() => {
                    setActive(!active);
                    Props.fn();
                }}

                sx={{ color: 'white' }}
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