import { useRouteError, NavLink } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Oops! Something went wrong 😢</h1>
      <p style={styles.message}>
        {error?.statusText || error?.message || "Unexpected error occurred."}
      </p>
      <NavLink to="/" style={styles.button}>
        ⬅ Back to Home
      </NavLink>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "black",
    color: "#1e293b",
    textAlign: "center",
    padding: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  },
  message: {
    fontSize: "1.2rem",
    marginBottom: "2rem",
  },
  button: {
    textDecoration: "none",
    background: "#2563eb",
    color: "#fff",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: "500",
  },
};
