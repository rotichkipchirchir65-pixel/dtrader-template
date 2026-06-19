'use client';

export default function Home() {
    return (
        <main style={styles.main}>
            <div style={styles.container}>
                <h1 style={styles.title}>Deriv Trader Demo</h1>
                <p style={styles.subtitle}>This is a demo application showcasing the Deriv Trader library.</p>

                <div style={styles.content}>
                    <h2>Getting Started</h2>
                    <p>
                        This application uses the <code>@deriv/trader</code> package from the monorepo.
                    </p>

                    <h3>Available Packages:</h3>
                    <ul>
                        <li>
                            <strong>@deriv/trader</strong> - The main trader library
                        </li>
                        <li>
                            <strong>@deriv/components</strong> - Reusable UI components
                        </li>
                        <li>
                            <strong>@deriv/reports</strong> - Reporting utilities
                        </li>
                    </ul>

                    <h3>To Develop:</h3>
                    <pre style={styles.code}>
                        {`npm install          # Install dependencies
npm run dev          # Start the demo app dev server
npm run build        # Build the demo app`}
                    </pre>

                    <p style={styles.note}>
                        The demo app is set up to automatically transpile packages from the monorepo. Changes to
                        packages will be reflected on save!
                    </p>
                </div>
            </div>
        </main>
    );
}

const styles = {
    main: {
        minHeight: '100vh',
        padding: '20px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        maxWidth: '800px',
        background: 'white',
        borderRadius: '12px',
        padding: '40px',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
    },
    title: {
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#333',
    },
    subtitle: {
        fontSize: '16px',
        color: '#666',
        marginBottom: '30px',
    },
    content: {
        lineHeight: '1.6',
        color: '#555',
    },
    code: {
        background: '#f5f5f5',
        padding: '15px',
        borderRadius: '8px',
        overflow: 'auto',
        fontSize: '14px',
        fontFamily: 'monospace',
        margin: '15px 0',
        border: '1px solid #ddd',
    },
    note: {
        marginTop: '20px',
        padding: '15px',
        background: '#e8f4f8',
        borderLeft: '4px solid #667eea',
        borderRadius: '4px',
        fontSize: '14px',
    },
};
