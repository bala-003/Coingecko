import { useRouter } from 'next/navigation';
import styles from './BackButton.module.css';

export default function BackButton({ name, symbol, image }) {
    console.log(name, symbol)
    const router = useRouter();

    const handleBack = () => {
        router.push('/');
    };

    return (
        <div className={styles.backButtonContainer}>
            <button className={styles.backButton} onClick={handleBack}>
                &lt;
            </button>
            <div className={styles.cryptoInfo}>
                <img src={image} alt={name} />
                <div className={styles.line}>
                    <h2>{name}</h2>
                    <p>{symbol.toUpperCase()}</p>
                </div>
            </div>
        </div>
    );
}