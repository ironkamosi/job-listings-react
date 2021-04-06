import { Badge } from "react-bootstrap";

const New = ({ newJob }) => {
  //   return featuredJob ? (
  //     <Badge pill variant="secondary">
  //       {" "}
  //       Secondary
  //     </Badge>
  //   ) : (
  //     <></>
  //   );
  if (newJob === true) {
    return (
      <Badge pill variant="secondary">
        NEW
      </Badge>
    );
  } else {
    return <></>;
  }
};

export default New;
