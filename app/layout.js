import Layout from "@/components/layout/Layout";
import "./globals.css";

export const metadata = {
  title: "Vahid's Next App",
  description: "Developed by Vahid Moeini",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
