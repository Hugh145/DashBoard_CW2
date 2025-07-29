import { useState } from "react";
import axios from "axios";
import { useTheme } from "../context/themeColorContext";

function AI_Helper() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme(); 

  const handleAsk = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:30001/api/ai/ask", { prompt: question });
      setAnswer(res.data.reply);
    } catch (err) {
      setAnswer(" Error: Failed to get a response from ChatGPT.");
    } finally {
      setLoading(false);
    }
  };

  const predefinedPrompts = [
    "Summarise trends for top 10 companies in the USA.",
    "Summarise trends for top 10 companies in Europe.",
    "Summarise trends for top 10 companies in Asia.",
    "What is market capitalisation?",
    "What does the debt ratio mean?",
    "Which company has the highest audit revenue in Europe?"
  ];

  return (
    <div className="container mt-5 d-flex justify-content-center">
    <div className={`card shadow p-4 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`} style={{ width: "90%" }}>
      <h2>💬 AI Chat Assistant</h2>
      <p>Ask a question about company data, metrics, or definitions:</p>

      <div className="mb-3">
        <textarea
          className="form-control"
          rows={3}
          placeholder="Type your question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button className="btn btn-primary mt-2" onClick={handleAsk} disabled={loading}>
          {loading ? "Thinking..." : "Ask ChatGPT"}
        </button>
      </div>

      <div className="mb-4">
        <strong>Quick Prompts:</strong>
        <div className="d-flex flex-wrap gap-2 mt-2">
          {predefinedPrompts.map((prompt, i) => (
            <button
              key={i}
              className="btn btn-outline-secondary btn-sm"
              onClick={() => {
                setQuestion(prompt);
                setAnswer("");
              }}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {answer && (
        <div className="alert alert-info mt-4" role="alert">
          <strong>ChatGPT:</strong> {answer}
        </div>
      )}
    </div>
    </div>
  );
}

export default AI_Helper;
