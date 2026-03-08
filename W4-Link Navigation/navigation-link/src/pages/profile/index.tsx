import Link from "next/link";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>
      <p>Nama: Baskoro Seno Aji</p>
      <p>Jurusan: Informatika</p>

      <Link href="/profile/edit">Edit Profile</Link>
    </div>
  );
}