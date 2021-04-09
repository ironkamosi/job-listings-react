import { Button } from "react-bootstrap";
import "./BadgeContainer.css";

const Badge = ({text}) => {
  return (
    <Button  className="btn-language">
      <p>{text}</p>
    </Button>
  );
};

export default Badge;
