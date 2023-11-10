import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import styles from "./auth.module.css";
import { useState } from "react";
import { isValidEmail } from "../utils/validation";

export function Login() {
  const [form, setForm] = useState<Form>({ email: null, pass: null });

  const navigate = useNavigate();

  async function handleLogin() {
    // TODO: Login logic backend
    // Get jwt from backend and store

    if (!form.email || !form.pass) {
      return alert("Email and Password is required");
    }

    if (isValidEmail(form.email) === false) {
      return alert("Please enter a valid email");
    }

    alert("Success");
  }

  return (
    <div className={styles.page_cont}>
      <span className={styles.btn_span}>
        <Button onClick={() => navigate("/")}>Home</Button>
      </span>

      <div className={styles.container}>
        <p>Log in</p>

        <label>Email</label>
        <input
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="abc@email.com"
        />
        <label>Password</label>
        <input
          onChange={(e) => setForm({ ...form, pass: e.target.value })}
          placeholder="*****"
        />
        <Button
          style={{ borderRadius: "0.2rem", marginTop: "0.5rem" }}
          onClick={handleLogin}
        >
          Login
        </Button>
        <span className={styles.creds}>
          Login Credentials:{" "}
          <span className={styles.acc_col}>abc@email.com, 12345</span>
        </span>
      </div>
    </div>
  );
}

interface Form {
  email: string | null;
  pass: string | null;
}
