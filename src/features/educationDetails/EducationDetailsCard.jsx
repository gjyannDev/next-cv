import FetchData from "../../services/cv/FetchData";
import { getYearDate } from "../../services/cv/utils";

export default function EducationDetailsCard() {
  const { fetchedAllEducationDetails } = FetchData();

  return (
    <div className="education__details--card">
      {fetchedAllEducationDetails.map((education) => (
        <div
          className="education__card"
          key={education.id}
        >
          <div className="education__card--left">
            <h1>{education.school}</h1>
            <h3>{getYearDate(education.start_date, education.end_date)}</h3>
          </div>
          <div className="education__card--right"></div>
        </div>
      ))}
    </div>
  );
}
