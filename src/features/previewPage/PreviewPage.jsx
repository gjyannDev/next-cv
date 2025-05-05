import PersonalDetailsSection from "./resumeSections/PersonalDetailsSection";
import EducationDetailsSection from "./resumeSections/educationDetailsSection";
import WorkExperienceSection from "./resumeSections/WorkExperienceSection";

export default function PreviewPage({ resumeData }) {
  return (
    <div className="preview__page--container">
      <PersonalDetailsSection data={resumeData.personal} />
      <div className="resume__body--contents">
        <EducationDetailsSection data={resumeData.education} />
        <WorkExperienceSection data={resumeData.workExperience} />
      </div>
    </div>
  );
}
