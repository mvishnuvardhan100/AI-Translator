
import { useState } from "react";
import { translateText } from "./components/Translator";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [direction, setDirection] = useState("EN_TO_TE");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const sourceLanguage =
    direction === "EN_TO_TE" ? "English" : "Telugu";

  const targetLanguage =
    direction === "EN_TO_TE" ? "Telugu" : "English";

  const swapLanguages = () => {
    setDirection((prev) =>
      prev === "EN_TO_TE" ? "TE_TO_EN" : "EN_TO_TE"
    );

    setInputText(translatedText);
    setTranslatedText(inputText);
    setError("");
  };

  const clearText = () => {
    setInputText("");
    setTranslatedText("");
    setError("");
  };

  const copyText = async () => {
    if (!translatedText) return;

    try {
      await navigator.clipboard.writeText(translatedText);
      alert("Translation copied!");
    } catch {
      setError("Unable to copy text. Check browser permissions.");
    }
  };

  const handleTranslate = async () => {
    if (!inputText.trim()) {
      setError("Please enter some text first.");
      return;
    }

    setLoading(true);
    setError("");
    setTranslatedText("");

    try {
      const result = await translateText(inputText, direction);
      setTranslatedText(result);
    } catch (err) {
      console.error(err);
      setError("Translation failed. Check your internet connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <h1>LinguaAI</h1>
        <p>AI Powered English ↔ Telugu Translator</p>
      </header>

      <main className="translator-container">
        <div className="language-bar">
          <span>{sourceLanguage}</span>

          <button
            className="swap-button"
            onClick={swapLanguages}
            disabled={loading}
          >
            ⇄
          </button>

          <span>{targetLanguage}</span>
        </div>

        <div className="translation-boxes">
          <div className="text-box">
            <label>{sourceLanguage}</label>

            <textarea
              placeholder={`Enter text in ${sourceLanguage}...`}
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              maxLength={2000}
            />

            <small>{inputText.length}/2000</small>
          </div>

          <div className="text-box">
            <label>{targetLanguage}</label>

            <textarea
              placeholder={
                loading
                  ? "AI is translating..."
                  : "Translation will appear here..."
              }
              value={translatedText}
              readOnly
            />

            <button className="copy-button" onClick={copyText}>
              Copy Translation
            </button>
          </div>
        </div>

        {error && <p className="error-message">{error}</p>}

        <div className="actions">
          <button
            className="translate-button"
            onClick={handleTranslate}
            disabled={loading}
          >
            {loading ? "Translating..." : "Translate"}
          </button>

          <button className="clear-button" onClick={clearText}>
            Clear
          </button>
        </div>
      </main>

      <footer>
        <p>Powered by Open-Source AI Models</p>
      </footer>
    </div>
  );
}

export default App;
