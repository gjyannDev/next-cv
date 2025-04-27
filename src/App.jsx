import { useState } from "react";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import FormSection from "./components/common/FormSection";

export default function App() {
  const [sectionId, setSectionId] = useState(null);

  function getActiveSectionId(sectionId) {
    setSectionId(sectionId);
  }

  return (
    <div className="app">
      <header className="header__container">
        <Header />
      </header>

      <div className="main__content container">
        <nav className="side__nav--container">
          <Sidebar getActiveSectionId={getActiveSectionId}/>
        </nav>

        <main className="cv__content--container">
          {/* Form Sections and Preview Section*/}
          <FormSection sectionId={sectionId} />
        </main>
      </div>
    </div>
  );
}
