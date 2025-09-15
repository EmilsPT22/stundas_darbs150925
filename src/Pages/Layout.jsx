import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
