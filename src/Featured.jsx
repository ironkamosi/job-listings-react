import "./Feature.css"
const Featured = ({ featuredJob }) => {
  //   return featuredJob ? (
  //     <Badge pill variant="secondary">
  //       {" "}
  //       Secondary
  //     </Badge>
  //   ) : (
  //     <></>
  //   );
  //pill variant="secondary"
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
