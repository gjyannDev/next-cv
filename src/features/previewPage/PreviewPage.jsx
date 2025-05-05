import PersonalDetailsSection from "./resumeSections/PersonalDetailsSection"
import EducationDetailsSection from "./resumeSections/educationDetailsSection"

export default function PreviewPage({resumeData}) {
  return (
    <div className="preview__page--container">
      <PersonalDetailsSection data={resumeData.personal}/>
      <EducationDetailsSection data={resumeData.education}/>
    </div>
  )
}
