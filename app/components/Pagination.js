
'use client';

import styles from './Pagination.module.css';
import { useRouter } from 'next/navigation';

export default function Pagination({ currentPage, onPageChange }) {
    const router = useRouter();

    const handlePageChange = (page) => {
        router.push(`/?page=${page}`);
    };

    return (
        <div className={styles.pagination}>
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage <= 1}
            >
                Previous
            </button>
            <span>Page {currentPage}</span>
            <button
                onClick={() => handlePageChange(currentPage + 1)}
            >
                Next
            </button>
        </div>
    );
}
