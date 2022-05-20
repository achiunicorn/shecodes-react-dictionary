import logo from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Amanda Chiu. Open-sourced on{" "}
          <a
            href="https://github.com/achiunicorn/shecodes-react-dictionary"
            title="GitHub repository"
          >
            GitHub
          </a>
          <div>
            Logo Credit:{" "}
            <a
              href="https://www.flaticon.com/free-icons/dictionary"
              title="dictionary icons"
            >
              Dictionary icons created by Freepik - Flaticon
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
