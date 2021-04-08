// import { Badge } from "react-bootstrap";
import "./PillBadge.css"
const PillBadge = ({ text,dark }) => {
  //   return featuredJob ? (
  //     <Badge pill variant="secondary">
  //       {" "}
  //       Secondary
  //     </Badge>
  //   ) : (
  //     <></>
  //   );
  // pill variant="secondary"
  // if (newJob === true) {
  return <div className={`new-badge ${dark && "dark"}`}>
    <p className="button-text">{text}</p>
  </div>;
  // } else {
  //   return null
  // }
};

export default PillBadge;
