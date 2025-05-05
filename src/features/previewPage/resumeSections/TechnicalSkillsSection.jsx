export default function TechnicalSkillsSection({ data }) {
  console.log(data.language.join(", "));

  return (
    <div className="technical__details--section">
      <h1 className="resume__header--font">Technical Skills</h1>
      <hr className="custom--line" />
      <div className="technical__content--container">
        <div className="language__content--container skills__container">
          <h4 className="resume__header--font">Programming Language: </h4>
          <p>{data.language.join(", ")}</p>
        </div>
        <div className="frameworks__content--container skills__container">
          <h4 className="resume__header--font">Frameworks and Databases: </h4>
          <p>{data.frameWorks.join(", ")}</p>
        </div>
        <div className="frameworks__content--container skills__container">
          <h4 className="resume__header--font">Other Tools and Technologies </h4>
          <p>{data.tools.join(", ")}</p>
        </div>
      </div>
    </div>
  );
}
