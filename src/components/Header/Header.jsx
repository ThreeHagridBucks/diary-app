import styles from "./Header.module.css";
import SelectUser from "../SelectUser/SelectUser";
function Header() {
  return (
    <>
      <img className={styles.logo} src="/logo.svg" alt="Логотип журнала"></img>
      <SelectUser />
    </>
  );
}

export default Header;
