import PropTypes from "prop-types";
function CardResponsive({ imageurl, title, content }) {
  return (
    <div className="card-responsive rounded-xl shadow-lg w-1/3 max-sm:w-full">
      <div className="p-5 flex flex-col flex-nowrap">
        <div className="rounded-xl overflow-hidden">
          <img
            src={`${imageurl}`}
            alt="chapeau"
            // style={{ width: "1000px", height: "600px", object_fit: "none" }}
          />
        </div>
        <h5 className="text-2xl md:text-3xl font-medium mt-3 w-full">
          {title}
        </h5>
        <p className="text-black/70 text-lg mt-3 w-full">{content}</p>
      </div>
    </div>
  );
}
CardResponsive.propTypes = {
  imageurl: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
};
export default CardResponsive;
