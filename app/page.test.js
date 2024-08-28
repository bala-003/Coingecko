import React from 'react';
import { render, screen, waitFor, cleanup } from '@testing-library/react';
import Home from './page';


global.fetch = jest.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve([
            {
                id: 'bitcoin',
                name: 'Bitcoin',
                current_price: 48000,
                market_cap: 900000000,
                symbol: 'btc',
                sparkline_in_7d: {
                    price: [45000, 46000, 47000, 48000],
                }
            },
            {
                id: 'ethereum',
                name: 'Ethereum',
                current_price: 3200,
                market_cap: 500000000,
                symbol: 'eth',
                sparkline_in_7d: {
                    price: [3000, 3100, 3200],
                }
            }
        ]),
    })
);

afterEach(() => {
    cleanup();
    jest.resetAllMocks();
});

describe('Home Component', () => {
    test('fetches and displays data from the API', async () => {
        render(<Home searchParams={{}} />);


        await waitFor(() => screen.getByText(/Crypto Tokens/i));

        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
        expect(screen.getByText('Ethereum')).toBeInTheDocument();
        expect(screen.getByText('$48000')).toBeInTheDocument();
        expect(screen.getByText('$3200')).toBeInTheDocument();
    });
});
