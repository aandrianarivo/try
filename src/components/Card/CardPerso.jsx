import PropTypes from "prop-types";
export default function CardPerso({ title, section, mission, content }) {
  return (
    <div className="card-perso m-5 h-full flex flex-col w-full p-6 items-stretch md:w-10/12 lg:w-10/12 xl:w-10/12 2xl:w-10/12 md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="header-content w-full md:w-2/4 bg-gray-50 p-6">
        <h3 className="text-bold text-gray-900/90 "> {title}</h3>
        <h2 className="py-8 text-gray-500">{section}</h2>
        <h1 className="py-2 text-bold text-gray-700">{mission}</h1>
      </div>
      <div className="content w-full md:w-2/4 2xl:w-2/4 xl:w-2/4  bg-gray-50 p-6 text-gray-700">
        <p className="tracking-wide leading-relaxed text-clip">{content}</p>
      </div>
    </div>
  );
}

CardPerso.propTypes = {
  section: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  mission: PropTypes.string,
};
