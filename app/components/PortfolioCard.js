import React from 'react';
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({ portfolioValue, total_supply, profitLoss, return24h, networkFee, averageCost }) => {
    return (
        <div className={styles.portfolioCard}>
            <div className={styles.cardHeader}>Portfolio</div>
            <div className={styles.cardContent}>
                <div className={styles.cardRow}>

                    <span className={styles.cardValue}>${portfolioValue.toLocaleString()}</span>
                </div>
                <div className={styles.cardRow}>

                    <span >{total_supply} FRONT</span>
                </div>
                <hr />
                <div className={styles.cardRow}>
                    <span>Profit / Loss</span>
                    <span className={styles.cardValue}>${profitLoss}</span>
                </div><hr />
                <div className={styles.cardRow}>
                    <span>24h Return</span>
                    <span className={styles.cardValue}>${return24h}</span>
                </div><hr />
                <div className={styles.cardRow}>
                    <span>Network Fee</span>
                    <span className={styles.cardValue}>${networkFee}</span>
                </div><hr />
                <div className={styles.cardRow}>
                    <span>Average Cost</span>
                    <span className={styles.cardValue}>${averageCost}</span>
                </div>
            </div>
        </div>
    );
};

export default PortfolioCard;
