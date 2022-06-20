import cx from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const navItems = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about/" },
  { title: "Services", path: "/services/" },
  { title: "Features", path: "/features/" },
  { title: "Contact Us", path: "/contact/" },
];

function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  const openNavbar = () => {
    setOpenNav(true);
  };

  const closeNavbar = () => {
    setOpenNav(false);
  };
  return (
    <div className={cx(styles.header, styles.active)}>
      <div className={cx("container", styles.container)}>
        <div
          className={cx(styles.overlay, openNav && styles.overlayActive)}
          onClick={closeNavbar}
        ></div>
        <Link to="/" className={styles.logo}>
          Agency
        </Link>
        <nav className={cx(styles.navbar, openNav && styles.navActive)}>
          <div className={styles.navbarTop}>
            <Link to="/" className={styles.logo}>
              Agency
            </Link>
            <button className={styles.navCloseBtn} onClick={closeNavbar}>
              x
            </button>
          </div>
          <ul className={styles.navbarList}>
            <li className={styles.navbarItem} onClick={closeNavbar}>
              {navItems.map((navItem, index) => (
                <Link key={index} className={styles.navbarLink} to={navItem.path}>
                  {navItem.title}
                </Link>
              ))}
            </li>
          </ul>
        </nav>
        <button className={cx(styles.navOpenBtn)} onClick={openNavbar}>
          =
        </button>
      </div>
    </div>
  );
}

export default Navbar;
