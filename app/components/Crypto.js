
'use client';
import { useSearch } from '../context/SearchContext';
import List from './List';

export default function Crypto({ data }) {
    const { query } = useSearch();

    const filteredData = Array.isArray(data) ? data.filter(crypto =>
        crypto.name.toLowerCase().includes(query.toLowerCase()) ||
        crypto.symbol.toLowerCase().includes(query.toLowerCase())
    ) : [];

    return (
        <div>
            {filteredData.map((crypto) => (
                <List crypto={crypto} key={crypto.id} />
            ))}
        </div>
    );
}
