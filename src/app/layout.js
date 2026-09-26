import Link from 'next/link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        <nav style={{ padding: '20px', background: '#f4f4f4', display: 'flex', gap: '20px' }}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div style={{ padding: '20px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}