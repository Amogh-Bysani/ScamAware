import { useState } from "react";
import "./LinkScam.css";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

function ScamDetection() {
  const [image, setImage] = useState(null);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [trustRating, setTrustRating] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  async function fetchResponse(url) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };

    const body = JSON.stringify({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: "You are an AI that analyzes websites for trustworthiness. Rate the trustworthiness of the website from 1-10. Return the response strictly in the following JSON format: { \"trustworthiness\": int, \"explanation\": string }"
        },
        {
          role: "user",
          content: `Analyze the trustworthiness of the following website: ${url}`
        }
      ],
      temperature: 0.2,
    });

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: headers,
        body: body,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("API Error Response:", errorData);
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.error?.message}`);
      }

      const data = await response.json();
      return JSON.parse(data.choices[0].message.content);
    } catch (error) {
      console.error("Error:", error);
      return { trustworthiness: "Error", explanation: "Failed to fetch response." };
    }
  }

  async function analyzeWebsite() {
    if (!websiteUrl) {
      alert("Please enter a website URL.");
      return;
    }

    setLoading(true);
    setFetchError(false);

    try {
      const response = await fetchResponse(websiteUrl);
      setTrustRating(response.trustworthiness);
      setExplanation(response.explanation);
    } catch (error) {
      console.error("Error analyzing:", error);
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8 m-auto max-w-lg">
      <h1 className="text-xl font-bold mb-4">Website Trustworthiness Checker</h1>

      <input
        type="text"
        placeholder="Enter website URL"
        value={websiteUrl}
        onChange={(e) => setWebsiteUrl(e.target.value)}
        className="border p-2 w-full mt-2"
      />
      
      <button
        onClick={analyzeWebsite}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 disabled:opacity-50"
      >
        Analyze
      </button>

      {loading && <p>Analyzing...</p>}
      {fetchError && <p>Error analyzing website! :(</p>}

      {trustRating !== null && (
        <div className="mt-4 p-4 bg-gray-100 rounded">
          <p><strong>Trustworthiness Rating:</strong> {trustRating}/10</p>
          <p><strong>Explanation:</strong> {explanation}</p>
        </div>
      )}
    </div>
  );
}

export default ScamDetection;
