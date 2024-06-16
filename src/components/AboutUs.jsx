import "./AboutUs.css";
import CardPerso from "./Card/CardPerso";
import image from "../assets/About us/Our mission 1_EN.png";
import image2 from "../assets/About us/Our mission_2 EN.png";
import image3 from "../assets/About us/Our mission_3 EN.png";

export default function AboutUs() {
  const isForArtisant = false;
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ipsa, non nisi saepe et impedit ipsum eius alias culpa, illum quae, officiis ea iste deleniti nostrum laudantium illo accusantium quos.";

  const cardItems = [
    { image: image, content: content },
    { image: image2, content: content },
    { image: image3, content: content },
  ];
  return (
    <div className="about-us w-full mt-20">
      <h1 className="text-5xl text-grey-200">About us</h1>
      <div className="about-us-intro p-8">
        <p className="text-black/50">
          Tamalà does not put you first.{" "}
          <strong className="text-bold text-black-800">
            Tamalà puts the artisans first, so they can better serve you and the
            environment
          </strong>
          . In a world where KPIs are focused on speed-to-market and
          bottom-line, Tamalà provides space for artisanship to shine. We are
          slamming on the production brakes. Shifting focus from quantity back
          to quality and individuality. Artisanship is about humanity first and
          foremost.{" "}
          <strong className="text-bold">
            {" "}
            KPIs are focused around connection and creativity
          </strong>
          . A world where production is not based on demand, but rather the
          availability of resources and talent.
        </p>
      </div>
      <div className="about-us-content flex flex-col justify-center items-center">
        {cardItems.map((item) => (
          <CardPerso
            key={item.image}
            imageurl={item.image}
            content={item.content}
            isForArtisant={isForArtisant}
          />
        ))}
      </div>
    </div>
  );
}
