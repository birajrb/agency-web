import cx from "classnames";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useScrollPosition } from "../../hooks/useScrollPosition";
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
  const scrollPosition = useScrollPosition();

  console.log(scrollPosition);
  const openNavbar = () => {
    setOpenNav(true);
  };

  const closeNavbar = () => {
    setOpenNav(false);
  };

  return (
    <div className={cx(styles.header, scrollPosition > 400 ? styles.active : null)}>
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
              <AiOutlineClose />
            </button>
          </div>
          <ul className={styles.navbarList}>
            {navItems.map((navItem, index) => (
              <li key={index} className={styles.navbarItem} onClick={closeNavbar}>
                <Link className={styles.navbarLink} to={navItem.path}>
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className={cx(styles.navOpenBtn)} onClick={openNavbar}>
          <GiHamburgerMenu />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
