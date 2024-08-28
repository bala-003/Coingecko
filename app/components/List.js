
import styles from './List.module.css'
import { useRouter } from 'next/navigation';
// import img from 'next/img';


export default function List({ crypto }) {

    const router = useRouter();

    const handleClick = () => {
        router.push(`/detail?id=${crypto.id}`);
    };

    return <div key={crypto.id} className={styles.crypto_item} onClick={handleClick}>

        <div className={styles.crypto_info}>
            <img src={crypto.image} alt={crypto.name} className={styles.crypto_icon} />
            <div className={styles.crypto_details}>
                <h3>{crypto.name}</h3>
                <p>{crypto.symbol.toUpperCase()}</p>
            </div>
        </div>
        <div className={styles.crypto_stats}>
            <div><p className={styles.crypto_price}>${crypto.current_price.toLocaleString()}</p>
                <p
                    className={`${styles.crypto_change} ${crypto.price_change_percentage_24h > 0 ? styles.up : styles.down
                        }`}
                >
                    {crypto.price_change_percentage_24h > 0 ? "▲" : "▼"}{" "}
                    {Math.abs(crypto.price_change_percentage_24h.toFixed(2))}%
                </p></div>


        </div>
        <div className={styles.imgbox}>
            {crypto.price_change_percentage_24h > 0 ? <img src='./graph-green.png' className={styles.img} /> : <img src='./graph-red.png' className={styles.img} />}
        </div>

    </div>

}

