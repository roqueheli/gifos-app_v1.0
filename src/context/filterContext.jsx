import React, { useState, createContext } from "react";

export const FilterContext = createContext();
export const ButtonContext = createContext();

export default function FilterProvider({ children }) {
    const [filter, setFilterUpdate] = useState('');
    const [button, setButtonUpdate] = useState(false);

    return (
        <FilterContext.Provider value={ { filter, setFilterUpdate } }>
            <ButtonContext.Provider value={ { button, setButtonUpdate } }>
                {children}
            </ButtonContext.Provider>
        </FilterContext.Provider>
    );
}