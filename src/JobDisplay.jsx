import { Container, Col, Row } from "react-bootstrap";
import JobLanguages from "./JobLanguages.jsx";
import Badge from "./Badge.jsx"
import JobTools from "./JobTools.jsx";
import New from "./New.jsx";
import MiscellaneousInfo from "./MiscellaneousInfo.jsx";
import "./JobDisplay.css";
const JobDisplay = ({ jobInfo }) => {
  return (
    <Container className="jobDisplay-Row">
      <Row>
        <Col xl={1.9}>
          <img
            width={88}
            height={88}
            className="mr-3"
            src={jobInfo.logo}
            alt="Generic placeholder"
          />
        </Col>

        <Col xl={4}>
          <Row>
            <h3 className="company-name">{jobInfo.company}</h3>{" "}
            {jobInfo.new && <New text="NEW!" />}
            {jobInfo.featured && <New text="FEATURE" dark/>}
          </Row>

          <Row>
            <h2 className="job-position">{jobInfo.position}</h2>
          </Row>

          <Row>
            <MiscellaneousInfo data={jobInfo} />
          </Row>
        </Col>

        <Col xl={6}>
          <Row className="m-info">
            <Badge text={jobInfo.role} />
            <Badge text={jobInfo.level}/>
            {/* <Badge variant="info">{jobInfo.role}</Badge>
            <Badge variant="info">{jobInfo.level}</Badge> */}
            <JobLanguages languages={jobInfo.languages} />
            <JobTools tools={jobInfo.tools} />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default JobDisplay;

/* {jobLanguages.map((language, index) => { 
            return <Badge key={index} variant="info">{language}</Badge>
          })} */

/* <div>
          <JobList />
        </div> */
