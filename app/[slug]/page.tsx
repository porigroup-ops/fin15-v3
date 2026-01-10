export default function ClientPage({ params }: { params: { slug: string } }) {
  return (
    <main style={{ padding: 40 }}>
      <h1>Preview: {params.slug}</h1>
      <p>Dynaaminen reitti toimii </p>
    </main>
  );
}
