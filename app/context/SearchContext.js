'use client';

import { createContext, useContext, useState } from 'react';


const SearchContext = createContext();


export function SearchProvider({ children }) {
    const [query, setQuery] = useState('');

    const search = (query) => {
        setQuery(query);
    };

    return (
        <SearchContext.Provider value={{ query, search }}>
            {children}
        </SearchContext.Provider>
    );
}

export function useSearch() {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
}
