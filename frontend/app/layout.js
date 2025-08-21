import Navbar from "../components/Navbar";
import "./style.css"; 


export const metadata = {
  title: "Next.js + Express CRUD",
  description: "Frontend for Express.js backend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
