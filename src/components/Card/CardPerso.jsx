import PropTypes from "prop-types";
export default function CardPerso({
  title,
  section,
  mission,
  content,
  isForArtisant,
  imageurl,
}) {
  return (
    <div className="card-perso m-5 w-10/12 h-full flex justify-center p-6 items-stretch max-sm:flex-col max-lg:flex-col max-lg:w-full">
      {isForArtisant ? (
        <div className="image-container rounded-xl overflow-hidden ">
          <img
            src={imageurl}
            alt="chapeau"
            className="object-cover"
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      ) : (
        <div className="header-content w-2/4 bg-gray-50 p-6 max-sm:w-full max-lg:flex-col max-lg:w-full">
          <img
            src={imageurl}
            alt="chapeau"
            className="object-cover max-sm:w-full"
            style={{ width: "500px", height: "500px" }}
          />
        </div>
      )}
      <div className="content w-2/4 bg-gray-50 p-6 text-gray-700 max-sm:w-full max-lg:flex-col max-lg:w-full">
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
  isForArtisant: PropTypes.bool,
  imageurl: PropTypes.string,
};
