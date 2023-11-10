import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import styles from "./auth.module.css";

export function Signup() {
  const navigate = useNavigate();

  return (
    <div className={styles.page_cont}>
      <span className={styles.btn_span}>
        <Button onClick={() => navigate("/")}>Home</Button>
      </span>

      <div className={styles.container}>
        <p>Sign up</p>

        <label>Email</label>
        <input placeholder="abc@email.com" />
        <label>New Password</label>
        <input placeholder="*****" />
        <Button style={{ borderRadius: "0.2rem", marginTop: "0.5rem" }}>
          Signup
        </Button>
      </div>
    </div>
  );
}
