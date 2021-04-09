import "./Feature.css";
const Featured = ({ featuredJob }) => {
  if (featuredJob === true) {
    return (
      <div className="feature-pill">
        <p>FEATURED</p>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Featured;
