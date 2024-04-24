import Nav from "./Navbar.component";
import backgroundImage from "../../assets/beau-charpentier-travaillant-bois.jpg";
function Header() {
  return (
    <div>
      <Nav />
      <div
        className=" w-full max-sm:h-min md:h-1/2
        "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "380px",
        }}
      >
        {" "}
      </div>
    </div>
  );
}

export default Header;
