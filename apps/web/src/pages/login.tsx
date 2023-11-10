import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import styles from "./auth.module.css";
import { useState } from "react";
import { isValidEmail } from "../utils/validation";

export function Login() {
  const [form, setForm] = useState<Form>({ email: null, pass: null });

  const navigate = useNavigate();

  async function handleLogin() {
    if (!form.email || !form.pass) {
      return alert("Email and Password is required");
    }

    if (isValidEmail(form.email) === false) {
      return alert("Please enter a valid email");
    }

    const response = await fetch(
      "https://1t55ielrsb.execute-api.ap-south-1.amazonaws.com/dev/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // You might need to include additional headers like authorization tokens here
        },
        body: JSON.stringify({ email: form.email, password: form.pass }),
      }
    );

    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

    const result = await response.json();

    if (result.status !== 200) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const token = result.data.token || null;
    if (!token) throw new Error(`No token found from API`);
    localStorage.setItem("token", token);
    alert("Login successful");
    navigate("/");
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
