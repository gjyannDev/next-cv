import { useEffect, useState } from "react";
import React from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import FormSection from "./components/common/FormSection";
import PreviewPage from "./features/previewPage/PreviewPage";
import visionIcon from "/src/assets/icons/vision.svg";
import bullseyeIcon from "/src/assets/icons/bullseye.svg";
import FetchData from "./services/cv/FetchData";
import ResumePdfDocument from "./features/previewPage/ResumePdfDocument";
import downloadIcon from "/src/assets/icons/download_icon2.svg";

export default function App() {
  const print_ref = React.useRef(null);
  const [sectionId, setSectionId] = useState(1);
  const [sideBarStatus, setSideBarStatusMap] = useState({
    personal: "add",
    education: "add",
    work: "add",
  });
  const [showPreview, setShowPreview] = useState(false);
  const [showPDFView, setShowPDFView] = useState(false);
  const {
    fetchedPersonalDetails,
    fetchedLanguagesSkills,
    fetchedFrameWorksSkills,
    fetchedToolsSkills,
    fetchedAllEducationDetails,
    fetchedAllWorkExpDetails,
  } = FetchData();

  const resume_data = {
    personal: fetchedPersonalDetails,
    technicalSkills: {
      language: fetchedLanguagesSkills,
      frameWorks: fetchedFrameWorksSkills,
      tools: fetchedToolsSkills,
    },
    education: fetchedAllEducationDetails,
    workExperience: fetchedAllWorkExpDetails,
  };

  useEffect(() => {
    if (showPDFView) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [showPDFView])

  function getActiveSectionId(sectionId) {
    setSectionId(sectionId);
  }

  function handleSideBarStatusChange(sectionId = null, newStatus) {
    setSideBarStatusMap((prev) => ({
      ...prev,
      [sectionId]: newStatus,
    }));
  }

  function handlePreview() {
    setShowPreview((prev) => !prev);
  }

  function handleDownloadView() {
    setShowPDFView((prev) => !prev);
  }

  //*Might use again don't remove
  // async function handleDownloadPdf() {
  //   const element = print_ref.current;

  //   if (!element) return;

  //   element.classList.add("print-mode");

  //   const canvas = await html2canvas(element, {
  //     scale: 2,
  //     useCORS: true,
  //     scrollX: 0,
  //     scrollY: 0,
  //     windowWidth: document.documentElement.offsetWidth,
  //     windowHeight: document.documentElement.offsetHeight,
  //   });

  //   const data = canvas.toDataURL("image/png");

  //   const pdf = new jsPDF({
  //     orientation: "portrait",
  //     unit: "px",
  //     format: "a4",
  //   });

  //   const img_properties = pdf.getImageProperties(data);
  //   const pdf_width = pdf.internal.pageSize.getWidth();
  //   const pdf_height =
  //     (img_properties.height * pdf_width) / img_properties.width;

  //   pdf.addImage(data, "PNG", 0, 0, pdf_width, pdf_height);

  //   pdf.save(`${fetchedPersonalDetails.full_name} CV.pdf`);

  //   element.classList.remove("print-mode");
  // }

  const currentSideBarStatus = sideBarStatus[sectionId] || "add";

  return (
    <div className="app">
      <header className="header__container">
        <Header />
      </header>

      <div className="main__content container">
        <nav className="side__nav--container">
          <Sidebar
            getActiveSectionId={getActiveSectionId}
            sectionId={sectionId}
          />
          <div className="lower__sidebar--contents">
            <div className="preview__nav--container">
              <button
                type="button"
                onClick={handlePreview}
              >
                <img
                  src={showPreview ? bullseyeIcon : visionIcon}
                  alt={showPreview ? "bullseye icon" : "vision icon"}
                />
              </button>
            </div>
            <div className="download__nav--container">
              <button
                type="button"
                onClick={handleDownloadView}
              >
                <img
                  src={downloadIcon}
                  alt="download svg icon"
                />
              </button>
            </div>
          </div>
        </nav>

        <main className="cv__content--container">
          {/* Form Sections and Preview Section*/}
          <FormSection
            sectionId={sectionId}
            status={currentSideBarStatus}
            setStatus={(newStatus) =>
              handleSideBarStatusChange(sectionId, newStatus)
            }
          />
          {showPreview ? (
            <PreviewPage
              resumeData={resume_data}
              printRef={print_ref}
            />
          ) : null}
        </main>
      </div>

      {showPDFView && (
        <ResumePdfDocument
          personalData={resume_data.personal}
          educationData={resume_data.education}
          workData={resume_data.workExperience}
          technicalSkillsData={resume_data.technicalSkills}
          showPDFView={showPDFView}
          setShowPDFView={setShowPDFView}
        />
      )}
    </div>
  );
}
