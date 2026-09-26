import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ padding: '20px', background: '#f4f4f4', display: 'flex', gap: '20px' }}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}