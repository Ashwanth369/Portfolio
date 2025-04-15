import { useRouter } from "next/router";
import Container from "./Container";
import styles from "./Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path ? styles.active : "";
  };

  return (
    <nav className={styles.navbar}>
      <Container>
        <div className={styles.navContent}>
          <div className={styles.logo}>AKG.</div>
          <ul className={styles.navLinks}>
            <li>
              <a href="/" className={isActive("/")}>
                Home
              </a>
            </li>
            <li>
              <Link href="/Education" className={isActive("/Education")}>
                Education
              </Link>
            </li>
            <li>
              <Link href="/Experience" className={isActive("/Experience")}>
                Experience
              </Link>
            </li>
            <li>
              <Link href="/Projects" className={isActive("/Projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link href="/Blog" className={isActive("/Blog")}>
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
