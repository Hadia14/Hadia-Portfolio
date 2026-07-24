import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "../styles/navbar.css";
import portfolio from "../data/portfolio";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
  "home",
  "about",
  "skills",
  "education",
  "experience",
  "projects",
  "contact",
];

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>

      <div className="logo">
        {portfolio.name}
      </div>

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        {navLinks.map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <HiX /> : <HiMenuAlt3 />}
      </div>

    </nav>
  );
}

export default Navbar;