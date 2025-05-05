import PersonalDetailsSection from "./resumeSections/PersonalDetailsSection"

export default function PreviewPage({resumeData}) {
  return (
    <div className="preview__page--container">
      <PersonalDetailsSection data={resumeData.personal}/>
    </div>
  )
}
