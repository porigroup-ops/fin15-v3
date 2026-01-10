import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";

type PageData = {
  slug: string;
  name?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  sections?: { type: "text"; title?: string; body?: string }[];
  cta?: { label?: string; href?: string };
};

export default function Page({ params }: { params: { slug: string } }) {
  const filePath = path.join(process.cwd(), "data", `${params.slug}.json`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const raw = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(raw) as PageData;

  return (
    <main style={{ padding: 40, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 44, marginBottom: 10 }}>
        {data.heroTitle || data.name || data.slug}
      </h1>

      {data.heroSubtitle && (
        <p style={{ fontSize: 18 }}>{data.heroSubtitle}</p>
      )}

      <hr style={{ margin: "30px 0" }} />

      {data.sections?.map((s, i) => (
        <section key={i} style={{ marginBottom: 22 }}>
          {s.title && <h2>{s.title}</h2>}
          {s.body && <p>{s.body}</p>}
        </section>
      ))}

      {data.cta?.href && (
        <a
          href={data.cta.href}
          style={{
            display: "inline-block",
            marginTop: 18,
            padding: "12px 18px",
            border: "1px solid #111",
            borderRadius: 10,
            textDecoration: "none",
          }}
        >
          {data.cta.label || "Ota yhteyttä"}
        </a>
      )}
    </main>
  );
}
