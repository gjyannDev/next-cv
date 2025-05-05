import { getYearDate } from "../../../services/cv/utils";

export default function WorkExperienceSection({ data }) {
  return (
    <div className="work__details--section">
      <h1 className="resume__header--font">Work Experience</h1>
      <hr className="custom--line" />
      <div className="work__card--container">
        {data.map((work, index) => (
          <div className={`work__${index}--container work__resume--card`}>
            <div className="card__content--first">
              <h3 className="school--text resume__header--font">
                {work.company_name}
              </h3>
              <h4>{getYearDate(work.start_date, work.end_date)}</h4>
            </div>
            <div className="card__content--second">
              <p className="resume__header--font degree--text">
                {work.job_title}
              </p>
            </div>
            <div className="card__content--third">
              <ul>
                {work.description.map((des) => (
                  <li>{des}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
