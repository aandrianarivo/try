import "./AboutUs.css";
import CardPerso from "./Card/CardPerso";
export default function AboutUs() {
  const title = "Our mission 1";
  const content =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda corporis placeat veniam, minus omnis laboriosam tempore accusantium esse eligendi reiciendis quidem, beatae dolorem inventore aliquid! Veniam ducimus eos voluptatibus corporis?";
  const section = "#PILLAR 1";
  const mission = "Valorize the artisanal";
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
      <div className="about-us-content">
        <CardPerso
          title={title}
          mission={mission}
          content={content}
          section={section}
        />
      </div>
    </div>
  );
}
