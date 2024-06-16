import PropTypes from "prop-types";
import { Card } from "primereact/card";
import "./Card.css";
export default function CardComponent({ footer, header }) {
  return (
    <div className="card text-center m-5 w-80 h-80">
      <Card
        title="Advanced Card"
        subTitle="Card subtitle"
        footer={footer}
        header={header}
        className="md:w-25rem sm:w-full"
      >
        <p className="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
          sed consequuntur error repudiandae numquam deserunt quisquam repellat
          libero asperiores earum nam nobis, culpa ratione quam perferendis
          esse, cupiditate neque quas!
        </p>
      </Card>
    </div>
  );
}
CardComponent.propTypes = {
  footer: PropTypes.string,
  header: PropTypes.element,
};
