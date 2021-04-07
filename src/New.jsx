// import { Badge } from "react-bootstrap";
import "./New.css"
const New = ({ text,dark }) => {
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
  return <div className={`new-badge ${dark && "dark"}`}><p>{text}</p></div>;
  // } else {
  //   return null
  // }
};

export default New;
