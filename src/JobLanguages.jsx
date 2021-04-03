import { Badge} from "react-bootstrap";

const JobLanguages = (props) => {
  return (
    <div>
      {props.jobAttributes.map((language, index) => {
        return (
          <div key={index}>
            <Badge variant="info">{language}</Badge>
          </div>
        );
      })}
    </div>
  )
}

export default JobLanguages 

