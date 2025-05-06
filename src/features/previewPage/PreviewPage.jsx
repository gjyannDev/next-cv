import PersonalDetailsSection from "./resumeSections/PersonalDetailsSection";
import EducationDetailsSection from "./resumeSections/educationDetailsSection";
import WorkExperienceSection from "./resumeSections/WorkExperienceSection";
import TechnicalSkillsSection from "./resumeSections/TechnicalSkillsSection";

export default function PreviewPage({ resumeData, printRef }) {
  return (
    <>
      <div
        ref={printRef}
        className="resume__wrapper"
      >
        <div className="preview__page--container">
          <PersonalDetailsSection data={resumeData.personal} />
          <div className="resume__body--contents">
            <EducationDetailsSection data={resumeData.education} />
            <WorkExperienceSection data={resumeData.workExperience} />
            <TechnicalSkillsSection data={resumeData.technicalSkills} />
          </div>
        </div>
      </div>
    </>
  );
}
