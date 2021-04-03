import { Media} from "react-bootstrap";
import JobLanguages from "./JobLanguages.jsx";
import Featured from "./Featured.jsx"
const JobDisplay = (props) => {
  // console.log(props.jobInfo.languages);
  let jobLanguages = props.jobInfo.languages;
  return (
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src={props.jobInfo.logo}
        alt="Generic placeholder"
      />
      <Media.Body>
        <h5>{props.jobInfo.company}</h5>
        <p>{props.jobInfo.position}</p>
        <div>
          {/* {jobLanguages.map((language, index) => { 
            return <Badge key={index} variant="info">{language}</Badge>
          })} */}
          <JobLanguages jobAttributes={jobLanguages} />
        </div>

        <div>
          <Featured />
        </div>
      </Media.Body>
    </Media>
  );
};
export default JobDisplay;
