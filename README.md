##CoinGecko Cryptocurrency App

This project is a cryptocurrency dashboard built with Next.js that fetches data from the CoinGecko API, displays a list of cryptocurrencies with search functionality, and provides detailed information for each coin, including a price chart. The app also includes offline support.

#Features
#Cryptocurrency List: Displays a list of cryptocurrencies with their price and 24-hour percentage change.
#Search Functionality: Allows users to search for specific cryptocurrencies by name.
#Detailed Crypto Page: Clicking on a cryptocurrency in the list routes the user to a detailed page, which includes:
Price information
Price change percentage
Sparkline chart using ApexCharts to display historical price data

##Setup Instructions
Clone the repository:

git clone https://github.com/your-username/coingecko-app.git
cd coingecko-app
Install dependencies:

npm install
Run the development server:

npm run dev
Build the app for production:

npm run build

##Issues
Due to some API fetch call limitations, pagination has been temporarily removed. However, the core functionality of the app remains intact.

##Technologies Used
Next.js
React
ApexCharts for graph rendering

##Works yet to complete
API Fetch Challenges: Encountered issues with API fetch, which required additional time to resolve. As a result, pagination was removed from the app

Responsive Design: .

Offline Component Enhancement:

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
