"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";
import { FaSearch } from "react-icons/fa";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link
            href="/"
            style={{ fontWeight: path === "/" ? "bold" : "normal" }}
          >
            홈
          </Link>
        </li>
        <li>
          <Link
            href="/movie-list"
            style={{ fontWeight: path === "/movie-list" ? "bold" : "normal" }}
          >
            영화
          </Link>
        </li>
        <li>
          <Link
            href="/tv-list"
            style={{ fontWeight: path === "/tv-list" ? "bold" : "normal" }}
          >
            TV 프로그램
          </Link>
        </li>
        <div className={styles.search}>
          <Link href="/search">
            <FaSearch />
          </Link>
        </div>
      </ul>
    </nav>
  );
}
