import { useRouter } from "next/router";

export default function BlogDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div>
      <h1>Blog Detail Page</h1>
      <p>Slug artikel: {slug}</p>
    </div>
  );
}