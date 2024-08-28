'use client'

import { FaSearch } from 'react-icons/fa'
import styles from "./SearchIcon.module.css";
import { useState } from 'react';
import { useSearch } from '../context/SearchContext';


export default function SearchIcon() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const { search } = useSearch();

    const handleClick = () => {
        setIsOpen(s => !s);
    };

    const handleChange = (event) => {
        setQuery(event.target.value);
        search(event.target.value);
    };
    return <div className={styles.searchContainer}>
        <div className={`${styles.searchWrapper} ${isOpen ? styles.active : ''}`}>
            {isOpen ? (
                <>
                    <FaSearch className={styles.searchIcon} />
                    <input
                        type="text"
                        placeholder="Search for a cryptocurrency..."
                        value={query}
                        onChange={handleChange}
                        className={styles.searchInput}
                    />
                </>
            ) : (
                <FaSearch className={styles.searchIcon} onClick={handleClick} />
            )}
        </div>
    </div>
}