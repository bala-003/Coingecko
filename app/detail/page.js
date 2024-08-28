
'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import BackButton from '../components/BackButton';
import PriceTag from '../components/PriceTag';
import PortfolioCard from '../components/PortfolioCard';
import { useCrypto } from '../context/CryptoContext';

const PriceChart = dynamic(() => import('../components/PriceChart'), { ssr: false });

export default function DetailPage() {
    const { data, cryptoInfo, portfolioData, setCryptoId } = useCrypto();
    const searchParams = useSearchParams();
    const cryptoId = searchParams.get('id') || '';

    useEffect(() => {
        if (cryptoId) {
            setCryptoId(cryptoId);
        }
    }, [cryptoId, setCryptoId]);

    return (
        <div>
            <BackButton name={cryptoInfo.name} symbol={cryptoInfo.symbol} image={cryptoInfo.image} />
            <PriceTag price={cryptoInfo.price} pL={cryptoInfo.pL} />
            {data.length > 0 ? (
                <PriceChart data={data} />
            ) : (
                <p>No data available.</p>
            )}
            <PortfolioCard
                portfolioValue={portfolioData.portfolioValue}
                total_supply={portfolioData.total_supply}
                profitLoss={portfolioData.profitLoss}
                return24h={portfolioData.return24h}
                networkFee={portfolioData.networkFee}
                averageCost={portfolioData.averageCost}
            />
        </div>
    );
}
