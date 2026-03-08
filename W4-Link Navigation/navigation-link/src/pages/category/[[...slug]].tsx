import { useRouter } from "next/router";

export default function halamanKategori() {
  const { query } = useRouter();
  const slug = query.slug as string[] | undefined;

  return (
    <div>
      <h1>Halaman Kategori</h1>
      {slug && slug.length > 0 ? (
        <>
          <p>Full path: {slug.join(" / ")}</p>
          <ul>
            {slug.map((segment, index) => (
              <li key={index}>Segment {index + 1}: {segment}</li>
            ))}
          </ul>
        </>
      ) : (
        <p>Semua Kategori (tidak ada parameter)</p>
      )}
    </div>
  );
}
