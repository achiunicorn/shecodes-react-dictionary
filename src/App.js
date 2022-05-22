import logo from "./dictionary.png";
import "./App.css";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="code" />
        </main>
        <footer className="App-footer">
          <div>
            {" "}
            Coded by Amanda Chiu. Open-sourced on{" "}
            <a
              href="https://github.com/achiunicorn/shecodes-react-dictionary"
              title="GitHub repository"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <div>
            Hosted on{" "}
            <a
              href="https://www.netlify.com/"
              title="Netlify Homepage"
              target="_blank"
              rel="noreferrer"
            >
              Netlify
            </a>
          </div>
          <div>
            Logo Credit:{" "}
            <a
              href="https://www.flaticon.com/free-icons/dictionary"
              title="dictionary icons"
              target="_blank"
              rel="noreferrer"
            >
              Dictionary icons created by Freepik - Flaticon
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
