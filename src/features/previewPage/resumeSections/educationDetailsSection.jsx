import { getYearDate } from "../../../services/cv/utils";

export default function EducationDetailsSection({ data }) {
  return (
    <div className="education__details--section">
      <h1 className="resume__header--font">Education</h1>
      <hr className="custom--line"/>
      <div className="education__cards--container">
        {data.map((educ, index) => (
          <div className={`education__${index}--container educ__resume--card`}>
            <div className="card__content--first">
              <h3 className="school--text resume__header--font">{educ.school}</h3>
              <h4>{getYearDate(educ.start_date, educ.end_date)}</h4>
            </div>
            <div className="card__content--second">
              <p className="resume__header--font degree--text">{educ.degree}</p>
              <p className="address--text">{`${educ.city}, ${educ.country}`}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
