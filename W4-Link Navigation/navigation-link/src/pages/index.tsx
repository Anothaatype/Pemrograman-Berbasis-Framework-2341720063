import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Selamat datang di praktikum Next.js Pages Router.</p>

      <h3>Menu:</h3>
      <ul>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/profile">Profile</Link></li>
        <li><Link href="/produk">Produk</Link></li>
        <li><Link href="/blog/nextjs-seru">Blog Example</Link></li>
        <li><Link href="/setting/user">User Setting</Link></li>
      </ul>
    </div>
  );
}