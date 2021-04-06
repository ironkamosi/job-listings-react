import { Badge} from "react-bootstrap";
import "./JobLanguages.css"
const JobLanguages = (props) => {
  return (
      props.languages.map((language, index) => {
        return (
            <Badge key={index} className="m-language"variant="info">{language}</Badge>
        );
      })


  )
}

export default JobLanguages 

