// import { Badge } from "react-bootstrap";
import "./PillBadge.css"
const PillBadge = ({ text,dark }) => {

  return <div className={`new-badge ${dark && "dark"}`}>
    <p className="button-text">{text}</p>
  </div>;
 
};

export default PillBadge;
