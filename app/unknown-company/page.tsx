import ClientPage from "@/components/ClientPage";
import client from "@/data/clients/unknown-company.json";

export const metadata = {
  title: client?.seo?.title || client?.name || "unknown-company",
  description: client?.seo?.description || client?.tagline || "",
};

export default function Page() {
  return <ClientPage client={client} />;
}
