'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const CryptoContext = createContext();

export function CryptoProvider({ children }) {
    const [data, setData] = useState([]);
    const [cryptoInfo, setCryptoInfo] = useState({ name: '', symbol: '', image: '', price: 0, pL: 0 });
    const [portfolioData, setPortfolioData] = useState({
        portfolioValue: 0,
        total_supply: 0,
        profitLoss: 0,
        return24h: 0,
        networkFee: 0,
        averageCost: 0
    });
    const [cryptoId, setCryptoId] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            if (!cryptoId) {
                console.error('Crypto ID is not defined');
                return;
            }

            try {
                const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&sparkline=true');
                const responseData = await res.json();

                const crypto = responseData.find(item => item.id === cryptoId);
                if (crypto && crypto.sparkline_in_7d && crypto.sparkline_in_7d.price) {
                    const profitLoss = crypto.price_change_percentage_24h;
                    setData(crypto.sparkline_in_7d.price);
                    setCryptoInfo({
                        name: crypto.name,
                        symbol: crypto.symbol,
                        image: crypto.image,
                        price: crypto.current_price,
                        pL: profitLoss
                    });
                    setPortfolioData({
                        portfolioValue: crypto.current_price,
                        total_supply: crypto.total_supply,
                        profitLoss: (crypto.current_price * profitLoss / 100).toFixed(2),
                        return24h: (crypto.current_price * (profitLoss / 100)).toFixed(2),
                        networkFee: (crypto.current_price * 0.01).toFixed(2),
                        averageCost: (crypto.current_price * 0.9).toFixed(2)
                    });
                } else {
                    console.error('Price data is missing for', cryptoId);
                }
            } catch (error) {
                console.error('Error fetching crypto data:', error);
            }
        };

        fetchData();
    }, [cryptoId]);

    return (
        <CryptoContext.Provider value={{ data, cryptoInfo, portfolioData, setCryptoId }}>
            {children}
        </CryptoContext.Provider>
    );
}

export function useCrypto() {
    const context = useContext(CryptoContext);
    if (!context) {
        throw new Error('useCrypto must be used within a CryptoProvider');
    }
    return context;
}
