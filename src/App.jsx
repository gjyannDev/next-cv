import Header from "./components/layout/Header";

export default function App() {

  return (
    <div className="app">
      <header className="header__container">
        <Header />
      </header>

      <div className="main__content">
        <nav className="nav__container">
          {/* Call the sidebar componenet here */}
        </nav>

        <main className="cv__content--container">
          {/* Form Sections and Preview Section*/}
        </main>
      </div>
    </div>
  )
}