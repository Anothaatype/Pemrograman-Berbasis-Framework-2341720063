import { useRouter } from "next/router";

export default function halamanToko() {
  const { query } = useRouter();

  return (
    <div>
      <h1>Halaman Toko</h1>
      <p>
        Toko: {Array.isArray(query.slug) ? query.slug.join("-") : query.slug}
      </p>
      <p>
        Kategori: {query.slug ? query.slug[0] : "Semua Kategori"}
      </p>
    </div>
  );
}
