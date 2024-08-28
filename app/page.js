
import styles from "./page.module.css";
import SearchIcon from "./components/SearchIcon";
import Crypto from './components/Crypto';
import { fetchData } from './utils/fetchData';
// import Pagination from "./components/Pagination";


export default async function Home({ searchParams }) {
  // const page = searchParams.page || 1;
  // const perPage = 10;


  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true`;

  let data = [];
  try {
    data = await fetchData(url);
  } catch (error) {
    console.error('Error fetching data:', error);
    data = [];
  }

  // const res = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${perPage}&page=${page}&sparkline=true`, {
  //   cache: 'no-store' // Optional: Prevent caching for fresh data
  // });


  return (
    <div className={styles.container}>
      <header>
        <SearchIcon />
      </header>
      <h2 className={styles.h2}>Crypto Tokens</h2>
      <Crypto data={data} />
      {/* <Pagination currentPage={parseInt(page)} /> */}
    </div>
  );
}


