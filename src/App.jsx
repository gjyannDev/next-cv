import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";

export default function App() {

  return (
    <div className="app">
      <header className="header__container">
        <Header />
      </header>

      <div className="main__content container">
        <nav className="side__nav--container">
          <Sidebar />
        </nav>

        <main className="cv__content--container">
          {/* Form Sections and Preview Section*/}
        </main>
      </div>
    </div>
  )
}