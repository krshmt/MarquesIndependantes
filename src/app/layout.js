import "./globals.css";

export const metadata = {
  title: "Curved Image ✶ Kris",
  description: "List of my favorite independent brands",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
