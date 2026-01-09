import ClientPage from "@/components/ClientPage";
import client from "@/data/clients/esimerkkifirma-oy.json";

export const metadata = {
  title: client?.seo?.title || client?.name || "esimerkkifirma-oy",
  description: client?.seo?.description || client?.tagline || "",
};

export default function Page() {
  return <ClientPage client={client} />;
}
