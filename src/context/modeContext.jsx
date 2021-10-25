import React, { useState, createContext } from "react";

export const ModeContext = createContext();

export default function ModeProvider({ children }) {
    const [mode, setModeUpdate] = useState(false);

    return (
        <ModeContext.Provider value={ { mode, setModeUpdate } }>
            {children}
        </ModeContext.Provider>
    );
}