import { useState } from "react";
import "./ScamDetection.css";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = "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";

function ScamDetection() {
  const [image, setImage] = useState(null);
  const [trustRating, setTrustRating] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [fileType, setFileType] = useState(""); 

  // Handle Image Upload
  function handleImageUpload(file) {
    const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
    if (!allowedTypes.includes(file.type)) {
      alert("Unsupported file format! Please upload PNG, JPEG, or WebP.");
      return;
    }
    setImage(file);
    const filetype = file.type.split("/")[1]; // Extract the file type (e.g., "png", "jpeg", etc.)
    setFileType(filetype); // Store filetype in the state (if needed for future usage)
  }

  // Convert Image to Base64
  function convertToBase64(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result.split(",")[1]); // Extract Base64
      reader.onerror = (error) => reject(error);
    });
  }

  // Retrieve Relevant Context
  async function fetchRelevantContext(userQuery) {
    const response = await fetch("http://localhost:5173/retrieve-context", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: userQuery }),
    });

    const data = await response.json();
    return data.relevant_text;
  }

  // Fetch AI Response
  async function fetchResponse(base64Image, relevantContext, filetype) {
    console.log(relevantContext);
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    };
  
    const body = JSON.stringify({
      model: "gpt-4o", // OpenAI model being used
      messages: [
        {
          role: "system",
          content: `You are an AI that analyzes emails for trustworthiness. Please use the following context to improve your response: ${relevantContext}`
        },
        {
          role: "user",
          content: `Here is an image of an email. Please analyze it and provide a trustworthiness rating (1-10) and an explanation. You must follow directions given in the context. The output should be in this JSON format:
            {
              "trustworthiness": int,
              "explanation": string
            }`
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this email for trustworthiness."
            },
            {
              type: "image_url",
              image_url: {
                url: `data:image/${filetype};base64,${base64Image}`
              }
            }
          ]
        },
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
      const content = data.choices[0].message.content;
  
      // Clean up the output and parse the JSON response
      const cleaned_content = content.replace(/```json|```/g, '').trim();
      const parsedResponse = JSON.parse(cleaned_content); // Parse the cleaned content into JSON
  
      return parsedResponse; // Return the parsed response
    } catch (error) {
      console.error("Error:", error);
      return { trustworthiness: "Error", explanation: "Failed to fetch response." };
    }
  }
  

  // Analyze Email Image
  async function analyzeEmailImage() {
    if (!image) {
      alert("Please upload an image first.");
      return;
    }

    setLoading(true);
    setFetchError(false);

    try {
      const base64Image = await convertToBase64(image);
      const response = await fetchResponse(base64Image);
      setTrustRating(response.trustworthiness);
      setExplanation(response.explanation);
    } catch (error) {
      console.error("Error analyzing email:", error);
      setFetchError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-8 m-auto max-w-lg">
      <h1 className="text-xl font-bold mb-4">Email Trustworthiness Checker</h1>

      <input type="file" accept="image/png, image/jpeg, image/webp" onChange={(e) => handleImageUpload(e.target.files[0])} className="mt-2" />

      <button
        onClick={analyzeEmailImage}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2 disabled:opacity-50"
      >
        Analyze Email
      </button>

      {loading && <p>Analyzing email...</p>}
      {fetchError && <p>Error analyzing email! :(</p>}

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
