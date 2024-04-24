import { useEffect, useState } from "react";
import "./NavBar.css";
export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="bg-img">
      <div className="container">
        <nav className={`topnav ${isScrolled ? "flou" : ""}`}>
          <a href="#home">Tamalà</a>
          <a href="#news">Our services</a>
          <a href="#about">About us</a>
        </nav>
      </div>
    </div>
  );
}
