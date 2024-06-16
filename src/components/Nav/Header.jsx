import Nav from "./Navbar.component";
import backgroundImage from "../../assets/TANANA.jpg";
import logo from "../../assets/Logo Tamalà.png";
function Header() {
  return (
    <div className="flex flex-col">
      <div
        className=" w-full flex flex-col justify-center items-center max-sm:h-min md:h-1/2
        "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "680px",
        }}
      >
        <div className="mt-4">
          <img
            src={logo}
            style={{ width: "250px", height: "150px" }}
            alt="Tamala"
          />

          {/* <h1 className="text-white text-4xl ">Tamala</h1> */}
        </div>
        <div className="mt-5">
          <p className="text-white">
            The bridge to and from the artisant world of Madagascar
          </p>
        </div>
      </div>
      <Nav />
    </div>
  );
}

export default Header;
