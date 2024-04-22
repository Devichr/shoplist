import logo from "../../logo.svg";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <img className={styles.navIcon} src={logo} alt="logo" />
      <h1 className={styles.navTitle}>Shoping list</h1>
    </nav>
  );
};

export default Navbar;
