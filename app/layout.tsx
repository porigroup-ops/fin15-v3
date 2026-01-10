export const metadata = {
  title: "FIN15 Preview",
  description: "Automated client preview sites",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fi">
      <body>{children}</body>
    </html>
  );
}
