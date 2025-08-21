"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <h1>Express.js + Next.js CRUD App</h1>

      <div className="menu-toggle" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <ul className={open ? "active" : ""}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
      
      </ul>
    </nav>
  );
}
