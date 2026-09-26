import Navbar from '@/components/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0, padding: 0 }}>
        {/* Render the Navbar component */}
        <Navbar />
        
        <div style={{ padding: '20px' }}>
          {children}
        </div>
      </body>
    </html>
  );
}