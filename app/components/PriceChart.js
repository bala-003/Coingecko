import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import styles from './PriceChart.module.css';

const PriceChart = ({ data }) => {
    const [timeFrame, setTimeFrame] = useState('1H');

    const options = {
        chart: {
            id: 'crypto-sparkline',
            type: 'line',
            toolbar: { show: false },
        },
        stroke: {
            curve: 'smooth',
            colors: ['#00ff00'],
        },
        grid: {
            show: false,
        },
        xaxis: {
            labels: {
                show: false,
            },
        },
        yaxis: {
            labels: {
                show: false,
            },
        },
        tooltip: {
            enabled: true,
            x: {
                formatter: (value) => new Date(value).toLocaleTimeString(), // Tooltip shows time
            },
            y: {
                formatter: (value) => `$${value.toFixed(2)}`, // Tooltip shows price
            },
        },
    };

    const series = [{
        name: 'Price',
        data: data,
    }];

    return (
        <div className={styles.priceChartContainer}>
            <div className={styles.buttonContainer}>
                {['1H', '24H', '1W', '1M', '3M', '1Y'].map((frame) => (
                    <button
                        key={frame}
                        className={styles.button}
                        onClick={() => setTimeFrame(frame)}
                    >
                        {frame}
                    </button>
                ))}
            </div>
            <div className={styles.chartContainer}>
                <Chart
                    options={options}
                    series={series}
                    type="line"
                    width="100%"
                    height="100%"
                />
            </div>
            <div className={styles.actionButtons}>

                <button className={styles.actionButton}> <div className={`${styles.ball} ${styles.rotate1}`}>&#8592;</div>Buy</button>
                <button className={styles.actionButton}> <div className={`${styles.ball} ${styles.rotate2}`}>&#8592;</div>Sell</button>
                <button className={styles.actionButton}> <div className={`${styles.ball} ${styles.rotate3}`}>&#8592;</div>Send</button>
                <button className={styles.actionButton}> <div className={`${styles.ball} ${styles.rotate4}`}>&#8592;</div>More</button>
            </div>
        </div>
    );
};

export default PriceChart;
