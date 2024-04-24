import "./OurServices.css";
import pot from "../assets/gros-plan-femme-peinture-pot-argile.jpg";
import CardResponsive from "./Card/CardResponsive";
export default function OurServices() {
  const title1 = "My first card component";
  const title2 = "My second card component";
  const content1 = "Lorem ipsum dolor ?;";
  const content2 =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore voluptatibus, inventore nihil alias commodi unde placeat ea. Tempora, aut reiciendis.";

  return (
    <div className="our-services w-full mt-20">
      <h1 className="text-5xl text-grey-200">Our services</h1>
      <div className="card-container flex space-between mt-10 max-sm:flex max-sm:flex-col max-sm:space-between max-sm:justify-center">
        <CardResponsive title={title1} imageurl={pot} content={content1} />
        <CardResponsive title={title2} imageurl={pot} content={content2} />
      </div>
    </div>
  );
}
