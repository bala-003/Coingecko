import React from 'react';
import styles from './PriceTag.module.css';

const PriceTag = ({ price, pL }) => {
    const isProfit = pL >= 0;
    const percentageIncrease = ((Math.abs(pL) / price) * 100).toFixed(2);

    return (
        <div className={styles.priceTag}>
            <p className={styles.label}>Price</p>
            <div className={styles.seperate}>
                <p className={styles.price}>${price.toFixed(2)}</p>
                <p className={`${styles.percentage} ${isProfit ? styles.profit : styles.loss}`}>
                    {isProfit ? `+${percentageIncrease}%` : `-${percentageIncrease}%`}
                </p>
            </div>
        </div>
    );
};

export default PriceTag;
