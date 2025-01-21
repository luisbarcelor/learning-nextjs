import Link from "next/link";
import logoImg from "@/assets/logo.png";
import styles from "./nav-bar.module.css";
import Image from "next/image";
import NavBarBackground from "@/components/nav-bar/nav-bar-background";
import NavLink from "@/components/nav-bar/nav-link";

const NavBar = () => {
  return (
    <>
      <NavBarBackground />
      <header className={styles.header}>
        <Link className={styles.logo} href="/nextlevel-food/public">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
