import "./globals.css";

export const metadata = {
  title: "Kris - Cadeaux anniversaire",
  description: "PAYEZ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
