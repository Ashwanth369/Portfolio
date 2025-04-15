import { useRouter } from "next/router";
import Container from "./Container";
import styles from "./Navbar.module.css";

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
              <a href="/Education" className={isActive("/Education")}>
                Education
              </a>
            </li>
            <li>
              <a href="/Experience" className={isActive("/Experience")}>
                Experience
              </a>
            </li>
            <li>
              <a href="/Projects" className={isActive("/Projects")}>
                Projects
              </a>
            </li>
            <li>
              <a href="/Blog" className={isActive("/Blog")}>
                Blog
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
