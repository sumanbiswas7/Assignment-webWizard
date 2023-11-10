import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";
import { Button } from "./ui/button";

export function NavBar(): JSX.Element {
  const navigate = useNavigate();

  function handleSignout() {}

  return (
    <div className={styles.main_container}>
      <nav className={styles.container}>
        <div className={styles.flex_row_cont}>
          <img src="/logo.svg" className={styles.logo} />
          <a>Home</a>
          <a>About</a>
          <a>Contact</a>
        </div>

        <div className={styles.flex_row_cont}>
          {/* Hide Signup for now as database integration required 💰*/}
          {/* <Button onClick={() => navigate("/auth/signup")}>SIGN UP</Button> */}
          <Button onClick={() => navigate("/auth/login")}>LOG IN</Button>
          <Button onClick={handleSignout} variant="secondary">
            Sign out
          </Button>
        </div>
      </nav>

      <div className={styles.bottom_gradient} />
    </div>
  );
}
