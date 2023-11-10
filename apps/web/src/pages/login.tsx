import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import styles from "./auth.module.css";

export function Login() {
  const navigate = useNavigate();

  return (
    <div className={styles.page_cont}>
      <span className={styles.btn_span}>
        <Button onClick={() => navigate("/")}>Home</Button>
      </span>

      <div className={styles.container}>
        <p>Log in</p>

        <label>Email</label>
        <input placeholder="abc@email.com" />
        <label>Password</label>
        <input placeholder="*****" />
        <Button style={{ borderRadius: "0.2rem", marginTop: "0.5rem" }}>
          Login
        </Button>
        <span className={styles.creds}>
          Login Credentials: <span className={styles.acc_col}>abc@email.com, 12345</span>
        </span>
      </div>
    </div>
  );
}
