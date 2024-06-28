"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🏠" : ""}
        </li>
        <li>
          <Link href="/search">Search</Link> {path === "/search" ? "👻" : ""}
        </li>
      </ul>
    </nav>
  );
}
