import { Badge } from "react-bootstrap";
import "./JobTools.css"
const JobTools = (props) => {
  return (
      props.tools.map((tool, index) => {
        return (
          <Badge key={index} className="m-info-tools" variant="info">
            {tool}
          </Badge>
        );
      })
  );
};

export default JobTools;
