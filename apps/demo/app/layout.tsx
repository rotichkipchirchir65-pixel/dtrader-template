import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Deriv Trader Demo',
    description: 'Demo application showcasing the Deriv Trader library',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
