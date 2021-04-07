import "./JobLanguages.css"
import Badge from "./Badge.jsx"

const JobLanguages = (props) => {
  return props.languages.map((language, index) => {
    return (
      <Badge key={index} text={language}/>
      //className="m-language"
      // <Button key={index} className="btn-language">
      //   <p>{language}</p>
      // </Button>
    );
  });

  //variant="info"
}

export default JobLanguages 

