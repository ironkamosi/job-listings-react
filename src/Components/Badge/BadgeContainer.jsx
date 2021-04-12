import "./BadgeContainer.css";
import Badge from "./Badge.jsx";

const BadgeContainer = (props) => {
  return props.languages.map((language, index) => {
    return <Badge key={index} text={language} />;
  });
};

export default BadgeContainer;
