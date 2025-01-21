"use client";

import { ReactNode } from "react";
import Link, { LinkProps } from "next/link";
import styles from "./nav-link.module.css";
import { usePathname } from "next/navigation";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

const NavLink = ({ href, children, ...rest }: NavLinkProps) => {
  const path = usePathname();
  
  return (
    <Link
      href={href}
      className={
        path.startsWith(href.toString())
          ? `${styles.link} ${styles.active}`
          : styles.link
      }
      {...rest}
    >
      {children}
    </Link>
  );
};

export default NavLink;
