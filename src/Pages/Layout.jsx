import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <header>
        <nav>
          <Link to="/" className="nav-link">
            Home
          </Link>

          <div>
            <Link to="/register" className="nav-link">
              Register
            </Link>
            <Link to="/Login" className="nav-link">
              Login
            </Link>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
