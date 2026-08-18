import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Our App</h1>

      <Link to="/about">
        <button>Go to About</button>
      </Link>

      <br />
      <br />

      <Link to="/contact">Go to Contact</Link>
    </div>
  );
}