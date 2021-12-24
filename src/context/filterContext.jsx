import React, { useState, createContext } from "react";

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
    const [ filter, setFilterUpdate ] = useState('');

    return (
        <FilterContext.Provider value={ { filter, setFilterUpdate } }>
            {children}
        </FilterContext.Provider>
    );
}